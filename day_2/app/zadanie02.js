const fs = require('fs');

//---
fs.readdir('./data/zadanie02', (err, files) => {

    if (err) {
        console.log('Blad odczytu plikow');
    } else {
        files.forEach( (data, index) => {

            //---
            fs.readFile(`./data/zadanie02/${data}`, 'utf8', (err, val) => {

                if (err !== null) {
                    console.log('Blad podczas odczytywania zawartosci pliku');
                } else {
                    console.log(`Plik ${index} o nazwie: ${data}\n`, val);
                }

            })

        })
    }

})