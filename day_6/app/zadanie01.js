const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use( express.static('./public/zadanie01') );
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );

app.post('/result', (req, res) => {

    const { numA, numB } = req.body;
    let answer = '';

    if (parseInt(numA) % parseInt(numB) === 0) {
        answer = `Liczba B: ${numB}, JEST dzielnikiem liczby A: ${numA}`;
    } else {
        answer = `Liczba B: ${numB}, NIE JEST dzielnikiem liczby A: ${numA}`;
    }

    res.send(answer);

});

app.listen(3000, () => {
    console.log('Server uruchomiony pod adresem localhost:3000');
});