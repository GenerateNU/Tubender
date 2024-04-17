const { app, BrowserWindow, dialog } = require('electron');
const path = require('path');
const express = require('express');
const { spawnSync } = require('child_process');
const { ipcMain } = require('electron');

// Implement NSApplicationDelegate.applicationSupportsSecureRestorableState
app.applicationSupportsSecureRestorableState = () => true;

let mainWindow;
let selectedFilePath = '';

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 700,
    webPreferences: {
      nodeIntegration: true, 
      contextIsolation: false, 
    },
  });

  // Load the production build of the React application
  mainWindow.loadFile(path.join(__dirname, '..', 'build', 'index.html'));

  // Open file dialog and handle the file path
  ipcMain.on('open-file-dialog', (event) => {
    dialog.showOpenDialog(mainWindow, {
      properties: ['openFile'],
      filters: [{ name: 'Design Files', extensions: ['iges', 'step', 'igs'] }],
    }).then(result => {
      if (!result.canceled && result.filePaths.length > 0) {
        event.reply('selected-file', result.filePaths[0]);
      }
    }).catch(err => {
      console.error('Error opening file dialog:', err);
    });
  });

  global.executeBackendScriptSync = (fileName) => {
    try {
      const outputPath = path.join(app.getPath('downloads'), 'output_gcode');
      const scriptPath = path.join(__dirname, '../../backend/build/cad_to_gcode');
      console.log('Executing script at path:', scriptPath);
      const scriptArguments = [fileName, outputPath];
      // Spawn the process with parameters
      const result = spawnSync(scriptPath, scriptArguments, { stdio: 'inherit' });
      console.log('Result:', result);
      if (result.error) {
        throw result.error;
      }
      return true; // Successfully executed
    } catch (error) {
      console.error('Error executing backend script:', error);
      return false; // Failed to execute
    }
  };

  ipcMain.on('file-upload', (event, arg) => {
    const cleanedArg = arg.replace(/['"]/g, ''); // Clean the file path
    console.log('File path stored for later download:', cleanedArg);
    selectedFilePath = cleanedArg;
    event.reply('file-upload-success');
  });

  ipcMain.on('download-file', (event) => {
    if (selectedFilePath) {
      const success = global.executeBackendScriptSync(selectedFilePath); // Use the stored file path
      if (success) {
        event.reply('download-success');
      } else {
        event.reply('download-failure');
      }
    } else {
      event.reply('download-failure', 'No file selected');
    }
  });

  ipcMain.on('submit-form', (event, formData) => {

    const outputPath = path.join(app.getPath('downloads'), 'output_gcode');
    const dataStr = JSON.stringify(formData);
    const executablePath = path.join(__dirname, '../../backend/build/manual_input_to_gcode');
    const executableArguments = [outputPath, dataStr];
    
    try {
      const result = spawnSync(executablePath, executableArguments, { stdio: 'inherit' });
      console.log('Execution result:', result);
      
      if (result.error) {
        throw result.error;
      }
  
      event.reply('execution-success', 'Data processed successfully.');
    } catch (error) {
      console.error('Error executing the C++ executable:', error);
      event.reply('execution-failure', 'Failed to process data.');
    }
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
