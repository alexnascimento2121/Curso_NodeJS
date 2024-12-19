// modulo externo
const minimist = require('minimist');


// interno
const soma = require('./soma.js').soma;

const argumentos = minimist(process.argv.slice(2));

const a=parseInt(argumentos['a']);
const b=parseInt(argumentos['b']);

soma(a,b);