// pages/Welcome.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
        backgroundColor: "background.default", // Usa il colore definito nel tema
      }}
    >
      <Typography variant="h3" color="primary" gutterBottom>
        Questa è la mia App! 🚀
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        paragraph
      >
        Questa è la pagina di benvenuto della tua applicazione Electron + React.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/auth")}
      >
        Iniziamo!
      </Button>
    </Box>
  );
};

export default Welcome;
