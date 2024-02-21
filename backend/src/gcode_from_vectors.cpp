#include <fstream>
#include <iostream>
#include <vector>
#include <Geom_Curve.hxx>
#include <Geom_BSplineCurve.hxx>
#include <GeomLProp_SLProps.hxx>
#include <gp_Pnt.hxx>
#include <gp_Vec.hxx>
#include <GeomAPI_PointsToBSpline.hxx>
#include "gcode_from_vectors.hpp"


void generateGCode(const std::vector<gp_Vec> &tangentVectors, const std::string &outputPath)
{
    std::ofstream outFile(outputPath);
    if (!outFile.is_open())
    {
        std::cerr << "Error opening output file." << std::endl;
        return;
    }
    std::cout << "Starting G-code generation..." << std::endl;
    // Initial position of the tool head, assuming it starts at (0, 0, 0)
    gp_Pnt currentPosition(0.0, 0.0, 0.0);
    // Constants
    const double zIncrement = 1.0; // Constant Z movement for each step
    const double feedRate = 100.0; // Constant feed rate
    int vectorCount = 0; // For logging progress
    // Iterate over each tangent vector
    for (const auto &vec : tangentVectors)
    {
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
        // Logging progress
        vectorCount++;
        if (vectorCount % 100 == 0) // Log every 100 vectors processed
        {
            std::cout << "Processed " << vectorCount << " vectors..." << std::endl;
        }
    }
    outFile.close();
    std::cout << "G-code generated successfully at " << outputPath << std::endl;
}

// int main(int argc, char *argv[])
// {
//     std::cout << "Program started." << std::endl;
//     // Create or obtain a BSplineCurve
//     Handle(Geom_BSplineCurve) bsplineCurve = createExampleBSplineCurve();
//     // Calculate tangent vectors
//     std::vector<gp_Vec> tangentVectors = calculate_tangent_vectors(bsplineCurve);
//     // Specify the output path for the G-code file
//     std::string outputPath = "output.gcode";
//     if (argc > 1)
//     {
//         outputPath = argv[1]; // Allow specifying output path as a command line argument
//     }
//     // Generate G-code
//     generateGCode(tangentVectors, outputPath);
//     std::cout << "Program completed." << std::endl;
// }