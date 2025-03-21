import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { SalarioProvider } from "./context/SalarioContext";
import Inicio from "./components/Inicio";
import DadosPessoais from "./components/DadosPessoais";
import DadosTrabalho from "./components/DadosTrabalho";
import Resultado from "./components/Resultado";

import Login from "./components/Login";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (nome) => {
    setUser(nome);
  };

  const PrivateRoute = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  return (
    <SalarioProvider>
      <Router>
        <div>
          {/* Menu Público */}
          <nav>
            <ul>
              <li><Link to="/">Início</Link></li>
              {!user && <li><Link to="/login">Login</Link></li>}
            </ul>
          </nav>

          {/* Menu Privado (aparece após login) */}
          {user && (
            <nav>
              <ul>
                <li><Link to="/dados-pessoais">Dados Pessoais</Link></li>
                <li><Link to="/dados-trabalho">Dados de Trabalho</Link></li>
                <li><Link to="/resultado">Resultado</Link></li>
              </ul>
            </nav>
          )}

          <Routes>
            {/* Página Inicial */}
            <Route path="/" element={<Inicio />} />

            {/* Rota Login */}
            <Route path="/login" element={<Login onLogin={handleLogin} />} />

            {/* Rota privada */}
            <Route path="/dados-pessoais" element={<PrivateRoute><DadosPessoais /></PrivateRoute>} />
            <Route path="/dados-trabalho" element={<PrivateRoute><DadosTrabalho /></PrivateRoute>} />
            <Route path="/resultado" element={<PrivateRoute><Resultado /></PrivateRoute>} />
          </Routes>
        </div>
      </Router>
    </SalarioProvider>
  );
};

export default App;
