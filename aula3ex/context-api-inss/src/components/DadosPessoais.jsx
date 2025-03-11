import { useSalario } from '../context/SalarioContext';
import { useNavigate } from "react-router-dom";
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';


const DadosPessoais = () => {
  const { dados, setDados } = useSalario();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h2 className="text-xl font-semibold">Dados Pessoais</h2>
      <Input 
        placeholder="Nome" 
        value={dados.nome} 
        onChange={(e) => setDados({ ...dados, nome: e.target.value })} 
      />
      <Input 
        placeholder="Telefone" 
        value={dados.telefone} 
        onChange={(e) => setDados({ ...dados, telefone: e.target.value })} 
      />
      <Button onClick={() => navigate("/dados-trabalho")}>Avançar</Button>
    </div>
  );
};

export default DadosPessoais;
