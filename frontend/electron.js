const { app, BrowserWindow } = require('electron');
const path = require('path');
const express = require('express');

// Implement NSApplicationDelegate.applicationSupportsSecureRestorableState
app.applicationSupportsSecureRestorableState = () => true;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false, 
      contextIsolation: true, 
    },
  });

  // Load the production build of the React application
  mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'));

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
