const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const comm = require('./zadanieDniaZPodpowiedzia');

const app = express();

const addCom = `<br><a href="add.html">Dodaj komentarz</a>`;
const delAllCom = `<br><a href="/deleteCookie">Usun wszystkie komentarze</a>`;
const returnHome = `<br><a href="/">Powrot do strony glownej</a>`;

app.use( express.static('./public/zadanieDnia') );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( cookieParser() );


//---
app.get('/', (req, res) => {

    const myCookie = req.cookies.texts;

    if (myCookie) {

        let parserCookie = comm.readComments(myCookie);
        // console.log(parserCookie, typeof parserCookie);
        // console.log(myCookie, typeof myCookie);

        let list = ``;

        for (let index in parserCookie) {
            list += `<li>${parserCookie[index]}</li>`;
        }

        res.send('<ol>' + list + '</ol>' + addCom + delAllCom);

    } else {

        res.send('Aktualnie ciastko o nazwie texts jest puste.' + addCom);

    }

});

app.post('/save', (req, res) => {

    const myCookie = req.cookies.texts;

    let allComments = comm.addComment(myCookie, req.body.comment);
    res.cookie('texts', allComments); //Aktualizacja ciastka

    res.send(`Dodano komentarz!` + returnHome);

});

app.get('/deleteCookie', (req, res) => {

    res.clearCookie('texts');
    res.send('Ciastko texts usunięte!' + returnHome);

});


//---
app.listen(8080, () => {
    console.log(`Server uruchomiony pod adresem localhost:8080`);
});