import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // Stile per il container principale (stesso della Welcome Page)
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    p: 2,
    overflow: "hidden", // Aggiunto per evitare lo scrolling
  };

  // Stile per il box del form, con maxWidth per mantenere la responsività
  const formBoxStyle = {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#fff",
    p: 3,
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    mt: 2,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sostituisci con la logica reale di autenticazione
    alert(isLogin ? "Login submitted" : "Registration submitted");
    navigate("/dashboard");
  };

  return (
    <Box sx={containerStyle}>
      <Typography variant="h3" color="primary" gutterBottom>
        {isLogin ? "Login" : "Registrazione"}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={formBoxStyle}>
        {!isLogin && (
          <TextField
            fullWidth
            margin="normal"
            label="Nome"
            variant="outlined"
            required
          />
        )}
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          variant="outlined"
          type="email"
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          variant="outlined"
          type="password"
          required
        />
        {!isLogin && (
          <TextField
            fullWidth
            margin="normal"
            label="Conferma Password"
            variant="outlined"
            type="password"
            required
          />
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          {isLogin ? "Accedi" : "Registrati"}
        </Button>
      </Box>
      <Button
        onClick={() => setIsLogin(!isLogin)}
        sx={{ mt: 2, textTransform: "none" }}
      >
        {isLogin
          ? "Non hai un account? Registrati"
          : "Hai già un account? Accedi"}
      </Button>
    </Box>
  );
};

export default Auth;
