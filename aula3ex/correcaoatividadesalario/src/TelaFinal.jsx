import { useContext } from "react";
import AppContext from "./AppContext";

function TelaFinal(){

    const { setShowTelaFinal, setShowTelaApp, objeto, setObjeto } = useContext(AppContext);

    return (
        <div>
            <h1>Dados do usuário e salário calculado</h1>
            <div>
                <div>Nome: {objeto.nome}</div>
                <div>Telefone: {objeto.telefone}</div>
                <div>Valor da hora: {objeto.valorHora}</div>
                <div>Carga horária: {objeto.cargaHoraria}</div>
                <div>Salario Bruto: {objeto.salarioBruto}</div>
                <div>Inss: {objeto.inss}</div>
                <div>Salario liquido: {objeto.salarioLiquido}</div>
            </div>
            <button onClick={() => {
                setShowTelaFinal(false); setShowTelaApp(true);
                setObjeto({"nome": "", "telefone": "", "valorHora": "",
                    "cargaHoraria": "", "salarioBruto": "","salarioLiquido": "", "inss": ""
                })
            }}>Ir para tela inicial</button>
        </div>
    )
}

export default TelaFinal;