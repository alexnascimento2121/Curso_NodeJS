const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {
    
    const query = url.parse(req.url, true)
    const fileName = query.pathname.substring(1);

    if(fileName.includes('.html')){
      if(fs.existsSync(fileName)){
        fs.readFile(fileName, (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data)
            return res.end(); // finaliza o envio da resposta
        })

        }else{
            fs.readFile('404.html', (err, data) => {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write(data)
                return res.end();
            })            
        }
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})