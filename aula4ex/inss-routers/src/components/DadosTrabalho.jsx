
import { useSalario } from "../context/SalarioContext";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input.jsx";
import Button from "../components/ui/Button.jsx";

const DadosTrabalho = () => {
  const { dados, setDados, calcularSalario } = useSalario();
  const navigate = useNavigate();

  const concluir = () => {
    calcularSalario();
    navigate("/resultado");
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light">
      <h2 className="mb-4 text-center">Dados de Trabalho</h2>
      <div className="mb-3 w-50">
        <Input
          label="Horas por semana"
          type="number"
          placeholder="Horas por semana"
          value={dados.horasSemana}
          onChange={(e) => setDados({ ...dados, horasSemana: e.target.value })}
        />
      </div>
      <div className="mb-3 w-50">
        <Input
          label="Valor por hora"
          type="number"
          placeholder="Valor por hora"
          value={dados.valorHora}
          onChange={(e) => setDados({ ...dados, valorHora: e.target.value })}
        />
      </div>
      <Button className="btn btn-primary w-50" onClick={concluir}>
        Concluir
      </Button>
    </div>
  );
};

export default DadosTrabalho;
