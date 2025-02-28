const funcoes = require('./FuncoesArquivos')

funcoes.adicionar({"nome":"CSS3","ano":2023}, 'livros.txt')

dados = funcoes.ler('livros.txt');

console.log(JSON.stringify(JSON.parse(dados)));

console.log(JSON.stringify(funcoes.recuperarPorNome("HTML5",'livros.txt')));

funcoes.removerPorNome("CSS3",'livros.txt');

dados = funcoes.ler('livros.txt');

console.log(JSON.stringify(JSON.parse(dados)));