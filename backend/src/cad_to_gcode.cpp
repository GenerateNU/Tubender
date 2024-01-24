#include <iostream>
#include <TopoDS_Shape.hxx>
#include <STEPControl_Reader.hxx> 
#include <TopoDS_Shape.hxx> 
#include <BRepTools.hxx> 
#include <iostream>
#include <string>
using namespace std;


TopoDS_Shape step_conversion(const string& filename) { 
    STEPControl_Reader reader; 
    IFSelect_ReturnStatus status = reader.ReadFile(filename.c_str());

    if (status != IFSelect_RetDone) {
        cout << "Error reading STEP file." << endl;
        return TopoDS_Shape();
    }

    IFSelect_PrintCount mode = IFSelect_ItemsByEntity;
    reader.PrintCheckLoad(true, mode); // true to print the load status

    Standard_Integer NbRoots = reader.NbRootsForTransfer();
    cout << "Number of roots in STEP file: " << NbRoots << endl;

    Standard_Integer NbTrans = reader.TransferRoots();
    cout << "STEP roots transferred: " << NbTrans << endl;

    cout << "Number of resulting shapes is: " << reader.NbShapes() << endl;

    TopoDS_Shape result = reader.OneShape();

    return result;
}

int main(int argc, char* argv[]) {
    TopoDS_Shape shape = TopoDS_Shape();
    bool eq = shape.IsEqual(TopoDS_Shape());
    std::cout << eq << std::endl;

    string filename = "Full_Frame.STEP";
    TopoDS_Shape step_shape = step_conversion(filename);
}