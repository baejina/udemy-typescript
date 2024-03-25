// union 타입 2 허용

type Combinable = number | string;
// using Types // 리터럴.

function combine( 
    input1: number | string, 
    input2: number | string,
    resultConversion: 'as-number' | 'as-text') {
    let result;
    if(typeof input1 === 'number' && typeof input2 == 'number' || resultConversion) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() +input2.toString();
    }
    return result;
}

const combinedAges = combine(30,26, 'as-number')
console.log('1 ', combinedAges)

const combinedNames = combine('Max', ' Anna', 'as-text');
console.log('2 ', combinedNames)