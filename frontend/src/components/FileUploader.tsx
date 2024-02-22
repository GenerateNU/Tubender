
import React, { ChangeEvent, useState } from 'react';
const { ipcRenderer } = window.require('electron');


const FileUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      setSelectedFile(files[0]);
      console.log('Selected file:', files[0].name);
      ipcRenderer.send('file-upload', JSON.stringify(files[0].name));

    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      alert(`File selected for upload: ${selectedFile.name}`);
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
