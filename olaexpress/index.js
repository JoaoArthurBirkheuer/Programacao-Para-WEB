const express = require('express');
const cors = require('cors')

// Instância do express
const app = express()
app.use(express.json())
// Impede que sejam obtidos objetos muito complexos (como arrays de objetos) no corpo da requisição
// Padrão recomendado
app.use(express.urlencoded({ extended: false }))
app.use(cors())

let listaLivros = [{nome : "Serviços Web", editora : "Novatec", ano : 2025},
    {nome : "Node.js", editora : "Casa do Código", ano : 2023},
    {nome : "Java", editora : "Alta Books", ano : 2022}]

const getLivros = (request, response) =>{
    response.status(200).json(listaLivros)
}

const getLivroPorIndex = (request, response) => {
    if (/^\d+$/.test(request.params.index)) {
        const index = parseInt(request.params.index);
        if (index >= 0 && index < listaLivros.length) {
            return response.status(200).json(listaLivros[index]);
        } else {
            return response.status(404).json({ msg: "Index out of bounds" });
        }
    } else {
        return response.status(400).json({ msg: "Invalid index or Invalid Parameter Type" });
    }
}

const addLivro = (request,response) => {
    const {nome, editora, ano} = request.body

    if(!nome || !editora || !ano){
        return response.status(400).json({msg : "Dados inválidos"}) // bad request
    }

    listaLivros.push({nome : nome, editora : editora, ano : ano})
    return response.status(201).json({msg : "Livro adicionado com sucesso"}) // ok
}

const apagarLivro = (request, response) => {
    const index = parseInt(request.params.index)
    const livro = listaLivros[index]
    if(!livro){
        // Melhor retornar 404, pois o livro não foi encontrado, ao invés de 400, pois o cliente não fez nada de errado
        return response.status(400).json({msg : "Livro não encontrado"})
    }
    else{
        listaLivros.splice(index, index)
        return response.status(200).json({msg : "Livro removido com sucesso"})
    }
}

const ola = (request, response) =>{
    response.status(200).json({msg : "Hello Express"})
}

const sobre = (request,response) => {
    response.status(201).json({msg : "API de exemplo da disciplina de Programação Web", ano : 2025})
}

const pegarDados = (request, response) => {
    // extração de forma desestruturada
    // No Postman, no Body, escolher a opção raw e JSON
    // Atributos no Body devem ser iguais aos que estão sendo desestruturados, o nome no caso
    const {nome, profissao} = request.body
    response.status(200).json({"nomebody": nome, "profissaobody" : profissao, "msg" : "Dados processados"})
}

// Não tem hot reload
// Para facilitar, podemos usar o nodemon
// npm run start:dev para usar o nodemon e ficar monitorando as mudanças
// npm i -D nodemon

// No Postman, vai ser usado o Header e o Body basicamente
app.route("/").get(ola)
app.route("/sobre").get(sobre)
app.route("/").post(pegarDados)
app.route("/livros").get(getLivros)
app.route("/livros").post(addLivro)

// Pode colocar mais de um método HTTP no mesmo route
app.route("/livros/:index").get(getLivroPorIndex).delete(apagarLivro)

app.listen(3002, () => {
    console.log("Servidor rodando na porta 3002")
})