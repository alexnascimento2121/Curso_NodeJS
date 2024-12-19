// importando o modulo http para criar um servidor e utiliza request e response e resposta com html
const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World!</h1>');
    res.end('<h1>Tchau World!</h1>');
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})