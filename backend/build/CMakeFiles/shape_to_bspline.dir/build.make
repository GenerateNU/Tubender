# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.28

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /opt/homebrew/Cellar/cmake/3.28.1/bin/cmake

# The command to remove a file.
RM = /opt/homebrew/Cellar/cmake/3.28.1/bin/cmake -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /Users/kaamilthobani/Desktop/MasterFolder/GenerateProject/Tubender/Tubender/backend

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /Users/kaamilthobani/Desktop/MasterFolder/GenerateProject/Tubender/Tubender/backend/build

# Include any dependencies generated for this target.
include CMakeFiles/shape_to_bspline.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include CMakeFiles/shape_to_bspline.dir/compiler_depend.make

# Include the progress variables for this target.
include CMakeFiles/shape_to_bspline.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/shape_to_bspline.dir/flags.make

CMakeFiles/shape_to_bspline.dir/src/shape_to_bspline.cpp.o: CMakeFiles/shape_to_bspline.dir/flags.make
CMakeFiles/shape_to_bspline.dir/src/shape_to_bspline.cpp.o: /Users/kaamilthobani/Desktop/MasterFolder/GenerateProject/Tubender/Tubender/backend/src/shape_to_bspline.cpp
CMakeFiles/shape_to_bspline.dir/src/shape_to_bspline.cpp.o: CMakeFiles/shape_to_bspline.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=/Users/kaamilthobani/Desktop/MasterFolder/GenerateProject/Tubender/Tubender/backend/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/shape_to_bspline.dir/src/shape_to_bspline.cpp.o"
	/Library/Developer/CommandLineTools/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/shape_to_bspline.dir/src/shape_to_bspline.cpp.o -MF CMakeFiles/shape_to_bspline.dir/src/shape_to_bspline.cpp.o.d -o CMakeFiles/shape_to_bspline.dir/src/shape_to_bspline.cpp.o -c /Users/kaamilthobani/Desktop/MasterFolder/GenerateProject/Tubender/Tubender/backend/src/shape_to_bspline.cpp

CMakeFiles/shape_to_bspline.dir/src/shape_to_bspline.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/shape_to_bspline.dir/src/shape_to_bspline.cpp.i"
	/Library/Developer/CommandLineTools/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /Users/kaamilthobani/Desktop/MasterFolder/GenerateProject/Tubender/Tubender/backend/src/shape_to_bspline.cpp > CMakeFiles/shape_to_bspline.dir/src/shape_to_bspline.cpp.i

CMakeFiles/shape_to_bspline.dir/src/shape_to_bspline.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/shape_to_bspline.dir/src/shape_to_bspline.cpp.s"
	/Library/Developer/CommandLineTools/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /Users/kaamilthobani/Desktop/MasterFolder/GenerateProject/Tubender/Tubender/backend/src/shape_to_bspline.cpp -o CMakeFiles/shape_to_bspline.dir/src/shape_to_bspline.cpp.s

# Object files for target shape_to_bspline
shape_to_bspline_OBJECTS = \
"CMakeFiles/shape_to_bspline.dir/src/shape_to_bspline.cpp.o"

# External object files for target shape_to_bspline
shape_to_bspline_EXTERNAL_OBJECTS =

shape_to_bspline: CMakeFiles/shape_to_bspline.dir/src/shape_to_bspline.cpp.o
shape_to_bspline: CMakeFiles/shape_to_bspline.dir/build.make
shape_to_bspline: /opt/homebrew/lib/libTKXMesh.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKOpenGlTest.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKXDEDRAW.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKTObjDRAW.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKQADraw.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKExpress.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKOpenGl.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKXDEIGES.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKXDECascade.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKXmlXCAF.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKBinTObj.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKXmlTObj.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKTObj.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKXDESTEP.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKBinXCAF.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKXSDRAW.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKMeshVS.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKSTEP.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKSTEPAttr.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKSTEP209.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKSTEPBase.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKIGES.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKSTL.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKVRML.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKXSBase.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKRWMesh.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKXDE.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKXCAF.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKDCAF.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKBin.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKBinL.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKXml.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKXmlL.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKStd.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKStdL.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKVCAF.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKCAF.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKLCAF.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKCDF.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKViewerTest.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKTopTest.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKOffset.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKFillet.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKFeat.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKBool.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKBO.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKPrim.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKV3d.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKDraw.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKHLR.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKMesh.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKShHealing.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKTopAlgo.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKGeomAlgo.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKBRep.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKGeomBase.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKG3d.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKG2d.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKService.7.7.2.dylib
shape_to_bspline: /opt/homebrew/lib/libTKMath.7.7.2.dylib
shape_to_bspline: /opt/homebrew/opt/freeimage/lib/libfreeimage.dylib
shape_to_bspline: /opt/homebrew/opt/tcl-tk/lib/libtk8.6.dylib
shape_to_bspline: /opt/homebrew/opt/freetype/lib/libfreetype.dylib
shape_to_bspline: /opt/homebrew/opt/tcl-tk/lib/libtcl8.6.dylib
shape_to_bspline: /opt/homebrew/lib/libTKernel.7.7.2.dylib
shape_to_bspline: /opt/homebrew/opt/tbb/lib/libtbb.12.11.dylib
shape_to_bspline: /opt/homebrew/opt/tbb/lib/libtbbmalloc.2.11.dylib
shape_to_bspline: CMakeFiles/shape_to_bspline.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --bold --progress-dir=/Users/kaamilthobani/Desktop/MasterFolder/GenerateProject/Tubender/Tubender/backend/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable shape_to_bspline"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/shape_to_bspline.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/shape_to_bspline.dir/build: shape_to_bspline
.PHONY : CMakeFiles/shape_to_bspline.dir/build

CMakeFiles/shape_to_bspline.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/shape_to_bspline.dir/cmake_clean.cmake
.PHONY : CMakeFiles/shape_to_bspline.dir/clean

CMakeFiles/shape_to_bspline.dir/depend:
	cd /Users/kaamilthobani/Desktop/MasterFolder/GenerateProject/Tubender/Tubender/backend/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /Users/kaamilthobani/Desktop/MasterFolder/GenerateProject/Tubender/Tubender/backend /Users/kaamilthobani/Desktop/MasterFolder/GenerateProject/Tubender/Tubender/backend /Users/kaamilthobani/Desktop/MasterFolder/GenerateProject/Tubender/Tubender/backend/build /Users/kaamilthobani/Desktop/MasterFolder/GenerateProject/Tubender/Tubender/backend/build /Users/kaamilthobani/Desktop/MasterFolder/GenerateProject/Tubender/Tubender/backend/build/CMakeFiles/shape_to_bspline.dir/DependInfo.cmake "--color=$(COLOR)"
.PHONY : CMakeFiles/shape_to_bspline.dir/depend

