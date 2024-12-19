const inquirer = require('inquirer');
const chalk = require('chalk');


inquirer.prompt([
    {
        type: 'input',
        name: 'nome',
        message: 'Qual o seu nome?'
    },
    {
        type: 'input',
        name: 'idade',
        message: 'Qual a sua idade?'
    }
]).then((answers) => {
    if(!answers.nome || !answers.idade){
        throw new Error('Nome e idade obrigatorio');
    }

    const response ='Meu nome é ' + answers.nome + ' e tenho ' + answers.idade + ' anos.';
    
    console.log(chalk.bgYellow.black(response));
})    
.catch((err) => {
    console.log(chalk.red('ocorreu um erro :',err));
});