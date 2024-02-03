
#include <Geom_Curve.hxx>
#include <Geom_BSplineCurve.hxx>
#include <GeomLProp_SLProps.hxx>
#include <gp_Pnt.hxx>
#include <gp_Vec.hxx>
#include <vector>

// outputs a list of vectors containing the tangents to the points on the curve
std::vector<gp_Vec> calculate_tangent_vectors(const Handle(Geom_BSplineCurve)& bsplineCurve) {
    std::vector<gp_Vec> tangentVectors;
    std::gp_Vec tangentVector;
    std::gp_Pnt point;
    int knots = bsplineCurve->NbKnots();
    TColStd_Array1OfReal knotsArray(1, knots);
    bsplineCurve->Knots(knotsArray);
    for (int i = 0; i < knots; i++) {
        Standard_Real knot = knotsArray(i);
        bsplineCurve->D1(knot, point, tangentVector);
        tangentVectors.push_back(tangentVector);
    }
    return tangentVectors;
}

int main(int argc, char* argv[]) {
    return 1;
}
