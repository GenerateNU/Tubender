#ifndef BSPLINE_CREATOR_H
#define BSPLINE_CREATOR_H

#include <TopoDS_Shape.hxx>
#include <Geom_BSplineCurve.hxx>

Handle(Geom_BSplineCurve) CreateBSplineFromShape(const TopoDS_Shape& shape);

#endif