
// #include "crow_all.h"
#include <iostream>
#include <string>
#include <TopoDS_Shape.hxx>
#include <iostream> 
#include <filesystem> 
// #include "step_to_topo.cpp"
// #include "iges_to_topo.cpp"

using namespace std; 

TopoDS_Shape convert_file(const string filepath) { 
    std::__fs::filesystem::path p(filepath); 
    string extension = p.extension().string();
    for (auto& x : extension) { 
        x = tolower(x); 
    } 
    TopoDS_Shape shape = TopoDS_Shape();
    cout << "File extension: " << extension << endl;
    if (extension == ".iges" || extension == ".igs") {
        cout << "Reading IGES file." << endl;
        // TopoDS_Shape shape = read_iges(filepath.c_str());
        return shape;
    } else if (extension == ".step" || extension == ".stp") {
        cout << "Reading Step file." << endl;
        // TopoDS_Shape shape = read_step(filepath.c_str());
        return shape;
    } else {
        throw std::runtime_error("Error: File not supported.");
    }
}

int main()
{
    return 1;
    /* crow::App<crow::CORSHandler> app;


    // Customize CORS
    auto& cors = app.get_middleware<crow::CORSHandler>();

    // clang-format off
    cors
      .global()
        .headers("X-Custom-Header", "Upgrade-Insecure-Requests")
        .methods("POST"_method, "GET"_method)
      .prefix("/cors")
        .origin("example.com")
      .prefix("/nocors")
        .ignore();

    CROW_ROUTE(app, "/hello")
    ([]() {
        // convert_file(filename);
        return "Hello!";
    });

    CROW_ROUTE(app, "/uploadfile")
      .methods(crow::HTTPMethod::Post)([](const crow::request& req) {
          crow::multipart::message file_message(req);
          for (const auto& part : file_message.part_map)
          {
              const auto& part_name = part.first;
              const auto& part_value = part.second;
              CROW_LOG_DEBUG << "Part: " << part_name;
              if ("InputFile" == part_name)
              {
                  // Extract the file name
                  auto headers_it = part_value.headers.find("Content-Disposition");
                  if (headers_it == part_value.headers.end())
                  {
                      CROW_LOG_ERROR << "No Content-Disposition found";
                      return crow::response(400);
                  }
                  auto params_it = headers_it->second.params.find("filename");
                  if (params_it == headers_it->second.params.end())
                  {
                      CROW_LOG_ERROR << "Part with name \"InputFile\" should have a file";
                      return crow::response(400);
                  }
                  const std::string outfile_name = params_it->second;

                  for (const auto& part_header : part_value.headers)
                  {
                      const auto& part_header_name = part_header.first;
                      const auto& part_header_val = part_header.second;
                      CROW_LOG_DEBUG << "Header: " << part_header_name << '=' << part_header_val.value;
                      for (const auto& param : part_header_val.params)
                      {
                          const auto& param_key = param.first;
                          const auto& param_val = param.second;
                          CROW_LOG_DEBUG << " Param: " << param_key << ',' << param_val;
                      }
                  }

                  // Create a new file with the extracted file name and write file contents to it
                  std::ofstream out_file(outfile_name);
                  if (!out_file)
                  {
                      CROW_LOG_ERROR << " Write to file failed\n";
                      continue;
                  }
                  out_file << part_value.body;
                  out_file.close();
                  convert_file(outfile_name);
                  CROW_LOG_INFO << " Contents written to " << outfile_name << '\n';
              }
              else
              {
                  CROW_LOG_DEBUG << " Value: " << part_value.body << '\n';
              }
          }
          return crow::response(200);
      });
    app.port(18080).run(); */
}
