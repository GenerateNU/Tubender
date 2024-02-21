#ifndef GCODE_FROM_VECTORS
#define GCODE_FROM_VECTORS

#include <vector>
#include <gp_Vec.hxx>

void generateGCode(const std::vector<gp_Vec> &tangentVectors, const std::string &outputPath);

#endif