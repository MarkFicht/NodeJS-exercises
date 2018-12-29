const fs = require('fs');

// node zadanieDnia.js ./data/zadanieDnia/test.txt

const adress = process.argv.slice(2)[0];

fs.readFile(adress, 'utf8', (err, data) => { // 'utf8' jest domyslnie

    if (err) {
        console.log('Blad odczytu pliku');
    } else {
        console.log(data);

        //
    }

})