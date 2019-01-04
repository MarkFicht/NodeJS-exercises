const crypto = require('crypto');

const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';
const testPass = ['??TegoHasła', 'CodersLab', 'Node.js Szyfruje Pliki', 'Zaźółć Gęślą Jaźń', 'Moje Haslo 1@3!', '111#$((@)n', 'Dzisiaj Szyfruje 83'];
const algo = ['sha256', 'sha512', 'md5', 'rmd160'];

// const hash = crypto.createHmac(algorithm, text)
//     .digest('hex');
//sha256, sha512

testPass.forEach( pass => {

    algo.forEach( algorithm => {

        let hash = crypto.createHmac(algorithm, pass).digest('hex');
        // console.log(hash);

        if (hash === MY_PWD_HASH) {
            console.log(`Zaszyfrowanym haslem: ${MY_PWD_HASH}\n Bylo: ${pass}. Uzyty byl algorytm funkcji skrotu: ${algorithm}`);
        }
    });

});