import { useSalario } from '../context/SalarioContext';
import { useNavigate } from "react-router-dom";
import TabelaINSS from "./TabelaINSS";
import Button from '../components/ui/Button';
import { useEffect } from "react";

const Resultado = () => {
  const { dados, setDados } = useSalario();
  const navigate = useNavigate();

  const handleReiniciar = () => {
    setDados({ nome: "", telefone: "", horasTrabalhadas: "", valorHora: "", salarioBruto: 0, inss: 0, salarioLiquido: 0 });
    navigate("/");
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .resultado-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #f8f9fa;
        padding: 20px;
      }

      .resultado-title {
        font-size: 24px;
        font-weight: bold;
        margin-top: 60px; /* Reduzido para mais espaço no topo */
        margin-bottom: 10px; /* Aumentado para maior separação */
      }

      .resultado-info {
        font-size: 18px;
        margin-bottom: 10px; /* Aumentado para espaçamento entre as informações */
      }

      .resultado-container p:last-child {
        margin-bottom: 30px; /* Ajuste de margem inferior */
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="resultado-container">
      <h2 className="resultado-title">Resultado</h2>
      <p className="resultado-info">Nome: {dados.nome}</p>
      <p className="resultado-info">Telefone: {dados.telefone}</p>
      <p className="resultado-info">Salário Bruto: R$ {dados.salarioBruto.toFixed(2)}</p>
      <p className="resultado-info">Desconto INSS: R$ {dados.inss.toFixed(2)}</p>
      <p className="resultado-info">Salário Líquido: R$ {dados.salarioLiquido.toFixed(2)}</p>
      <TabelaINSS />
      <Button onClick={handleReiniciar}>Reiniciar</Button>
    </div>
  );
};

export default Resultado;
