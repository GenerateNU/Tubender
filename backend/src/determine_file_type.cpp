
#include <iostream>
#include <string>
#include <TopoDS_Shape.hxx>
#include <filesystem> 
using namespace std; 

TopoDS_Shape convert_file(const string filepath) { 
    filesystem::path p(filepath); 
    string extension = p.extension().string().tolower();
    if (extension == ".iges" || extension == ".igs") {
        TopoDS_Shape shape = read_iges(filepath.c_str());
        return shape;
    } else if (extension == ".step" || extension == ".stp") {
        TopoDS_Shape shape = read_step(filepath.c_str());
        return shape;
    } else {
        throw std::runtime_error("Error: File type not supported.");
    }
}