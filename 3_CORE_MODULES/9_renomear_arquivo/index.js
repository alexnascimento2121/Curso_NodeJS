const fs =require('fs');

const fileAntigo = 'novo_arquivo.txt';
const fileNovo = 'arquivo.txt';

fs.rename(fileAntigo, fileNovo, (err) => {
    if(err){
        console.log(err);
        return;
    }  
    console.log('Arquivo renomeado com sucesso!');
}) 