const express = require('express');
const app = express();

let yes = 0;
let no = 0;
let maybe = 0;

//---
app.use( express.static('./public/zadanieDnia/') );

//---
/*app.get('/vote/yes', (req, res) => {

    yes += 1;
    res.send(`Dziekujemy za glos!`);

});

app.get('/vote/no', (req, res) => {

    no += 1;
    res.send(`Dziekujemy za glos!`);

});*/

app.get('/vote/:yesOrNo', (req, res) => {

    if (req.params.yesOrNo === 'yes') {
        yes += 1;
    } else if (req.params.yesOrNo === 'no') {
        no += 1;
    } else if (req.params.yesOrNo === 'maybe') {
        maybe += 1;
    }

    res.send(`Dziekujemy za glos!`);

});

app.get('/votes/check', (req, res) => {

    res.send(`
        Ilosc wszystkich glosow: ${ yes + no + maybe }\n
        Glosy na TAK: ${ yes }\n
        Glosy na NIE: ${ no }\n
        Glosy na BYĆ MOŻE: ${ maybe }
    `);

});

//---
app.listen(8080, () => {
    console.log('Server uruchomiony pod adresem localhost:8080');
})