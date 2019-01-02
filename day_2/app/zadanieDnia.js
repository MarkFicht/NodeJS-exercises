// node zadanieDnia.js ./data/zadanieDnia/test.txt
const fs = require('fs');

const adress = process.argv.slice(2)[0];

//---
fs.readFile(adress, 'utf8', (err, data) => { // 'utf8' jest domyslnie

    if (err) {
        console.log('Blad odczytu pliku');
    } else {
        // console.log(data, data.length);

        let chars = data.split('');
        // console.log(chars);

        let newText = ``;
        chars.forEach( (char, index) => {
            // console.log(char, index);

            if (index % 2 === 0) {
                return newText += char.toUpperCase();
            } else {
                return newText += char.toLowerCase();
            }
        });
        // console.log(newText);

        //---
        fs.writeFile('./data/zadanieDnia/testComplete.txt', newText, (err) => {

            if (err !== null) {
                console.log('Blad zapisu nowego tekstu.');
            } else {
                console.log('Przekopiowano nowy tekst');
            }

        });
    }

});