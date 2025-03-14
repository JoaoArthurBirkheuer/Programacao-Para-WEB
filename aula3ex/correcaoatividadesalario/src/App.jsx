import { useState } from "react";

import AppContext from "./AppContext";
import Tela01 from "./Tela01";
import Tela02 from "./Tela02";
import TelaFinal from "./TelaFinal";

function App() {

  const [showTelaApp, setShowTelaApp] = useState(true);
  const [showTela01, setShowTela01] = useState(false);
  const [showTela02, setShowTela02] = useState(false);
  const [showTelaFinal, setShowTelaFinal] = useState(false);
  const [objeto, setObjeto] = useState(
    {"nome": "" , "telefone": "", "valorHora": "", 
    "cargaHoraria" : "", "salarioBruto" : "",
    "salarioLiquido": "", "inss": ""});

  const handleChange = e => setObjeto({ ...objeto, [e.target.name]: e.target.value });

  const calcular = () => {
    console.log("calculou");
    const salarioBruto = Number(objeto.valorHora) * Number(objeto.cargaHoraria) * 5;
    let inss = 0.0;
    if (salarioBruto <= 1518.00) {
        inss = salarioBruto * 7.5 / 100;
    } else if (salarioBruto >= 1518.01 && salarioBruto <= 2793.88) {
        inss = salarioBruto * 9.0 / 100;
    } else if (salarioBruto >= 2793.89 && salarioBruto <= 4190.84) {
        inss = salarioBruto * 12.0 / 100;
    } else if (salarioBruto >= 4190.85 && salarioBruto <= 8157.41) {
        inss = salarioBruto * 14.0 / 100;
    } else if (salarioBruto > 8157.41) {
        inss = 8157.41 * 14.0 / 100;
    }
    const salarioLiquido = salarioBruto - inss;
    setObjeto({...objeto,
        "salarioBruto": salarioBruto.toFixed(2), "inss": inss.toFixed(2),
        "salarioLiquido": salarioLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    })
}  

  return (
    <AppContext.Provider value={ {setShowTelaApp,  setShowTela01, 
    setShowTela02, setShowTelaFinal, objeto, setObjeto, handleChange, calcular} }>
        <h1>Calculo do Salário</h1>
        { showTelaApp && <button onClick={() => {setShowTelaApp(false); setShowTela01(true); }}>Iniciar</button> }
        { showTela01 && <Tela01/>}
        { showTela02 && <Tela02/>}
        { showTelaFinal && <TelaFinal/>}
        
      </AppContext.Provider>
    
  );
}

export default App;
