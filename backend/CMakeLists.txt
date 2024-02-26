cmake_minimum_required(VERSION 3.5)
project(Tubender)

set(CMAKE_CXX_STANDARD 14)
set(OpenCASCADE_DIR "/usr/local/Cellar/opencascade/7.7.2_2/lib/cmake/opencascade")
find_package(OpenCASCADE REQUIRED)
include_directories(${OCE_INCLUDE_DIRS})

add_executable(cad_to_gcode
    src/cad_to_gcode.cpp
    src/iges_to_topo.cpp
    src/step_to_topo.cpp
    src/shape_to_bspline.cpp
    src/tangent_vectors_geom_bspline.cpp
    src/gcode_from_vectors.cpp
)
target_link_libraries(cad_to_gcode ${OpenCASCADE_LIBRARIES})