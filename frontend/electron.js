const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

// Implement NSApplicationDelegate.applicationSupportsSecureRestorableState
app.applicationSupportsSecureRestorableState = () => true;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false, // nodeIntegration is set to false
      contextIsolation: true, // enable context isolation
      preload: path.join(__dirname, 'preload.js'), // specify preload script
    },
  });

  // Use 127.0.0.1 instead of localhost
  const startURL = isDev
    ? 'http://127.0.0.1:3000'
    : `file://${path.join(__dirname, '../build/index.html')}`;
    
  mainWindow.loadURL(startURL);

  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

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