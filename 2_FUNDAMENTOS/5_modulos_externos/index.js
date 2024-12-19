const minimist = require('minimist');

const argumentos = minimist(process.argv.slice(2));

const nome = argumentos['nome'];
const profissao = argumentos['profissao'];

console.log(argumentos);
console.log(nome, profissao);

console.log(`Meu nome é ${nome} e minha profissao e ${profissao}`);