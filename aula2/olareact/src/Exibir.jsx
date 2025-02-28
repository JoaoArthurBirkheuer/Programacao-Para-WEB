import { useState } from "react"
export default function Exibir(){
    const [exibir, setExibir]
 = useState(false)

 return(
    <>
        <h1>Exibição condicional</h1>
        {
        !exibir && 
        <>
            <h1>Exibir quando é false</h1>
            <button onClick={() => setExibir(true)}>Passar exibir para true</button>
        </>
        }
        {
            exibir &&
            <>
            <h1>Exibir quando é true</h1>
            <button onClick={() => setExibir(false)}>Passar exibir para false</button>
            </>
        }
    </>
 )
}