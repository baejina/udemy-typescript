"use strict";
const people = {
    firstName: 'jina',
    firstAge: 39
};
const copiedPeople = Object.assign({}, people);
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(10, 5, 2, 3.7);
console.log(addedNumbers);
const hobbies = ['Sport', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log('1. ', hobbies);
console.log('1. ', hobby1);
console.log('2. ', hobby2);
let { firstName: userNick, firstAge } = people;
console.log(userNick, firstAge, people);
