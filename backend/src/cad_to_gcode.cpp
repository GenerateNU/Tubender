#include <iostream>
#include <TopoDS_Shape.hxx>
#include "step_to_topo.hpp"
#include "shape_to_bspline.hpp"
#include "tangent_vectors_geom_bspline.hpp"
#include "iges_to_topo.hpp"
#include "gcode_from_vectors.hpp"

TopoDS_Shape convert_file(const std::string filepath) {
    std::__fs::filesystem::path p(filepath);
    std::string extension = p.extension().string();
    for (auto& x : extension) {
        x = tolower(x);
    }
    TopoDS_Shape shape = TopoDS_Shape();
    std::cout << "File extension: " << extension << std::endl;
    if (extension == ".iges" || extension == ".igs") {
        std::cout << "Reading IGES file." << std::endl;
        TopoDS_Shape shape = read_iges(filepath.c_str());
        return shape;
    } else if (extension == ".step" || extension == ".stp") {
        std::cout << "Reading Step file." << std::endl;
        TopoDS_Shape shape = read_step(filepath.c_str());
        return shape;
    } else {
        throw std::runtime_error("Error: File type not supported.");
    }
}

int main(int argc, char *argv[]) {
    try {
        // Check if the correct number of arguments are passed
        if (argc != 3) {
            std::cerr << "Usage: " << argv[0] << " <input_file_path> <output_file_path>" << std::endl;
            return 1; // Return an error code
        }

        // Get file and output path from command line arguments
        std::string filename = argv[1];
        std::string outputPath = argv[2];

        // Assuming the rest of your code goes here
        TopoDS_Shape shape = convert_file(filename);
        Handle(Geom_BSplineCurve) bsplineCurve = CreateBSplineFromShape(shape);
        std::vector<gp_Vec> tangentVectors = calculate_tangent_vectors(bsplineCurve);
        generateGCode(tangentVectors, outputPath);

    } catch (const std::exception& e) {
        std::cerr << "Exception caught: " << e.what() << std::endl;
        return 1; // Return an error code
    }

    return 0;
}