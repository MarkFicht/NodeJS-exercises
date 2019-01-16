const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // Teraz to co przyjdzie w body od Fronta, bedzie automatycznie rozkodowane, tak samo wyslane odpowiednio metoda res.json()

app.use(express.static('./public/przykladAjax/'));

app.post('/reverse', (req, res) => {
    const text = req.body.text;
    const reversed = text.split('').reverse().join(''); //Odwrócenie ciągu znaków
    res.json({
        reversed, //Pamiętasz ten skrótowy zapis (reversed : reversed)?
    });
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});