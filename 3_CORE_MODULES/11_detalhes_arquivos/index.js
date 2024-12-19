const fs = require('fs');

fs.stat('arquivo.txt', (err,stats) => {
    if(err){
        console.log(err);        
        return;
    }
    console.log(stats.isFile());
    console.log(stats.isDirectory());   
    console.log(stats.size);    
    console.log(stats.isSymbolicLink());
    console.log(stats.mtime);
    console.log(stats.birthtime);

})