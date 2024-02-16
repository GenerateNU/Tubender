
import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';


const FileUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      setSelectedFile(files[0]);
      console.log('Selected file:', files[0].name);
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      console.log('File selected for upload:', selectedFile.name);
      alert(`File selected for upload: ${selectedFile.name}`);
    } else {
      alert('No file selected.');
    }

    axios.post(`/upload`, { selectedFile })
      .then(res => {
        console.log(res);
        console.log(res.data);
    })
  };

  return (
    <div>
      <input type="file" id="fileInput" accept=".iges,.step" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default FileUploader;
