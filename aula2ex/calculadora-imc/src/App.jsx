import React from 'react';
import './App.css';
import Calculadora from './Calculadora';

function App() {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '30vh',
    },
    tableContainer: {
      textAlign: 'center',
    },
    table: {
      borderCollapse: 'collapse', 
      width: '100%',
      marginTop: '20px',
      marginBottom: '20px',
    },
    th: {
      padding: '16px', 
      backgroundColor: '#4CAF50',
      color: 'white',
      border: '1px solid black', 
    },
    td: {
      padding: '12px', 
      border: '1px solid black', 
    },
    h1: {
      textAlign: 'center',
      marginBottom: '70px',
    },
    h3: {
      textAlign: 'center',
      marginBottom: '20px',
    },
  };

  return (
    <div className="App">
      <h1 style={styles.h1}>Calculadora IMC Show de Bola</h1>
      
      <div style={styles.container}>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>IMC</th>
                <th style={styles.th}>Classificação</th>
                <th style={styles.th}>Obesidade (Grau)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>Menor que 18,5</td>
                <td style={styles.td}>Magreza</td>
                <td style={styles.td}>0</td>
              </tr>
              <tr>
                <td style={styles.td}>Entre 18,5 e 24,9</td>
                <td style={styles.td}>Normal</td>
                <td style={styles.td}>0</td>
              </tr>
              <tr>
                <td style={styles.td}>Entre 25,0 e 29,9</td>
                <td style={styles.td}>Sobrepeso</td>
                <td style={styles.td}>I</td>
              </tr>
              <tr>
                <td style={styles.td}>Entre 30,0 e 39,9</td>
                <td style={styles.td}>Obesidade</td>
                <td style={styles.td}>II</td>
              </tr>
              <tr>
                <td style={styles.td}>Maior que 40,0</td>
                <td style={styles.td}>Obesidade Grave</td>
                <td style={styles.td}>III</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Inserir o componente Calculadora abaixo da tabela */}
      <Calculadora />
    </div>
  );
}

export default App;
