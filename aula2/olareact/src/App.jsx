import { useState } from "react"
import Calculo from "./Calculo.jsx"
import logo from './logo.svg';
import './App.css';
import Titulo from './Titulo.jsx'
import Corpo from './Corpo.jsx'
import Exibir from './Exibir.jsx'

function App() {

  {/** ESTADOS NO REACT são tipo getters e setters no Java*/}
  const [contador, setContador] = useState(0)

  const mensagemAlerta = (msg) =>
    {
      alert(msg)
    }
  return (
    <div>
      <h1>Seja bem-vindo ao React</h1>
      <button onClick={() => setContador(contador+1)}>INCREMENTAR</button> 
      <button onClick={() => setContador(contador-1)}>DECREMENTAR</button>
      <Titulo/>
      <Titulo texto="Usando novamente o Componente Título"/>
      <Corpo mensagemAlerta = {mensagemAlerta} dados = {['React','Node','NPM','JSX']} contador = {contador}/>
      <Calculo/>
      <Exibir/>
    </div>

  );
}

export default App;
