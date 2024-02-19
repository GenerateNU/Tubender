import React from 'react';
import FileUploader from './components/FileUploader'; 
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
    <BrowserRouter>
        <div>
        <Routes>
            <Route path="/file"       element={ <FileUploader/>}/>
            <Route path="/hello"  element={ <h1>Hello World!</h1>}/>
        </Routes>
        </div>
    </BrowserRouter>
    // <FileUploader />
  )
}

export default App;
