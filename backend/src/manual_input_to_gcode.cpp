#include <fstream>
#include <iostream>
#include <vector>
#include <cstring>
#include "manual_input_to_gcode.hpp"

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
    std::string outputPath = "output.gcode";
    Bend bendsArray[2] = {
        {308.864, "y+", 4.25, 128.016, 333.502},
        {333.502, "y-", 4.25, 55.372, 150.876}
    };
    std::vector<Bend> bends(bendsArray, bendsArray + 2);
    // Generate G-code
    generateGCode(bends, outputPath);
    std::cout << "Program completed." << std::endl;
    return 0;
}