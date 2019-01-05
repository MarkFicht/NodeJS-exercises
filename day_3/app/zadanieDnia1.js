// node ./zadanieDnia1.js ./data/zadanieDnia1/testFile.txt
// 4f7ae6569b55cb6275423ca1cdf31475e607da1d5204c110a58fb480c96e6eca
const fs = require('fs');
const crypto = require('crypto');

const fileAdress = process.argv.slice(2)[0];
const alg = 'sha256';

//---
fs.readFile(fileAdress, 'utf8', (err, data) => {

    if (err) {
        console.log('Zla sciezka do pliku *.txt');
    } else {
        console.log(data);

        //---
        let hash = crypto.createHmac(alg, fileAdress)
            .digest('hex');  // or 'base64'
        console.log(`\nFunkcja skrotu dla sciezki z argumentu, z uzyciem algorytmu: ${alg} ->\n ${hash}`);

    }

})