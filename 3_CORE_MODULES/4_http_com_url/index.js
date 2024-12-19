const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    // a url ja vem dentro do request
    const name = require('url').parse(req.url, true).query.name;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if(!name){
        res.end('<h1>Preencha o seu nome:</h1><form action="/" method="get"><input type="text" name="name"><button type="submit">Enviar</button></form>');
    }else{
        res.end('<h1>Hello ' + name + '!</h1>');  
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})