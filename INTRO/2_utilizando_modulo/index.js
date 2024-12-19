const fs = require('fs'); //importando o modulo fs (file system);

fs.readFile('arquivo.txt', 'utf-8',(err, data) =>{
    if(err){
        console.log(err);
    }
    console.log(data);
})