import { useSalario } from '../context/SalarioContext';
import { useNavigate } from "react-router-dom"; // Importando o hook de navegação
import TabelaINSS from "./TabelaINSS";
import Button from '../components/ui/Button';

const Resultado = () => {
  const { dados, setDados } = useSalario(); // Pegando também o setDados para resetar os valores
  const navigate = useNavigate(); // Hook para navegação

  const handleReiniciar = () => {
    setDados({ nome: "", telefone: "", horasTrabalhadas: "", valorHora: "", salarioBruto: 0, inss: 0, salarioLiquido: 0 }); // Zera os dados
    navigate("/"); // Volta para a tela inicial
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h2 className="text-xl font-semibold">Resultado</h2>
      <p>Nome: {dados.nome}</p>
      <p>Telefone: {dados.telefone}</p>
      <p>Salário Bruto: R$ {dados.salarioBruto.toFixed(2)}</p>
      <p>Desconto INSS: R$ {dados.inss.toFixed(2)}</p>
      <p>Salário Líquido: R$ {dados.salarioLiquido.toFixed(2)}</p>
      <TabelaINSS />
      <Button onClick={handleReiniciar}>Reiniciar</Button>
    </div>
  );
};

export default Resultado;
