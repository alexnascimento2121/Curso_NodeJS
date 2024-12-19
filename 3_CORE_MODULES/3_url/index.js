// modulo url do node serve para decompor URL atraves do metodo parse; podemos resgatar host,path,search, query, etc.

const url = require('url');

const endereco = 'https://www.google.com.br/search?q=curso+de+nodejs';

const urlInfo = new url.URL(endereco);

console.log(urlInfo.host);
console.log(urlInfo.pathname);
console.log(urlInfo.search);
console.log(urlInfo.searchParams.get('q'));