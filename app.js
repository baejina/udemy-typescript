// union 타입 2 허용
// using Types
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 == 'number' || resultConversion) {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, 'as-number');
console.log('1 ', combinedAges);
var combinedNames = combine('Max', ' Anna', 'as-text');
console.log('2 ', combinedNames);