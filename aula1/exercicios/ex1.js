/**
 * Crie um arquivo JavaScript com funções para manipular arquivos de texto no sistema de
arquivos do sistema operacional. O arquivo a ser manipulado no formato texto deverá conter
uma coleção de objetos JSON. As seguintes funções devem ser criadas:
a. Função que recebe nome (nome e caminho) de um arquivo e retorna a leitura dos dados
existentes nele.
i. Exemplo: Recebe “dados.txt” e o retorno do método deve ser um conteúdo: {
"nome": "CSS3", "ano": 2020 }, { "nome": "HTML5", "ano": 2018 }, {
"nome": "JavaScript", "ano": 2015 }
b. Função que recebe um objeto JSON e o nome (nome e caminho) de um arquivo e
adiciona o objeto recebido na coleção de objetos JSON existentes no arquivo em
questão.
i. Exemplo: Adiciona o elemento { "nome": "CSS3", "ano": 2020 } na lista de
objetos do arquivo.
c. Função que recebe um nome de um atributo e o nome (nome e caminho) de um arquivo
e retorna um objeto cujo nome exista na coleção de objetos.
i. Exemplo: Recebe o valor "CSS3" e retorna { "nome": "CSS3", "ano": 2020 }
d. Função que recebe um nome de um atributo e o nome (nome e caminho) de um arquivo
e remove o objeto cujo nome exista na coleção de objetos.
i. Exemplo: Recebe o valor "CSS3" e remove o objeto com esse valor.
 */

/**
 * Crie um arquivo JavaScript com funções para manipular arquivos de texto no sistema de
arquivos do sistema operacional. O arquivo a ser manipulado no formato texto deverá conter
uma coleção de objetos JSON. As seguintes funções devem ser criadas:
a. Função que recebe nome (nome e caminho) de um arquivo e retorna a leitura dos dados
existentes nele.
i. Exemplo: Recebe “dados.txt” e o retorno do método deve ser um conteúdo: {
"nome": "CSS3", "ano": 2020 }, { "nome": "HTML5", "ano": 2018 }, {
"nome": "JavaScript", "ano": 2015 }
b. Função que recebe um objeto JSON e o nome (nome e caminho) de um arquivo e
adiciona o objeto recebido na coleção de objetos JSON existentes no arquivo em
questão.
i. Exemplo: Adiciona o elemento { "nome": "CSS3", "ano": 2020 } na lista de
objetos do arquivo.
c. Função que recebe um nome de um atributo e o nome (nome e caminho) de um arquivo
e retorna um objeto cujo nome exista na coleção de objetos.
i. Exemplo: Recebe o valor "CSS3" e retorna { "nome": "CSS3", "ano": 2020 }
d. Função que recebe um nome de um atributo e o nome (nome e caminho) de um arquivo
e remove o objeto cujo nome exista na coleção de objetos.
i. Exemplo: Recebe o valor "CSS3" e remove o objeto com esse valor.
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'dados.txt');

// Função para ler dados do arquivo
function readFile(filePath) {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]'); // Cria o arquivo com um array vazio se não existir
    }
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

// Função para adicionar objeto JSON ao arquivo
function addObjectToFile(jsonObject, filePath) {
    const data = readFile(filePath);
    data = [...data, jsonObject];
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function findObjectByName(name, filePath) {
    const data = readFile(filePath);
    return data.find(obj => obj.nome === name);
}

function removeObjectByName(name, filePath) {
    let data = readFile(filePath);
    data = data.filter(obj => obj.nome !== name);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = {
    readFile,
    addObjectToFile,
    findObjectByName,
    removeObjectByName
};

// Testando as funções
console.log(readFile(filePath));
addObjectToFile({ "nome": "CSS3", "ano": 2020 }, filePath);
addObjectToFile({ "nome": "HTML5", "ano": 2018 }, filePath);
addObjectToFile({ "nome": "JavaScript", "ano": 2015 }, filePath);
console.log(findObjectByName("CSS3", filePath));
removeObjectByName("CSS3", filePath);
console.log(readFile(filePath));
