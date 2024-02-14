#include <iostream>
#include <IGESControl_Reader.hxx>
#include <TopoDS_Shape.hxx>

// takes in an IGES file and returns a TopoDS_Shape
TopoDS_Shape read_iges(const char *filename)
{
    IGESControl_Reader reader;
    if (reader.ReadFile(filename) != IFSelect_RetDone)
    {
        std::cout << "Error: cannot read file" << std::endl;
        throw std::runtime_error("Error: Unable to read the IGES file.");
    }

    if (!reader.TransferRoots())
    {
        std::cerr << "Error: Unable to transfer the content to TopoDS_Shape." << std::endl;
        throw std::runtime_error("Error: Unable to transfer the content to TopoDS_Shape.");
    }
    TopoDS_Shape shape = reader.OneShape();
    return shape;
}

// to see if it works
int main(int argc, char *argv[])
{
    if (argc != 2)
    {
        std::cerr << "Usage: " << argv[0] << " <IGES file>" << std::endl;
        return 1; // Return a non-zero value to indicate an error
    }

    const char *igesFileName = argv[1];
    std::cout << igesFileName;

    try
    {
        // Call the function to read IGES file and get TopoDS_Shape
        TopoDS_Shape shape = read_iges(igesFileName);
        if (!shape.IsNull())
        {
            std::cout << "Shape is not null." << std::endl;
        }
        else
        {
            std::cout << "Shape is null." << std::endl;
        }
    }
    catch (const std::exception &e)
    {
        std::cerr << e.what() << std::endl;
        return 1; // Return 1 for error
    }

    return 0; // Return 0 for success
}