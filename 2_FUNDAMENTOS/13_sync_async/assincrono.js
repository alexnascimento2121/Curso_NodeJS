// codigo assincrono

const fs = require('fs');

console.log('Lendo o arquivo...');

fs.writeFile('arquivoAssincrono.txt', 'Ola, mundo!',function(err){
    setTimeout(() => {
        console.log('Arquivo criado!');
    },2000)
});

console.log('Arquivo escrito com sucesso!');