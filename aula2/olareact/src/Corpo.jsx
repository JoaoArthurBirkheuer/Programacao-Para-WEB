const Corpo = ({mensagemAlerta, dados, contador}) =>
    {
        return(
            <>
                <h1>Componente Corpo</h1>
                <h1>Contador do Corpo: {contador}</h1>
                {/* React Fragment */}
                <button onClick={ () => mensagemAlerta("Usei a função recebida por props")}>Usando a função mensagemAlerta</button>
                {/* Toda Chave aberta é um fragmento de JS */}
                {
                    dados.map((linha, index) => (
                        <li key = {index}>{linha}</li>
                    ))
                }
                {/* Todo elemento filho deve estar associado a um pai */}

            </>
        )
    }
export default Corpo