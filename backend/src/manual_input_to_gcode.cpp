#include <fstream>
#include <iostream>
#include <vector>
#include <cstring>
#include "manual_input_to_gcode.hpp"
#include "json.hpp"
using json = nlohmann::json;


std::string generateAnvilPosition(const int bendRadius) {
        return "8.907";   
}

void getAbsolutePositionGCode(std::ofstream &outFile){
    outFile << "G90" << std::endl;
    outFile << "G1 X0 Y0 Z0 F80" << std::endl;
    outFile << "G91" << std::endl;
}

// NTD: Figure out + vs - for bend direction
void generateGCode(const std::vector<Bend> &bends, const std::string &outputPath) {
    std::ofstream outFile(outputPath);
    if (!outFile.is_open()) {
        std::cerr << "Error opening output file." << std::endl;
        return;
    }
    std::cout << "Starting G-code generation..." << std::endl;
    // Constants
    const int anvilFeedRate = 80; // Avil feed rate
    const int tubeFeedRate = 150; // Tube feed rate
    // Iterate over each bend
    for (const auto &bend : bends) {
        // Set Anvil for Use
        getAbsolutePositionGCode(outFile);
        // Push Tube Striaght Through the Machine
        outFile << "G1 "
                << "Z" << bend.tubeLengthBeforeBend << " "
                << "F" << tubeFeedRate << std::endl;
        // Position the anvil
        char direction = bend.bendDirection[0];
        char bendSign = bend.bendDirection[1];
        outFile << "G1 "
                // << std::toupper(static_cast<unsigned char>(bend.bendDirection[0])) << generateAnvilPosition(bend.bendRadius) << " "
                << char(toupper(direction)) << bendSign << generateAnvilPosition(bend.bendRadius) << " "
                << "F" << anvilFeedRate << std::endl;
        // Push Tube Bend Through the Machine
        outFile << "G1 "
                << "Z" << bend.bendArcLength << " "
                << "F" << tubeFeedRate << std::endl;
        // Check if last bend
        if (&bend == &bends.back()) {
            // If last bend, push tube straight through the machine
            getAbsolutePositionGCode(outFile);
            outFile << "G1 "
                    << "Z" << bend.tubeLengthAfterBend << " "
                    << "F" << tubeFeedRate << std::endl;
        }
    }
    outFile.close();
    std::cout << "G-code generated successfully at " << outputPath << std::endl;
}


int main(int argc, char *argv[]) {
    std::cout << "Program started." << std::endl;

    if (argc > 2) {
        std::string outputPath = argv[1];
        std::string inputData = argv[2];

        json j = json::parse(inputData);

        std::vector<Bend> bends;

        for (const auto& item : j["bends"]) {
            Bend bend;
            bend.tubeLengthBeforeBend = item["straightTubeBefore"]["value"];
            bend.bendDirection = item["direction"]["value"];
            bend.bendRadius = item["radius"]["value"];
            bend.bendArcLength = item["arcLength"]["value"];
            bend.tubeLengthAfterBend = item["straightTubeAfter"]["value"];

            bends.push_back(bend);
        }

        generateGCode(bends, outputPath);

    } else {
        std::cerr << "No data provided!" << std::endl;
        return 1;
    }

    std::cout << "Program completed." << std::endl;
    return 0;
}