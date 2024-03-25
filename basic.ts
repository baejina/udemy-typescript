console.log('Your code goes here...!! 😱');

// using Types
function add(n1:number, n2:number) {
    return n1 + n2
}

const number1 = '5';
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);



// 특정 타입 확인 위해 typeof 사용해.
// 타입스크립트는 개발중에만 지원해. 런타임중에는 지원안혀, 왜냐면
// 타입스크립트 기능과 검사는 자바스크립트 엔진에 없자넝  😢
