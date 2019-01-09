const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

app.use( express.static('./public/zadanie02') );
app.use( cookieParser() );
app.use( bodyParser.urlencoded({ extended: true }) );

app.post('/cookie/set', (req, res) => {

    res.cookie('imie', req.body.name, {
        maxAge: 2592000000,
    });

    res.send(`Ciasteczko imie, zostalo ustawione na miesiac.`)

});

app.get('/cookie/show', (req, res) => {

    const cookieName = req.cookies.imie;

    res.send(`Ciastko imie, ma zawartosc: ${cookieName}`);

});

app.get('/cookie/check', (req, res) => {

    const cookieEgz = req.cookies.imie;

    if (cookieEgz) {
        res.send('Ciasteczko imie istnieje');
    } else {
        res.send('Ciasteczko imie NIE istnieje');
    }

});

app.get('/cookie/remove', (req, res) => {

    res.clearCookie('imie');
    res.send('Ciasteczko imie zostalo usuniete lub nie istnieje');

});

app.listen(8080, () => {
    console.log('Server uruchomiony pod adresem localhost:8080');
});