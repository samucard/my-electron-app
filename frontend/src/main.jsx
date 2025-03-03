import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Assicurati di avere questo file per le regole globali

// Crea il container per la tua app nel div con id "root"
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderizza l'app all'interno di StrictMode per evidenziare potenziali problemi
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
