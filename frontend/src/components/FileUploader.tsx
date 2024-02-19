
import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';

axios.create(
  {
          baseURL: "",
          withCredentials: false,
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
        }
    })

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      setSelectedFile(files[0]);
      console.log('Selected file:', files[0].name);
    }
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      console.log('File selected for upload:', selectedFile.name);
      alert(`File selected for upload: ${selectedFile.name}`);
      const file = {
        InputFile: selectedFile
      };

      await axios.post(`localhost:18080/uploadfile`, { file })
      .then(res => {
        console.log(res);
        console.log("Post request sent");
        console.log(res.data);
      })

    } else {
      alert('No file selected.');
    }
  };

  return (
    <div>
      <input type="file" id="fileInput" accept=".iges,.step" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default FileUploader;
