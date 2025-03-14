import { useContext } from "react";
import AppContext from "./AppContext";

function Tela02() {

    const { setShowTela02, setShowTelaFinal, objeto, setObjeto, handleChange , calcular} = useContext(AppContext);

    return (
        <div>
            <h1>Dados de salário e carga horária</h1>
            <div>
                <div>Valor da hora:</div>
                <input type="number" name="valorHora" onChange={handleChange} value={objeto.valorHora} />
            </div>
            <br />
            <div>
                <div>Carga horária:</div>
                <input type="number" name="cargaHoraria" onChange={handleChange} value={objeto.cargaHoraria} />
            </div>
            <button onClick={() => { calcular(); setShowTela02(false); setShowTelaFinal(true); }}>Ir para tela final</button>
        </div>
    )
}

export default Tela02;