// console.log( process.argv );

// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
// });

// process.argv.map( (val, index) => {
//     console.log(`${index}: wartosc 2x wieksza z argv to ${val*2}`);
// });

//---
const sumArgv = (arr) => {
    let sum = 0;

    arr.slice(2).forEach( (val) => {
        // sum += parseInt(val);
        sum += Number(val);
    });

    return sum;
};

console.log( sumArgv(process.argv), process.argv.slice(2) );

