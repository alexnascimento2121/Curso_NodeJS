const readline= require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual a sua idade?', idade => {
    if(idade >= 18){
        console.log('Maior de idade');
    }
    console.log(`Sua idade é ${idade}`);

    readline.close();
});