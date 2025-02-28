const funcoes = require('./FuncoesArquivosPromises')

funcoes.adicionar({"nome":"CSS3","ano":2023}, 'livros.txt')

funcoes.ler('livros.txt');

console.log(JSON.stringify(JSON.parse(dados)));

console.log(JSON.stringify(funcoes.recuperarPorNome("HTML5",'livros.txt')));

funcoes.removerPorNome("CSS3",'livros.txt');

funcoes.ler('livros.txt');

