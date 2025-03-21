import { useEffect } from "react";
import { useState } from "react";

function Livros(){
    const [livros, setLivros] = useState([]);
    
    const getLivros = async() => {
        await fetch('http://localhost:3002/livros')
        .then(response => response.json())
        .then(json => setLivros(json))
    }

    const removeLivro = async index => {
        if(window.confirm("Deseja realmente excluir?")){
            await fetch(`http://localhost:3002/livros/${index}`, {
                method : "DELETE"
            })
            .then(response => response.json())
            .then( json => alert(json))
            getLivros()
            }
        }

    useEffect(() => {
        getLivros()
    },[])

    return (
        <>
            <h1>Livros</h1>
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Editora</th>
                    <th>Ano</th>
                </tr>
                {
                    livros.map((livro, index) => (
                        <tr key = {index}>
                            <td>{livro.nome}</td>
                            <td>{livro.editora}</td>
                            <td>{livro.ano}</td>
                            <td><button onClick={() => removeLivro(index)}>Excluir</button></td>
                        </tr>
                    ))
                }   
            </table>
        </>
    );
}

export default Livros;