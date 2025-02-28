import { useState } from "react";

function Calculadora() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setIMC] = useState(0);

  const calcularIMC = () => {
    if (altura > 0) {
      const imcCalculado = peso / (altura * altura); // Fórmula correta
      setIMC(imcCalculado);
    }
  };

  const styles = {
    container: {
      marginTop: '20px', // Margem superior para a div principal
      textAlign: 'center',
    },
    inputsContainer: {
      display: 'flex', // Flexbox para alinhar os inputs lado a lado
      justifyContent: 'center',
      gap: '20px', // Espaçamento entre os inputs
      marginBottom: '20px',
    },
    input: {
      padding: '8px',
      width: '150px', // Largura fixa para os inputs
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: 'white',
      fontSize: '16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '2%'
    },
    result: {
      color: imc >= 25.0 ? "red" : "black",
      fontSize: '24px',
      fontWeight: 'bold',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <div>
        <label>Informe sua Altura (m): </label>
        <input
          style={styles.input}
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          step="0.01" // Permite valores decimais para altura
        />
      </div>

      <div>
        <label>Informe seu Peso (kg): </label>
        <input
          style={styles.input}
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>

      <button style={styles.button} onClick={calcularIMC}>
        Calcular IMC
      </button>

      {imc !== 0 && (
        <h1 style={styles.result}>
          Seu IMC é: {imc.toFixed(2)}
        </h1>
      )}
    </div>
  );
}

export default Calculadora;
