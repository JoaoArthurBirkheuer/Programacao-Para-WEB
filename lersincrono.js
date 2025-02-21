const fs = require('fs')

let arquivo = 'outrosnomes.txt'

const books = [
    { nome: 'JavaScript: The Good Parts', ano: 2008 },
    { nome: 'Clean Code: A Handbook of Agile Software Craftsmanship', ano: 2008 },
    { nome: 'The Pragmatic Programmer: Your Journey to Mastery', ano: 1999 },
    { nome: 'Design Patterns: Elements of Reusable Object-Oriented Software', ano: 1994 },
    { nome: 'Refactoring: Improving the Design of Existing Code', ano: 1999 }
];

// escrever arquivo no disco
fs.writeFileSync(arquivo, JSON.stringify(books))

// ler arquivos do disco
let dadosArquivo = fs.readFileSync(arquivo).toString('UTF8')

console.log(dadosArquivo)

// deve ser feito o parse para poder usar um objeto javascript
let dadosJSON = JSON.parse(dadosArquivo)

console.log(dadosJSON[0])