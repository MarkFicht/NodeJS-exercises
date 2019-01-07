const express = require('express');
const app = express();

let rememberName = '';

app.get('/name/set/:imie', (req, res) => {

    rememberName = req.params.imie;

    res.send(`Zapmietuje imie z URLa: ${ rememberName }`);

});

app.get('/name/show', (req, res) => {

    res.send('Wczesniej podane imie to: ' + rememberName);

});

app.get('/name/check', (req, res) => {

    if (rememberName === '') {
        res.send('Nie ma aktualnie zapisanego imienia w zmiennej');
    } else {
        res.send('Aktualnie jest zapisane imie w zmiennej');
    }

});

//---
app.listen(8080, () => {
    console.log('Serwer uruchomiony pod adresem: localhost:8080');
});