import { useSalario } from '../context/SalarioContext';
import { useNavigate } from "react-router-dom";
import TabelaINSS from "./TabelaINSS";
import Button from '../components/ui/Button';

const Resultado = () => {
  const { dados, setDados } = useSalario();
  const navigate = useNavigate();

  const handleReiniciar = () => {
    setDados({ nome: "", telefone: "", horasTrabalhadas: "", valorHora: "", salarioBruto: 0, inss: 0, salarioLiquido: 0 });
    navigate("/");
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light py-5">
      <h2 className="mb-4 text-center">Resultado</h2>
      <p className="fs-5 mb-3">Nome: {dados.nome}</p>
      <p className="fs-5 mb-3">Telefone: {dados.telefone}</p>
      <p className="fs-5 mb-3">Salário Bruto: R$ {dados.salarioBruto.toFixed(2)}</p>
      <p className="fs-5 mb-3">Desconto INSS: R$ {dados.inss.toFixed(2)}</p>
      <p className="fs-5 mb-4">Salário Líquido: R$ {dados.salarioLiquido.toFixed(2)}</p>
      <TabelaINSS />
      <Button className="btn btn-danger mt-4" onClick={handleReiniciar}>Reiniciar</Button>
    </div>
  );
};

export default Resultado;
