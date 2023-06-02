const http = require('http');

http.createServer((req, res) => {
    
    console.log(req);

    res.writeHead(200);

    //res.write('Hola Mundo');
    res.write('404 | page nor found');

    res.end();
})
.listen( 8080 );

console.log('Escuchando en el puerto:', 8080);