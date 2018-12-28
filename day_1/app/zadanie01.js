console.log('Marek :)');

const setTimeoutID = setTimeout( function () {

    console.log('Wita sie z Node.js!');

    clearTimeout(setTimeoutID);

}, 2000 );