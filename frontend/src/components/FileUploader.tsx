
import React, { ChangeEvent, useState } from 'react';
import Button from './Button';
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
      <label htmlFor="fileInput" className="w-52 h-12 flex justify-center items-center rounded-xl bg-brand-blue text-brand-white cursor-pointer">
        <h3 className="text-center font-semibold text-sm">Upload Bend Design</h3>
        <input type="file" id="fileInput" accept=".iges,.step,.igs" onChange={handleFileChange} style={{ display: 'none' }} />
      </label>
    </div>
  );
};

export default FileUploader;