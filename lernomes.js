const fs = require('fs')

console.log(1)

console.log(2)

function callback(err, content) {
    console.log(err, String(content))
}

/*fs.readFile('nomes.txt', (err,contents) => {
    console.log(err, String(contents))
})*/

fs.readFile('nomes.txt', callback)

console.log(3)

const readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        err ? reject(err) : resolve(contents)
    })
})

readFile('nomes.txt').then(contents => console.log(String(contents))).catch(err => console.log(err))

// async await
const leitura = async (arquivo) => {
    try {
        const contents = await readFile(arquivo)
        console.log(String(contents))
    } catch (err) {
        console.log(err)
    }
}

leitura('nomes.txt')

console.log(4)
console.log(5)

// Callback and Promises are used to handle asynchronous operations in JavaScript.