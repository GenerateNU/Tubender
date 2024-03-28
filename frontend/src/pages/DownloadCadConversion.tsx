import React from 'react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';


const { ipcRenderer } = window.require('electron');

function DownloadCadConversion() {

    const handleDownloadClick = () => {
        ipcRenderer.send('download-file');
        
        ipcRenderer.once('download-success', () => {
          console.log('Download successful');
        });
    
        ipcRenderer.once('download-failure', (event, error) => {
          console.error('Download failed', error);
        });
      };


    return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-off-white gap-6">
        <Navbar/>
        <h2 className="font-semibold text-3xl text-brand-blue">Download GCode</h2>
        <div className="w-1/3 flex flex-col justify-center items-center gap-6">
            <Button label='Download File' handleClick={handleDownloadClick}></Button>
            <Button label='Upload To Machine' handleClick={() => console.log('Upload to machine')}></Button>
        </div>
    </div>   
    );
}

export default DownloadCadConversion;
