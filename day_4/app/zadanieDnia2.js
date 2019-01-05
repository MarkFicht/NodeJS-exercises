const http = require('http');

//---
const server = http.createServer((req, res) => {

    const userAgent = req.headers['user-agent'];

    res.setHeader( "Content-Type", "text/html; charset=utf-8" ); // Zawsze wpierw naglowki.
    res.end(`
        Hello World, from back-end! 
        user-agent: ${userAgent} 
    `);

});

//---
server.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000 - adres: 127.0.0.1:3000');
});