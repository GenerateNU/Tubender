import React, { useEffect } from 'react';
import { IpcRendererEvent } from 'electron';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const { ipcRenderer } = window.require('electron');

const FileUploader: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleSelectedFile = (event: IpcRendererEvent, path: string) => {
      console.log('Selected file path:', path);
      ipcRenderer.send('file-upload', path);

      // Redirect after sending file for upload
      ipcRenderer.once('file-upload-success', () => {
        navigate('/download-cad-conversion');
      });
    };

    ipcRenderer.on('selected-file', handleSelectedFile);

    return () => {
      ipcRenderer.removeListener('selected-file', handleSelectedFile);
    };
  }, [navigate]); // Include navigate in the dependency array

  const handleOpenFileDialog = () => {
    ipcRenderer.send('open-file-dialog');
  };

  return (
    <div>
      <Button label='Upload CAD File'
       handleClick={handleOpenFileDialog}
       customColors='bg-brand-temp-teal text-brand-white hover:bg-opacity-75' />
    </div>
  );
};

export default FileUploader;
