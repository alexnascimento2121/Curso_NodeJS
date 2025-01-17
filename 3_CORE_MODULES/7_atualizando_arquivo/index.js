const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
    
    const urlInfo = require('url').parse(req.url, true);
    const name = urlInfo.query.name;

    if(!name){
        // leitura do arquivo
    fs.readFile('index.html',  (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data)
        return res.end(); // finaliza o envio da resposta
    })
    }else{
        const namNewline = name + ',\r\n';

    fs.appendFile('arquivo.txt', namNewline, function(err,data) {        
            res.writeHead(302, {
                'Location': '/'
                });
              //  res.write(data)
                return res.end(); // finaliza o envio da resposta
            })        
    }
    
    
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})