#include <fstream>
#include <vector>
#include <Geom_Curve.hxx>
#include <gp_Vec.hxx>

void generateGCode(const std::vector<gp_Vec>& tangentVectors, const std::string& outputPath) {
    std::ofstream outFile(outputPath);
    if (!outFile.is_open()) {
        std::cerr << "Error opening output file." << std::endl;
        return;
    }

    // Initial position of the tool head, assuming it starts at (0, 0, 0)
    gp_Pnt currentPosition(0.0, 0.0, 0.0);

    // Constants
    const double zIncrement = 1.0; // Constant Z movement for each step
    const double feedRate = 100.0; // Constant feed rate

    // Iterate over each tangent vector
    for (const auto& vec : tangentVectors) {
        // Calculate the new position by adding the tangent vector to the current position
        gp_Pnt newPosition = currentPosition.Translated(vec);

        // Generate the G01 command
        outFile << "G01 "
                << "X" << newPosition.X() << " "
                << "Y" << newPosition.Y() << " "
                << "Z" << (currentPosition.Z() + zIncrement) << " " // Increment Z position
                << "F" << feedRate << std::endl;

        // Update the current position to the new position
        currentPosition = newPosition;
    }

    outFile.close();
    std::cout << "G-code generated successfully at " << outputPath << std::endl;
}