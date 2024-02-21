#ifndef STEP_READER_H
#define STEP_READER_H

#include <string>
#include <TopoDS_Shape.hxx>

TopoDS_Shape read_step(const std::string& filename);

#endif 