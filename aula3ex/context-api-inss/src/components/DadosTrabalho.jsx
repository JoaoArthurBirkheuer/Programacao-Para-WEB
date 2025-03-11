import { useEffect } from "react";
import { useSalario } from "../context/SalarioContext";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const DadosTrabalho = () => {
  const { dados, setDados, calcularSalario } = useSalario();
  const navigate = useNavigate();

  const concluir = () => {
    calcularSalario();
    navigate("/resultado");
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #f8f9fa;
      }

      .title {
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 16px;
        color: #333;
      }

      .input {
        width: 250px;
        padding: 10px;
        margin-bottom: 12px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
      }

      .button {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        margin-top: 10px;
      }

      .button:hover {
        background-color: #0056b3;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Dados de Trabalho</h2>
      <Input
        className="input"
        placeholder="Horas por semana"
        type="number"
        value={dados.horasSemana}
        onChange={(e) => setDados({ ...dados, horasSemana: e.target.value })}
      />
      <Input
        className="input"
        placeholder="Valor por hora"
        type="number"
        value={dados.valorHora}
        onChange={(e) => setDados({ ...dados, valorHora: e.target.value })}
      />
      <Button className="button" onClick={concluir}>Concluir</Button>
    </div>
  );
};

export default DadosTrabalho;
