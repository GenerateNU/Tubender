#include <TopoDS_Shape.hxx>
#include <TopExp_Explorer.hxx>
#include <TopoDS_Edge.hxx>
#include <BRep_Tool.hxx>
#include <Geom_Curve.hxx>
#include <GeomAPI_Interpolate.hxx>
#include <TColgp_HArray1OfPnt.hxx>
#include <GCPnts_AbscissaPoint.hxx>
#include <GeomAdaptor_Curve.hxx>
#include <vector>
#include <GeomAPI_PointsToBSpline.hxx>
#include <TopoDS_Vertex.hxx>
#include <TopExp.hxx>
#include <TopoDS.hxx>
#include <gp_Pnt.hxx>
#include <TColgp_Array1OfPnt.hxx>
#include "shape_to_bspline.hpp"

bool VerticesMatch(const TopoDS_Vertex& v1, const TopoDS_Vertex& v2) {
    gp_Pnt p1 = BRep_Tool::Pnt(v1);
    gp_Pnt p2 = BRep_Tool::Pnt(v2);
    return p1.IsEqual(p2, Precision::Confusion());
}

std::vector<TopoDS_Edge> OrderEdges(const TopoDS_Shape& shape) {
    std::vector<TopoDS_Edge> unorderedEdges, orderedEdges;

    // Fill unorderedEdges with all edges in the shape
    for (TopExp_Explorer exp(shape, TopAbs_EDGE); exp.More(); exp.Next()) {
        unorderedEdges.push_back(TopoDS::Edge(exp.Current()));
    }

    if (unorderedEdges.empty()) return orderedEdges;

    // Start with a random edge
    orderedEdges.push_back(unorderedEdges.front());
    unorderedEdges.erase(unorderedEdges.begin());

    while (!unorderedEdges.empty()) {
        bool matchFound = false;

        TopoDS_Vertex startV, endV;
        TopExp::Vertices(orderedEdges.front(), startV, endV); // Get start/end vertices of the current path

        for (auto it = unorderedEdges.begin(); it != unorderedEdges.end(); ++it) {
            TopoDS_Vertex startVNext, endVNext;
            TopExp::Vertices(*it, startVNext, endVNext); // Get vertices of the next candidate edge

            if (VerticesMatch(endV, startVNext)) { // Match end to start
                orderedEdges.push_back(*it); // Place it at the end
                endV = endVNext; // Update end vertex of the path
                unorderedEdges.erase(it);
                matchFound = true;
                break;
            } else if (VerticesMatch(startV, endVNext)) { // Match start to end
                orderedEdges.insert(orderedEdges.begin(), *it); // Place it at the beginning
                startV = startVNext; // Update start vertex of the path
                unorderedEdges.erase(it);
                matchFound = true;
                break;
            }
        }

        if (!matchFound) {
            break;
        }
    }

    return orderedEdges;
}

// Function to sample points from an edge
std::vector<gp_Pnt> SamplePointsFromEdge(const TopoDS_Edge& edge, int numPoints) {
    std::vector<gp_Pnt> points;
    double first, last;
    Handle(Geom_Curve) curve = BRep_Tool::Curve(edge, first, last);
    if (!curve.IsNull()) {
        double step = (last - first) / (numPoints - 1);
        for (int i = 0; i < numPoints; ++i) {
            gp_Pnt pnt = curve->Value(first + i * step);
            points.push_back(pnt);
        }
    }
    return points;
}

Handle(Geom_BSplineCurve) CreateSimpleBSpline(const TopoDS_Shape& shape) {
    TColgp_Array1OfPnt points(1, 6);

    points.SetValue(1, gp_Pnt(0.0, 0.0, 0.0));
    points.SetValue(2, gp_Pnt(1.0, 2.0, 0.0));
    points.SetValue(3, gp_Pnt(2.0, 4.0, 1.0));
    points.SetValue(4, gp_Pnt(3.0, 6.0, 1.0));
    points.SetValue(5, gp_Pnt(4.0, 8.0, 0.0));
    points.SetValue(6, gp_Pnt(5.0, 10.0, 0.0));

    GeomAPI_PointsToBSpline splineBuilder(points);
    return splineBuilder.Curve();
}

Handle(Geom_BSplineCurve) CreateBSplineFromShape(const TopoDS_Shape& shape) {
    std::vector<TopoDS_Edge> orderedEdges = OrderEdges(shape);
    std::vector<gp_Pnt> allPoints;
    const int SAMPLE_NUM = 10;

    for (const auto& edge : orderedEdges) {
        std::vector<gp_Pnt> edgePoints = SamplePointsFromEdge(edge, SAMPLE_NUM);
        allPoints.insert(allPoints.end(), edgePoints.begin(), edgePoints.end());
    }

    // Convert std::vector<gp_Pnt> to TColgp_Array1OfPnt
    TColgp_Array1OfPnt arrayPoints(1, allPoints.size());
    for (Standard_Integer i = 0; i < allPoints.size(); ++i) {
        arrayPoints.SetValue(i + 1, allPoints[i]);
    }

    // // create simple bspline using CreateSimpleBSpline function
    // Handle(Geom_BSplineCurve) simpleSpline = CreateSimpleBSpline();

    // // make sure the simpleSpline is not null
    // if (simpleSpline.IsNull()) {
    //     std::cout << "simpleSpline is null" << std::endl;
    // } else {
    //     std::cout << "simpleSpline is not null" << std::endl;
    // }
    
    GeomAPI_PointsToBSpline splineBuilder(arrayPoints);    
    return splineBuilder.Curve();
}
