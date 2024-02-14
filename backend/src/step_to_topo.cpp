#include <iostream>
#include <STEPControl_Reader.hxx> 
#include <TopoDS_Shape.hxx> 
#include <BRepTools.hxx> 
#include <iostream>
#include <string>
using namespace std;

TopoDS_Shape read_step(const string& filename) { 
    STEPControl_Reader reader; 
    IFSelect_ReturnStatus status = reader.ReadFile(filename.c_str());

    if (status != IFSelect_RetDone) {
        cout << "Error reading STEP file." << endl;
        return TopoDS_Shape();
    }

    cout << "Number of roots in STEP file: " << reader.NbRootsForTransfer() << endl;
    cout << "STEP roots transferred: " << reader.TransferRoots() << endl;
    cout << "Number of resulting shapes is: " << reader.NbShapes() << endl;

    TopoDS_Shape result = reader.OneShape();

    if (result.IsNull()) {
        cout << "Error: The resulting shape is invalid." << endl;
        return TopoDS_Shape();
    }

    return result;
}

int main(int argc, char* argv[]) {
    string full_frame_filename = "Full_Frame.STEP";
    TopoDS_Shape full_frame_shape = read_step(full_frame_filename);

    string rrh_filename = "RRH.STEP";
    TopoDS_Shape rrh_shape = read_step(rrh_filename);
}