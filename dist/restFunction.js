var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var people = {
    firstName: 'jina',
    firstAge: 39
};
var copiedPeople = __assign({}, people);
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addedNumbers = add(10, 5, 2, 3.7);
console.log(addedNumbers);
var hobbies = ['Sport', 'Cooking'];
var activeHobbies = ['Hiking'];
activeHobbies.push.apply(activeHobbies, hobbies);
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
console.log('1. ', hobbies);
console.log('1. ', hobby1);
console.log('2. ', hobby2);
var userNick = people.firstName, firstAge = people.firstAge;
console.log(userNick, firstAge, people);
