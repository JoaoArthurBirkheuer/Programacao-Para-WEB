function Titulo(props)
{
    return(
        <div>
            <h1>{props.texto}</h1>
            {/** ou pode usar como parâmetro na function 'texto' e referenciar 'texto' direto no return */}
        </div>
    )
}

export default Titulo