const express = require('express');
const app = express();

app.get('/:num1/:num2', (req, res) => {

    // console.log(req.params);

    const { params } = req;

    let num1 = parseInt(params.num1);
    let num2 = parseInt(params.num2);

    res.send(`Czesc! Wynik parametrow z URLa to: ${ num1 + num2 }`);

});

app.listen(8080, () => {
    console.log(`Serwer uruchomiony pod adresem localhost:8080`);
})