const { app, BrowserWindow } = require("electron");
const path = require("path");
const { autoUpdater } = require("electron-updater");
const log = require("electron-log");

// Configura il logger per autoUpdater
autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = "info";

// Gestione degli eventi di aggiornamento
autoUpdater.on("update-available", () => {
  console.log("Aggiornamento disponibile.");
});

autoUpdater.on("update-downloaded", () => {
  console.log("Aggiornamento scaricato. Installazione in corso...");
  autoUpdater.quitAndInstall();
});

// Determina se siamo in modalità sviluppo
const isDev = process.env.NODE_ENV === "development";

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true, // Assicurati di usare contextIsolation per la sicurezza
    },
  });

  if (isDev) {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    const indexPath = path.join(__dirname, "frontend/dist/index.html");
    mainWindow.loadURL(`file://${indexPath}`);
  }

  mainWindow.on("closed", () => {
    // Se mantieni una variabile globale per la finestra, la azzera qui.
  });
}

app.whenReady().then(() => {
  createWindow();

  // In modalità produzione, controlla aggiornamenti all'avvio
  if (!isDev) {
    autoUpdater.checkForUpdatesAndNotify();
  }

  app.on("activate", () => {
    // Su macOS, crea una nuova finestra se tutte sono chiuse
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  // Su Windows e Linux, chiudi l'app quando tutte le finestre sono chiuse
  if (process.platform !== "darwin") {
    app.quit();
  }
});
