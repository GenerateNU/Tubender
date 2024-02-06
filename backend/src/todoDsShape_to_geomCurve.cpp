#include "ShapeProcessor.hpp"
#include <TopoDS.hxx>
#include <TopExp_Explorer.hxx>
#include <BRepAdaptor_Curve.hxx>
#include <GeomAdaptor_Curve.hxx>
#include <TopoDS_Edge.hxx>
#include <GCPnts_AbscissaPoint.hxx>
#include <iostream>

// Function to process a TopoDS_Shape and analyze its geometrical properties
void ProcessShape(const TopoDS_Shape &shape)
{
    // Iterate through all edges in the shape
    for (TopExp_Explorer explorer(shape, TopAbs_EDGE); explorer.More(); explorer.Next())
    {
        TopoDS_Edge edge = TopoDS::Edge(explorer.Current());

        // Convert TopoDS_Edge to Geom_Curve
        BRepAdaptor_Curve curveAdapter(edge);
        Handle(Geom_Curve) geomCurve = curveAdapter.Curve().Curve();

        // Analyze the curve (e.g., calculate length)
        double length = GCPnts_AbscissaPoint::Length(curveAdapter);

        // If the curve is a bend, analyze its attributes
        // This would involve more specific logic, depending on how bends are defined

        // Example output
        std::cout << "Curve Length: " << length << std::endl;
    }
}
