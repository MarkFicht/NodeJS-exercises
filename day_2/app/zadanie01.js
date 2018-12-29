const fs = require('fs');

//---
fs.readFile('./data/zadanie01/input.json', (err, files) => {

    if (err) {
        console.log('Blad przy odczywaniu pliku\n', err);
    } else {
        // console.log(
        //     typeof JSON.stringify(files), JSON.stringify(files, null, 4),'\n',
        //     typeof JSON.parse(files), JSON.parse(files) );

        let sum = 0;
        let sumFiles = JSON.parse(files).forEach( (val) => {
            sum += val;
        });

        //---
        fs.writeFile('./data/zadanie01/sum.txt', sum, (err) => {

            if (err) {
                console.log('Nie udalo sie zapisac sumy do pliku sum.txt\n', err);
            } else {
                console.log('Zapisano sume do sum.txt :)!');
            }

        })

    }

});