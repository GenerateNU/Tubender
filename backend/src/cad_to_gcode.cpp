#include <iostream>
#include <TopoDS_Shape.hxx>

int main(int argc, char* argv[]) {
    TopoDS_Shape shape = TopoDS_Shape();
    bool eq = shape.IsEqual(TopoDS_Shape());
    std::cout << eq << std::endl;
}