import { useEffect } from "react";
import { useSalario } from "../context/SalarioContext";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const DadosPessoais = () => {
  const { dados, setDados } = useSalario();
  const navigate = useNavigate();

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light">
      <h2 className="mb-4 text-center">Dados Pessoais</h2>
      <div className="mb-3 w-50">
        <Input
          label="Nome"
          placeholder="Nome"
          value={dados.nome}
          onChange={(e) => setDados({ ...dados, nome: e.target.value })}
        />
      </div>
      <div className="mb-3 w-50">
        <Input
          label="Telefone"
          placeholder="Telefone"
          value={dados.telefone}
          onChange={(e) => setDados({ ...dados, telefone: e.target.value })}
        />
      </div>
      <Button className="btn btn-primary w-50" onClick={() => navigate("/dados-trabalho")}>
        Avançar
      </Button>
    </div>
  );
};

export default DadosPessoais;
