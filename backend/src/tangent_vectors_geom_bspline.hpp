#ifndef TANGENT_CALCULATOR_H
#define TANGENT_CALCULATOR_H

#include <vector>
#include <Geom_BSplineCurve.hxx>
#include <gp_Vec.hxx>

std::vector<gp_Vec> calculate_tangent_vectors(const Handle(Geom_BSplineCurve)& bsplineCurve);

#endif