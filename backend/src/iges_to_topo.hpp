#ifndef IGES_READER_H
#define IGES_READER_H

#include <TopoDS_Shape.hxx>
#include <stdexcept>

TopoDS_Shape read_iges(const char* filename);

#endif