#include <iostream>
#include <TopoDS_Shape.hxx>
#include "step_to_topo.hpp"
#include "shape_to_bspline.hpp"
#include "tangent_vectors_geom_bspline.hpp"
#include "iges_to_topo.hpp"

// int main(int argc, char* argv[]) {
//     // TopoDS_Shape shape = TopoDS_Shape();
//     // bool eq = shape.IsEqual(TopoDS_Shape());
//     // std::cout << eq << std::endl;
// }

int main() {
    try {
        std::string step_filename = "Full_Frame.STEP";
        std::string iges_filename = "Full_Frame.IGS";

        std::cout << "Reading STEP file..." << step_filename << std::endl;

        TopoDS_Shape step_shape = read_step(step_filename);
        TopoDS_Shape iges_shape = read_iges(iges_filename.c_str());

        std::cout << "Creating B-Spline curves from shapes..." << std::endl;

        Handle(Geom_BSplineCurve) bsplineCurveStep = CreateBSplineFromShape(step_shape);
        Handle(Geom_BSplineCurve) bsplineCurveIges = CreateBSplineFromShape(iges_shape);

        std::cout << "Calculating tangent vectors..." << std::endl;

        std::vector<gp_Vec> tangentVectorsStep = calculate_tangent_vectors(bsplineCurveStep);
        std::vector<gp_Vec> tangentVectorsIges = calculate_tangent_vectors(bsplineCurveIges);
    } catch (const std::exception& e) {
        std::cerr << "Exception caught: " << e.what() << std::endl;
    }

    return 0;
}