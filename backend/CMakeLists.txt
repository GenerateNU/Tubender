cmake_minimum_required(VERSION 3.5)
project(Tubender)

set(CMAKE_CXX_STANDARD 14)
set(OpenCASCADE_DIR "/usr/lib/cmake/opencascade/")
find_package(OpenCASCADE REQUIRED)
include_directories("/usr/include/opencascade/")
include_directories("${PROJECT_SOURCE_DIR}/dependencies")

add_executable(cad_to_gcode
    # src/cad_to_gcode.cpp
    # src/iges_to_topo.cpp
    # src/step_to_topo.cpp
    # src/shape_to_bspline.cpp
    # src/tangent_vectors_geom_bspline.cpp
    # src/gcode_from_vectors.cpp
    src/manual_input_to_gcode.cpp
)

# add_executable(iges_to_topo src/iges_to_topo.cpp)
# add_executable(step_to_topo src/step_to_topo.cpp)
# add_executable(shape_to_bspline src/shape_to_bspline.cpp)
# add_executable(tangent_vectors_geom_bspline src/tangent_vectors_geom_bspline.cpp)
add_executable(manual_input_to_gcode src/manual_input_to_gcode.cpp)
# target_link_libraries(cad_to_gcode ${OpenCASCADE_LIBRARIES})
# target_link_libraries(iges_to_topo ${OpenCASCADE_LIBRARIES})
# target_link_libraries(shape_to_bspline ${OpenCASCADE_LIBRARIES})
# target_link_libraries(tangent_vectors_geom_bspline ${OpenCASCADE_LIBRARIES})
# target_link_libraries(step_to_topo ${OpenCASCADE_LIBRARIES})
target_link_libraries(cad_to_gcode ${OpenCASCADE_LIBRARIES})
target_link_libraries(manual_input_to_gcode ${OpenCASCADE_LIBRARIES})
