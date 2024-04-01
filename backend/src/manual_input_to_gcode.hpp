#ifndef GCODE_FROM_MANUAL_INPUT
#define GCODE_FROM_MANUAL_INPUT

#include <vector>
#include <string>

struct Bend {
    double tubeLengthBeforeBend;
    std::string bendDirection;
    double bendRadius;
    double bendArcLength;
    double tubeLengthAfterBend;
};

std::string generateAnvilPosition(const int bendRadius);
void getAbsolutePositionGCode(std::ofstream &outFile);
void generateGCode(const std::vector<Bend> &bends, const std::string &outputPath);

#endif