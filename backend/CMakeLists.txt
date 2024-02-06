cmake_minimum_required(VERSION 3.0)
project(Tubender)

set(CMAKE_CXX_STANDARD 14)


find_package(OpenCASCADE REQUIRED)
include_directories(${OCE_INCLUDE_DIRS})
add_executable(cad_to_gcode src/cad_to_gcode.cpp)
target_link_libraries(cad_to_gcode ${OpenCASCADE_LIBRARIES})
# Include OpenCASCADE directories
include_directories(${OpenCASCADE_INCLUDE_DIR})

add_executable(todoShape_to_geomCurve src/todoDsShape_to_geomCurve.cpp src/igs_to_todoDsShape.cpp src/ShapeProcessor.hpp)
target_link_libraries(todoShape_to_geomCurve ${OpenCASCADE_LIBRARIES})

# Add a new executable for IGES to TopoDS_Shape conversion
# add_executable(iges_to_shape src/igs_to_todoDsShape.cpp)
# target_link_libraries(iges_to_shape ${OpenCASCADE_LIBRARIES})




