const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const { spawnSync } = require('child_process');


let mainWindow;

function createWindow() {

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false, // nodeIntegration is set to false
      contextIsolation: true, // enable context isolation
      nodeIntegration: false, 
      contextIsolation: true, 
    },
  });

  const startURL = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, '../build/index.html')}`;

  mainWindow.loadURL(startURL);
  global.executeBackendScriptSync = () => {
    try {
      const scriptPath = path.join(__dirname, '../backend/build/hello_world');
      console.log('Executing script at path:', scriptPath);
      const result = spawnSync(scriptPath, { stdio: 'inherit' });
      console.log('Result:', result)
      if (result.error) {
        throw result.error;
      }  
  } catch (error) {
    console.error('Error executing backend script:', error);
    return 'Error executing backend script';
  }
  };
  global.executeBackendScriptSync();
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
