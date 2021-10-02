/* electron.prod.js is a third-party script which is necessary to use Electron to 
*  make the Round Table Tournaments Angular app into a desktop app based on the
*  production code. (This script loads files from the "dist" folder, which is 
*  generated when the Angular app is build for production).
*
*  Visit the following link to see the original source code:
*  https://gist.github.com/PKief/90a525621d3e0cee60eb99f8fe1c82ce#file-electron-prod-js
*
* 
*  NOTE: npm scripts (package:win, package:linux, package:osx, and package:all) which 
*  were added to the global package.json file were also taken from the same author.
*  It is noted here because json files do not allow comments. See the following
*  link to see the original source code:
*  https://gist.github.com/PKief/d2d9e0a9971c4db27eec48ce74d896cd#file-package-json
*  
*/

const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

const createWindow = () => {
    // Create the browser window.
    win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, 'favicon.ico'),
    });

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});