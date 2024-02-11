cmake_minimum_required(VERSION 3.0)
project(Tubender)

set(CMAKE_CXX_STANDARD 14)
set(OpenCASCADE_DIR "/usr/local/Cellar/opencascade/7.7.2_2/lib/cmake/opencascade")
find_package(OpenCASCADE REQUIRED)
include_directories(${OCE_INCLUDE_DIRS})

add_executable(cad_to_gcode src/cad_to_gcode.cpp)
add_executable(iges_to_topo src/iges_to_topo.cpp)
add_executable(shape_to_bspline src/shape_to_bspline.cpp)
target_link_libraries(cad_to_gcode ${OpenCASCADE_LIBRARIES})
target_link_libraries(iges_to_topo ${OpenCASCADE_LIBRARIES})
target_link_libraries(shape_to_bspline ${OpenCASCADE_LIBRARIES})

