const a ='10';

// checar se a é um numero;
if(typeof a !== 'number'){
    throw new Error('A deve ser um numero');
}

// outra forma de fazer

if(!Number.isInteger(a) || typeof a !== 'number'){
    throw new Error('A deve ser um numero inteiro');
}
console.log("continuando restante do programa...");