
import React, { ChangeEvent, useState, useEffect } from 'react';
import { IpcRendererEvent } from 'electron';


const { ipcRenderer } = window.require('electron');


const FileUploader: React.FC = () => {
  useEffect(() => {
    const handleSelectedFile = (event: IpcRendererEvent, path: string) => {
      console.log('Selected file path:', path);
      ipcRenderer.send('file-upload', path);
    };

    ipcRenderer.on('selected-file', handleSelectedFile);
  
    return () => {
      ipcRenderer.removeListener('selected-file', handleSelectedFile);
    };
  }, []);

  const handleOpenFileDialog = () => {
    ipcRenderer.send('open-file-dialog');
  };

  return (
    <div>
      <button
        onClick={handleOpenFileDialog}
        className="w-52 h-12 flex justify-center items-center rounded-xl bg-brand-blue text-brand-white cursor-pointer"
      >
        <h3 className="text-center font-semibold text-sm">Upload Bend Design</h3>
      </button>
    </div>
  );
};

export default FileUploader;
