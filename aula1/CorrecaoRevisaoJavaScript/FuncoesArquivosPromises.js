const fs = require('fs');

const readFile = file => new Promise((resolve, reject) =>{
    fs.readFile(file, (err, contents) => {
        if(err){
            reject(err);
        } else {
            resolve(contents);
        }
    })
})

const writeFile = (file, data) => new Promise((resolve, reject) =>{
    fs.writeFile(file, data, (err, contents) => {
        if(err){
            reject(err);
        } else {
            resolve(contents);
        }
    })
})


const ler = filename => {
    readFile(filename).then(contents => {
        console.log(String(contents));
    });
};


const adicionar = (json, filename) => {
    readFile(filename).then(contents => {
        let dataJSON = JSON.parse(contents);
        let newData = [...dataJSON, json];

        writeFile(filename, JSON.stringify(newData));
    })
}

const recuperarPorNome = (name, filename) => {
    readFile(filename).then(contents => {
        const dataJSON = JSON.parse(contents);
        let info;
        
        dataJSON.map((data) => {
            if(data.nome == name) {
                info = data;
            }
        }) 

        console.log(info != null ? info : 'Info não encontrada!');
    })
}


const removerPorNome = (name, filename) => {
    readFile(filename).then(contents => {
        let dataJSON = JSON.parse(contents);
        
        newJSON = dataJSON.filter((json) => {
            return json.nome != name;
        });
    
        writeFile(filename, JSON.stringify(newJSON));
    })
}

module.exports = {ler, adicionar, recuperarPorNome, removerPorNome};