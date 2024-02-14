import React from 'react';
import FileUploader from './FileUploader';

function HomePage() {
  return (
    <div>
      <h1 className='text-4xl mb-4'>Tubender Bare Bones</h1>
      <h2>This is the Home page</h2>
        <FileUploader /> {}
    </div>
  );
}

export default HomePage;
