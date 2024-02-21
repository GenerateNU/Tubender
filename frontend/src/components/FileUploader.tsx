import React, { ChangeEvent, useState } from 'react';

const FileUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      setSelectedFile(files[0]);
      console.log('Selected file:', files[0].name);
      alert(`File selected for upload: ${files[0].name}`);
    } else {
      alert('No file selected.');
    }
  };

  return (
    <div>
      <label htmlFor="fileInput" className="w-52 h-12 flex justify-center items-center rounded-xl bg-brand-blue text-brand-white cursor-pointer">
        <h3 className="text-center font-semibold text-sm">Upload Bend Design</h3>
        <input type="file" id="fileInput" accept=".iges,.step,.igs" onChange={handleFileUpload} style={{ display: 'none' }} />
      </label>
    </div>
  );
};

export default FileUploader;
