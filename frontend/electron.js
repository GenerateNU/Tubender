const { app, BrowserWindow } = require('electron');
const path = require('path');
const express = require('express');
const { spawnSync } = require('child_process');
const { ipcMain } = require('electron');



// Implement NSApplicationDelegate.applicationSupportsSecureRestorableState
app.applicationSupportsSecureRestorableState = () => true;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, 
      contextIsolation: true, 
    },
  });

  // Load the production build of the React application
  mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'));
  global.executeBackendScriptSync = (fileName) => {
    try {
      const scriptPath = path.join(__dirname, '../backend/build/determine_file_type');
      console.log('Executing script at path:', scriptPath);
      const scriptArguments = [fileName];
      // Spawn the process with parameters
      const result = spawnSync(scriptPath, scriptArguments, { stdio: 'inherit' });
      console.log('Result:', result)
      if (result.error) {
        throw result.error;
      }  
  } catch (error) {
    console.error('Error executing backend script:', error);
    return 'Error executing backend script';
  }
  };
  ipcMain.on('file-upload', (event, arg) => {
    console.log(arg);
    global.executeBackendScriptSync(arg);
  });
  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', () => {
  createWindow();

  // Create an express server to serve static files
  const expressApp = express();
  const staticPath = path.join(__dirname, 'build', 'static');
  expressApp.use(express.static(staticPath));
  
  // Error handling
  expressApp.on('error', (err) => {
    console.error('Express server error:', err);
  });

  expressApp.listen(3000, () => {
    console.log('Static server running on port 3000');
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
