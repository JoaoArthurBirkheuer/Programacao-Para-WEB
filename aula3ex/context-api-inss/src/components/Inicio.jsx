import { useNavigate } from "react-router-dom";
import Button from '../components/ui/Button';


const Inicio = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Calculadora de Salário</h1>
      <Button onClick={() => navigate("/dados-pessoais")}>Iniciar</Button>
    </div>
  );
};

export default Inicio;
