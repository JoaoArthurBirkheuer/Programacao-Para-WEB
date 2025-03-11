import { useNavigate } from "react-router-dom";
import Button from '../components/ui/Button';
import { useEffect } from "react";

const Inicio = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #f0f0f0;
      }

      .title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 16px;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="container">
      <h1 className="title">Calculadora de Salário</h1>
      <Button onClick={() => navigate("/dados-pessoais")}>Iniciar</Button>
    </div>
  );
};

export default Inicio;
