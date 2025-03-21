import {useState} from 'react';

function Ola(){
    const [
        mensagem, setSmensagem
    ] = useState("")

    const [
        nome, setNome
    ] = useState("")

    const [
        profissao, setProfissao
    ] = useState("")

    // Requisições em outro servidor precisam ser assíncronas
    const getOla = async() => {
        await fetch('http://localhost:3002/')
        .then(response => response.json())
        .then(json => setSmensagem(json.msg))
        .catch(err => setSmensagem(err))
    }

    const enviaDados = async() => {
        await fetch('http://localhost:3002/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "nome": nome,           
                "profissao": profissao
            })
        })
        .then(response => response.json())
        .then(json => setSmensagem(json.msg))
        .catch(err => setSmensagem(err))
    }    

    return(
        <>
        <h1>Mensagem: {mensagem}</h1>
        <div>
            <label>Nome:</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}></input>
            <div>
                <label>Profissão:</label>
                <input type="text" value={profissao} onChange={(e) => setProfissao(e.target.value)}></input>
            </div>
        </div>
        <button onClick={getOla}>getOla</button>
        <button onClick={enviaDados}>enviaDados POST</button>
        </>
    )
}

export default Ola;