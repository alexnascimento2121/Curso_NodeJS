// nome  neste caso eu uso o envio de argumentos via linha de comando; Passo argumento no momento em que roda o comando node index.js

console.log(process.argv);

const argumentos = process.argv.slice(2); // slice(2) pega os argumentos a partir do segundo argumento;

console.log(argumentos);

const nome = argumentos[0].split('=')[1];
const idade = argumentos[1].split('=')[1];
const cidade = argumentos[2].split('=')[1];
console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}`);