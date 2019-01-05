const crypto = require('crypto');

const ENCRYPTED_TEXT = '4f9fa8f98650091c4910f5b597773c0a48278cfb001fe4eb3ff47ada85cbf0ed3dc17016b031e1459e6e4d9b001ab6e102c11e834a98dce9530c9668c47b76ee6f09d075d19a38e48b415e067c6ddcfad0d3526c405a4f4f2fb1e7502f303c40';
const text = 'Ostatnie zadanie polega na rozszyfrowaniu niżej podanego tekstu';

let pass = '';
const firstLastLetter = text.split(' ').forEach( word => {
    pass += word[0];
    pass += word[word.length-1];
});

//---
/*function encodeText(text, password, algorithm){
    const cipher = crypto.createCipher(algorithm, password);

    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

console.log( encodeText('Hello, World!', 'M0j3 has|0!', 'aes-256-cbc') );*/

//---
function decodeText(encodedText, password, algorithm){
    const decipher = crypto.createDecipher(algorithm, password);

    let decrypted = decipher.update(encodedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

console.log( decodeText(ENCRYPTED_TEXT, pass, 'aes-256-cbc') );