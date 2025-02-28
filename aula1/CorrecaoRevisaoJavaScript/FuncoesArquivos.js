const fs = require('fs');

const ler = (arquivo) => {
    return fs.readFileSync(arquivo).toString('UTF8');
}

const adicionar = (objeto, arquivo) => {
    dados = JSON.parse(ler(arquivo));    
    dados = [...dados,objeto];
    fs.writeFileSync(arquivo,JSON.stringify(dados));
}

const recuperarPorNome = (nome, arquivo) => {
    dados = JSON.parse(ler(arquivo));   
    objeto = dados.find((obj) => obj.nome === nome);
    return objeto;
}

const removerPorNome = (nome, arquivo) => {
    dados = JSON.parse(ler(arquivo)); 
    novosDados = dados.filter((obj) => obj.nome !== nome);
    fs.writeFileSync(arquivo,JSON.stringify(novosDados));
}

module.exports = { ler, adicionar, recuperarPorNome, removerPorNome }