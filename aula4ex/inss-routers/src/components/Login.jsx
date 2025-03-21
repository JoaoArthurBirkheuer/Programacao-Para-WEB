// src/components/Login.jsx
import React, { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const Login = ({ onLogin }) => {
  const [nome, setNome] = useState("");

  const handleLogin = () => {
    if (nome.trim()) {
      onLogin(nome);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Login</h2>
      <Input
        label="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Button onClick={handleLogin}>Entrar</Button>
    </div>
  );
};

export default Login;
