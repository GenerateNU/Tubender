#include <fstream>
#include <iostream>
#include <vector>
#include <Geom_Curve.hxx>
#include <Geom_BSplineCurve.hxx>
#include <GeomLProp_SLProps.hxx>
#include <gp_Pnt.hxx>
#include <gp_Vec.hxx>
#include <GeomAPI_PointsToBSpline.hxx>

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

std::vector<gp_Vec> calculate_tangent_vectors(const Handle(Geom_BSplineCurve) & bsplineCurve)
{
    std::cout << "Calculating tangent vectors..." << std::endl;

    std::vector<gp_Vec> tangentVectors;
    gp_Vec tangentVector;
    gp_Pnt point;
    int knots = bsplineCurve->NbKnots();
    Standard_Real step_size = 1.0 / static_cast<double>(knots); // Ensure double division
    Standard_Real first_parameter = bsplineCurve->FirstParameter();
    Standard_Real last_parameter = bsplineCurve->LastParameter();
    for (Standard_Real u = first_parameter; u <= last_parameter; u += step_size)
    {
        bsplineCurve->D1(u, point, tangentVector);
        tangentVectors.push_back(tangentVector);
    }

    std::cout << "Calculated " << tangentVectors.size() << " tangent vectors." << std::endl;
    return tangentVectors;
}

Handle(Geom_BSplineCurve) createExampleBSplineCurve()
{
    std::cout << "Creating an example B-Spline curve..." << std::endl;

    TColgp_Array1OfPnt points(1, 4);
    points.SetValue(1, gp_Pnt(0, 0, 0));
    points.SetValue(2, gp_Pnt(1, 2, 0));
    points.SetValue(3, gp_Pnt(3, 3, 0));
    points.SetValue(4, gp_Pnt(4, 0, 0));

    GeomAPI_PointsToBSpline splineBuilder(points);
    return splineBuilder.Curve();
}

int main(int argc, char *argv[])
{
    std::cout << "Program started." << std::endl;

    // Create or obtain a BSplineCurve
    Handle(Geom_BSplineCurve) bsplineCurve = createExampleBSplineCurve();

    // Calculate tangent vectors
    std::vector<gp_Vec> tangentVectors = calculate_tangent_vectors(bsplineCurve);

    // Specify the output path for the G-code file
    std::string outputPath = "output.gcode";
    if (argc > 1)
    {
        outputPath = argv[1]; // Allow specifying output path as a command line argument
    }

    // Generate G-code
    generateGCode(tangentVectors, outputPath);

    std::cout << "Program completed." << std::endl;
}
   
