import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SalarioProvider } from "./context/SalarioContext";
import Inicio from "./components/Inicio";
import DadosPessoais from "./components/DadosPessoais";
import DadosTrabalho from "./components/DadosTrabalho";
import Resultado from "./components/Resultado";

const App = () => {
  return (
    <SalarioProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/dados-pessoais" element={<DadosPessoais />} />
          <Route path="/dados-trabalho" element={<DadosTrabalho />} />
          <Route path="/resultado" element={<Resultado />} />
        </Routes>
      </Router>
    </SalarioProvider>
  );
};

export default App;
