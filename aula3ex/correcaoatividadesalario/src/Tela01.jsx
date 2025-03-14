import { useContext } from "react";
import AppContext from "./AppContext";

function Tela01(){

    const { setShowTela01, setShowTela02, objeto, handleChange} = useContext(AppContext);

    return (
        <div>
            <h1>Dados Iniciais</h1>
            <div>
                <div>Nome:</div>
                <input name="nome" onChange={handleChange} value={objeto.nome}/>
            </div>
            <br />
            <div>
                <div>Telefone:</div>
                <input name="telefone" onChange={handleChange} value={objeto.telefone} />
            </div> 

            <button onClick={() => {setShowTela01(false); setShowTela02(true);}}>Ir para dados salário</button>
        </div>
    )
}

export default Tela01;