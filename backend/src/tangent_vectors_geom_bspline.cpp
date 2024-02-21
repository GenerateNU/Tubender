#include <Geom_Curve.hxx>
#include <Geom_BSplineCurve.hxx>
#include <GeomLProp_SLProps.hxx>
#include <gp_Pnt.hxx>
#include <gp_Vec.hxx>
#include <vector>
#include <iostream>
#include "tangent_vectors_geom_bspline.hpp"
// Outputs a list of vectors containing the tangents at various points along the curve
std::vector<gp_Vec> calculate_tangent_vectors(const Handle(Geom_BSplineCurve)& bsplineCurve) {
    std::vector<gp_Vec> tangentVectors;
    gp_Vec tangentVector;
    gp_Pnt point;
    Standard_Real first_parameter = bsplineCurve->FirstParameter();
    Standard_Real last_parameter = bsplineCurve->LastParameter();
    int numSamples = bsplineCurve->NbKnots() + 1; // For example, you might want samples at each knot and one in between each
    Standard_Real step_size = (last_parameter - first_parameter) / (numSamples - 1);
    for (Standard_Real u = first_parameter; u <= last_parameter; u += step_size) {
        bsplineCurve->D1(u, point, tangentVector);
        tangentVectors.push_back(tangentVector);
        if (u + step_size > last_parameter && u != last_parameter) {
            // Ensure the last parameter is included without going over
            u = last_parameter - step_size;
        }
    }
    return tangentVectors;
}