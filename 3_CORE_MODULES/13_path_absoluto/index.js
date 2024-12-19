const path = require('path');

// formar path absoluto
const filePath = path.resolve(__dirname, 'arquivo.txt');

console.log(filePath);

// formar path
const midFolder = 'relatorios';
const fileName = 'relatorio.pdf';
const fullPath = path.join(__dirname, midFolder, fileName);

// ou
const fullPath2 = path.join("/", 'arquivos', midFolder,fileName);

console.log(fullPath);
console.log(fullPath2);