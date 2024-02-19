cmake_minimum_required(VERSION 3.0)
project(Tubender)

set(CMAKE_CXX_STANDARD 14)
set(OpenCASCADE_DIR "/usr/local/Cellar/opencascade/7.7.2_2/lib/cmake/opencascade")
find_package(OpenCASCADE REQUIRED)
include_directories(${OCE_INCLUDE_DIRS})

add_executable(cad_to_gcode src/cad_to_gcode.cpp)
add_executable(iges_to_topo src/iges_to_topo.cpp)
add_executable(step_to_topo src/step_to_topo.cpp)
add_executable(determine_file_type src/determine_file_type.cpp)
add_executable(file_uploading_endpoint src/file_uploading_endpoint.cpp)
target_link_libraries(cad_to_gcode ${OpenCASCADE_LIBRARIES})
target_link_libraries(iges_to_topo ${OpenCASCADE_LIBRARIES})
target_link_libraries(step_to_topo ${OpenCASCADE_LIBRARIES})
target_link_libraries(determine_file_type ${OpenCASCADE_LIBRARIES})
target_link_libraries(file_uploading_endpoint ${OpenCASCADE_LIBRARIES})

find_package(Threads)
find_package(ZLIB)
find_package(OpenSSL)

if(OPENSSL_FOUND)
    include_directories(${OPENSSL_INCLUDE_DIR})
endif()

if (NOT CMAKE_BUILD_TYPE)
    message(STATUS "No build type selected, default to Release")
    set(CMAKE_BUILD_TYPE "Release")
endif()

if (MSVC)
    set(Boost_USE_STATIC_LIBS "On")
    find_package( Boost 1.70 COMPONENTS system thread regex REQUIRED )
else()
    find_package( Boost 1.70 COMPONENTS system thread REQUIRED )
endif()

include_directories(${Boost_INCLUDE_DIR})

set(PROJECT_INCLUDE_DIR ${PROJECT_SOURCE_DIR}/include)

include_directories("${PROJECT_INCLUDE_DIR}")