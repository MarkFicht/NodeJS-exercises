/*
Po 4 sekundach od uruchomienia: Node.js
Po 1 sekundzie od uruchomienia: się
Od razu po uruchomieniu wyświetl: Witam
Po 6 sekundach od uruchomienia: i korzystam
Po 5 sekundach od uruchomienia: w konsoli
Po 7 sekundach od uruchomienia: z funkcji czasu!
Po 2 sekundach od uruchomienia: z
Po 3 sekundach od uruchomienia: programem
*/

const howManyTime = (sec, tekst) => {
    if (sec === 0) return `Od razu po uruchomieniu wyswietl: ${tekst}`;
    else if (sec === 1) return `Po ${sec} sekundzie od uruchomienia: ${tekst}`;
    else return `Po ${sec} sekundach od uruchomienia: ${tekst}`;
};

const tekst = ['Witam', 'się', 'z', 'programem', 'Node.js', 'w konsoli', 'i korzystam', 'z funkcji czasu!'];
const sequence = [4, 1, 0, 6, 5, 7, 2, 3];

//---
console.time(`Iteracja 0`);

let setTimeoutID = setTimeout( () => {

    console.log( '\n', howManyTime(sequence[0], tekst[sequence[0]]) );
    console.timeEnd(`Iteracja 0`);

}, sequence[0]*1000 );

//---
console.time(`Iteracja 1`);

setTimeoutID = setTimeout( () => {

    console.log( '\n', howManyTime(sequence[1], tekst[sequence[1]]) );
    console.timeEnd(`Iteracja 1`);

}, sequence[1]*1000 );

//---
console.time(`Iteracja 2`);

setTimeoutID = setTimeout( () => {

    console.log( '\n', howManyTime(sequence[2], tekst[sequence[2]]) );
    console.timeEnd(`Iteracja 2`);

}, sequence[2]*1000 );

//---
console.time(`Iteracja 3`);

setTimeoutID = setTimeout( () => {

    console.log( '\n', howManyTime(sequence[3], tekst[sequence[3]]) );
    console.timeEnd(`Iteracja 3`);

}, sequence[3]*1000 );

//---
console.time(`Iteracja 4`);

setTimeoutID = setTimeout( () => {

    console.log( '\n', howManyTime(sequence[4], tekst[sequence[4]]) );
    console.timeEnd(`Iteracja 4`);

}, sequence[4]*1000 );

//---
console.time(`Iteracja 5`);

setTimeoutID = setTimeout( () => {

    console.log( '\n', howManyTime(sequence[5], tekst[sequence[5]]) );
    console.timeEnd(`Iteracja 5`);

}, sequence[5]*1000 );

//---
console.time(`Iteracja 6`);

setTimeoutID = setTimeout( () => {

    console.log( '\n', howManyTime(sequence[6], tekst[sequence[6]]) );
    console.timeEnd(`Iteracja 6`);

}, sequence[6]*1000 );

//---
console.time(`Iteracja 7`);

setTimeoutID = setTimeout( () => {

    console.log( '\n', howManyTime(sequence[7], tekst[sequence[7]]) );
    console.timeEnd(`Iteracja 7`);

}, sequence[7]*1000 );

//---
console.time(`Iteracja 8`);

setTimeoutID = setTimeout( () => {

    console.log( '\n', howManyTime(sequence[8], tekst[sequence[8]]) );
    console.timeEnd(`Iteracja 8`);

}, sequence[8]*1000 );

clearTimeout(setTimeoutID);

