import { useNavigate } from "react-router-dom";
import Button from '../components/ui/Button';

const Inicio = () => {
  const navigate = useNavigate();

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light">
      <h1 className="mb-4 text-center">Calculadora de Salário</h1>
      <Button className="btn btn-primary" onClick={() => navigate("/dados-pessoais")}>
        Iniciar
      </Button>
    </div>
  );
};

export default Inicio;
