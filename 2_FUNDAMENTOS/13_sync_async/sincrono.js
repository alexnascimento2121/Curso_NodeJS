// codigo sincrono

const fs = require('fs');

console.log('Lendo o arquivo...');

fs.writeFileSync('arquivo.txt', 'Ola, mundo!');

console.log('Arquivo escrito com sucesso!');