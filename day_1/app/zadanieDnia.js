// console.log(process.argv.slice(2));

const sleepSort = (arr) => {

    let sortArr = arr.slice(2).sort( (a, b) => a - b );
    // console.log(sortArr);

    let parseIntArr = sortArr.map( val => parseInt(val) );
    // console.log(parseIntArr, typeof parseIntArr[0]);

    parseIntArr.map( (addTimeout, index) => {

        if (index === 0) console.time('Funkcja sleepSort()');

        let timeoutID = setTimeout( () => {

            console.log(addTimeout);
            clearTimeout(timeoutID)

            if (index === parseIntArr.length - 1) console.timeEnd('Funkcja sleepSort()');

        }, addTimeout * 1000 )

    })

};

//---
sleepSort(process.argv);