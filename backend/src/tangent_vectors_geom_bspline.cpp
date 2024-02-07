
#include <Geom_Curve.hxx>
#include <Geom_BSplineCurve.hxx>
#include <GeomLProp_SLProps.hxx>
#include <gp_Pnt.hxx>
#include <gp_Vec.hxx>
#include <vector>
#include <iostream>

// outputs a list of vectors containing the tangents to the knots on the curve
std::vector<gp_Vec> calculate_tangent_vectors(const Handle(Geom_BSplineCurve)& bsplineCurve) {
    std::vector<gp_Vec> tangentVectors;
    gp_Vec tangentVector;
    gp_Pnt point;
    int knots = bsplineCurve->NbKnots();
    Standard_Real step_size = 1 / knots;
    TColStd_Array1OfReal knotsArray(1, knots);
    Standard_Real first_parameter = bsplineCurve->FirstParameter();
    Standard_Real last_parameter = bsplineCurve->LastParameter();
    for (int u = first_parameter; u < last_parameter; u += step_size) {
        bsplineCurve->D1(u, point, tangentVector);
        tangentVectors.push_back(tangentVector);
    }
    return tangentVectors;
}

int main(int argc, char* argv[]) {
    return 1;
}
