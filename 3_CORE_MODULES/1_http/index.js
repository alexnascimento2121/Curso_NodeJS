// importando o modulo http para criar um servidor e utiliza request e response
const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.write('Hello World!');
    res.end();
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})