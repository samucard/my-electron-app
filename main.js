const { app, BrowserWindow } = require("electron");
const path = require("path");

const { autoUpdater } = require("electron-updater");

autoUpdater.checkForUpdatesAndNotify();


// Puoi anche gestire gli eventi:
autoUpdater.on("update-available", () => {
  console.log("Aggiornamento disponibile.");
});

autoUpdater.on("update-downloaded", () => {
  // Mostra un prompt per l'utente o installa automaticamente l'aggiornamento
  autoUpdater.quitAndInstall();
});

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
    },
  });

const isDev = process.env.NODE_ENV === "development";

if (isDev) {
  mainWindow.loadURL("http://localhost:5173");
} else {
  const indexPath = path.join(__dirname, "frontend/dist/index.html");
  mainWindow.loadURL(`file://${indexPath}`);
}

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
