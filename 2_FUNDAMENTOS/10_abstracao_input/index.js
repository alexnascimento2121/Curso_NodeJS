const inquirer = require('inquirer');

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
]).then((answers) => console.log(answers)).catch((err) => {
    console.log(err);
});