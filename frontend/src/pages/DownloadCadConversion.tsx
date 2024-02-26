import React from 'react';
import Button from '../components/Button';

function DownloadCadConversion() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-off-white gap-6">
        <h2 className="font-semibold text-3xl text-brand-blue">Download GCode</h2>
        <div className="w-1/3 flex flex-col justify-center items-center gap-6">
            <Button label='Download File' handleClick={() => console.log('button')}></Button>
            <Button label='Upload To Machine' handleClick={() => console.log('button')}></Button>
        </div>
    </div>   
  );
}

export default DownloadCadConversion;
