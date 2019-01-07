const express = require('express');
const app = express();

//---
app.use( express.static('./public/zadanieDnia/') );

//---
app.get('/vote/yes', (req, res) => {



});

app.get('/vote/yes', (req, res) => {



});

app.get('/votes/check', (req, res) => {



});

//---
app.listen(8080, () => {
    console.log('Server uruchomiony pod adresem localhost:8080');
})