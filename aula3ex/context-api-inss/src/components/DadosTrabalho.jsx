import { useSalario } from '../context/SalarioContext';

import { useNavigate } from "react-router-dom";
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';


const DadosTrabalho = () => {
  const { dados, setDados, calcularSalario } = useSalario();
  const navigate = useNavigate();

  const concluir = () => {
    calcularSalario();
    navigate("/resultado");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h2 className="text-xl font-semibold">Dados de Trabalho</h2>
      <Input 
        placeholder="Horas por semana" 
        type="number"
        value={dados.horasSemana} 
        onChange={(e) => setDados({ ...dados, horasSemana: e.target.value })} 
      />
      <Input 
        placeholder="Valor por hora" 
        type="number"
        value={dados.valorHora} 
        onChange={(e) => setDados({ ...dados, valorHora: e.target.value })} 
      />
      <Button onClick={concluir}>Concluir</Button>
    </div>
  );
};

export default DadosTrabalho;
