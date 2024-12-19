const fs = require('fs');

if(!fs.existsSync('./arquivos')){
   console.log('O diretorio nao existe');
   fs.mkdirSync('./arquivos');
}else if(fs.existsSync('./arquivos')){
    console.log('O diretorio ja existe');

}