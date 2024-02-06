#include <iostream>
#include <IGESControl_Reader.hxx>
#include <IFSelect_ReturnStatus.hxx>
#include <TopoDS.hxx>
#include <TopExp_Explorer.hxx>
#include <BRepAdaptor_Curve.hxx>
#include <GeomAdaptor_Curve.hxx>
#include <TopoDS_Edge.hxx>
#include <GCPnts_AbscissaPoint.hxx>
#include "ShapeProcessor.hpp"
#include <TopoDS_Shape.hxx>

int main(int argc, char *argv[])
{

    if (argc < 2)
    {
        std::cerr << "Usage: " << argv[0] << " <path_to_iges_file.igs>" << std::endl;
        return 1;
    }

    // Create an IGESControl_Reader object.
    IGESControl_Reader reader;

    // Read the .IGS file.
    IFSelect_ReturnStatus stat = reader.ReadFile(argv[1]);

    // Check the return value of the ReadFile() method.
    if (stat != IFSelect_ReturnStatus::IFSelect_RetDone)
    {
        std::cerr << "Error reading file" << std::endl;
        return 1;
    }

    // Transfer the IGES data into OpenCASCADE internal structure
    reader.TransferRoots();

    // Get the TopoDS_Shape object that represents the geometry in the .IGS file.
    TopoDS_Shape shape = reader.OneShape();

    // Use the TopoDS_Shape object as needed.
    // ...
    ProcessShape(shape);

    return 0;
}