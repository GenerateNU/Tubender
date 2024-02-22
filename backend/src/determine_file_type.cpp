
#include <iostream>
#include <string>
#include <TopoDS_Shape.hxx>
#include <iostream> 
#include <filesystem> 
// #include "step_to_topo.cpp"
// #include "iges_to_topo.cpp"

using namespace std; 

TopoDS_Shape convert_file(const string filepath) { 
    std::__fs::filesystem::path p(filepath); 
    string extension = p.extension().string();
    for (auto& x : extension) { 
        x = tolower(x); 
    } 
    TopoDS_Shape shape = TopoDS_Shape();
    cout << "File extension: " << extension << endl;
    if (extension == ".iges" || extension == ".igs") {
        cout << "Reading IGES file." << endl;
        // TopoDS_Shape shape = read_iges(filepath.c_str());
        return shape;
    } else if (extension == ".step" || extension == ".stp") {
        cout << "Reading Step file." << endl;
        // TopoDS_Shape shape = read_step(filepath.c_str());
        return shape;
    } else {
        throw std::runtime_error("Error: File type not supported.");
    }
}

int main(int argc, char* argv[]) {
    string step_file = "Full_Frame.STEP";
    TopoDS_Shape shape = convert_file(step_file);

    return 0; 
}
  
// int main() 
// { 
//     // The path to the file 
//     char* filepath = "C:\\Users\\Drunk\\Desktop\\l.png"; 
  
//     // Passing the path as argument to the function 
//     std::__fs::filesystem::path p(filepath); 
  
//     // Displaying filename and extensions separately 
//     // By accessing the respective constructors 
//     cout << "filename and extension: " << p.filename() 
//          << std::endl; 
//     cout << "filename only: " << p.stem() << std::endl; 
//     cout << "Extension: " << p.extension(); 
  
//     return 0; 
// }
