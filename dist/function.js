function sum(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
console.log(printResult(sum(5, 12)));
var combineValues;
combineValues = sum;
console.log(combineValues(8, 8));
