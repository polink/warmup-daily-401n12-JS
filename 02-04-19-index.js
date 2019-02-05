'use strict';

const warmUpArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const warmUpFor = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};

const warmUpWhile = (array) => {
    let counter = 0;
    while (counter < array.length) {
        console.log(array[counter]);
        counter++;
    }
};

warmUpWhile(warmUpArray);

const warmUpMap = (array, callback) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i]);
    }
    return newArray;
}

// Map
// const map1 = warmUpArray.map(x => x +1);
const map1 = warmUpMap(warmUpArray,x => x+1);
warmUpFor(map1);

// Filter

const warmUpFilter = (array, callback) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

const filter1 = warmUpFilter(warmUpArray, x => x > 5);

// const filter1 = warmUpArray.filter(x => x > 5);
warmUpFor(filter1);

// Reduce

const warmUpReduce = (array, callback, accumulatorInit) => {
    let accumulator = accumulatorInit;
    for (let i = 0; i < array.length; i++) {
        // K - accumulator, currentValue, currentIndex
        accumulator = callback(accumulator, array[i], i);
    }
    return accumulator;
};

// const reduce1 = warmUpArray.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);
const reduce1 = warmUpReduce(warmUpArray, (accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(reduce1);