const http = require('http');

//---
const server = http.createServer((req, res) => {

    /*const acceptLanguage = req.headers['accept-language'];
    console.log('Preferowane języki:', acceptLanguage);
    console.log(req.headers, req.method);*/

    res.setHeader( "Content-Type", "text/html; charset=utf-8" ); // Zawsze wpierw naglowki.
    res.end('Hello World, from back-end!');

});

//---
server.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000 - adres: 127.0.0.1:3000');
});