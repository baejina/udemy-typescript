let userInput: unknown; // 사용자가 무엇을 입력할지 몰라서 넣어놓음.
let userName: string;

userInput=5;
userInput="string max";

// userName = userInput; // unknown은 any보다 조금 더 제한적임
if(typeof userInput === 'string') {
    userName = userInput
}

function generateError(message: string, code: number): never {
    // 이 함수는 never를 반환함 
    // 절대 반환값을 생성하지 않음.
    // 무한루프를 발생시켜도 아무것도 반환하지 않는 함수
    // 에러 발생시키고 멈추는 걸로 많이 사용이 되.
    throw { message: message, errorCode: code};
}

const errorResult = generateError('an error occurred!', 500);
// result를 console.log로 찍어보면 undefined가 안나옴. 왜냐면
// 오류가 발생할때 스크립트를 멈춤, 스크립트를 취소하는거.
// 아무것도 반환하지 않아. 그래서 이 함수의 반환값은 void가 아니라 naver임
// 그러나 naver를 할당하지 않고 마우스 올려보면(genreateError) 추론한 타입이 void임.
// never는 새로운 타입.  타입스크립트 초기버전에서는 지원이 안됐어.
// 그래서 void로 추론되어서 그렇게 나왔던거.



/*
    모든 핵심 타입을 배우고, 어떻게 생성, 할당하는지, 
    변수와 타입스크립트 할당 어떻게 다지, 배움.
    number, string, boolean, agument, 함수 자체 할당,{}, []
    enum, tuple 타입알리어스, alias, literal, union, unknown, 
    never을 배웠음
*/


/* # 컴파일, 감시모드
$ tsc --init
// 하면 현재 폴더에 tsconfig.json파일이 자동으로 생겨
tsconfig.json 파일 열어보면 여러가지 설정이 주석으로 쳐있구.

일단 닫고 터미널에 
$ tsc 치고 엔터 치면
모든 **.ts 파일들이 컴파일이 되는 것을 볼수가 있엉.
.js로 변환되있을꺼야.

하면 해당 폴더의 모든 타입스크립트에 대해 감시모드로 전환되.
$ tsc --watch

*/


// tsconfig.json
// strictFunctionTypes 옵션 설명중 했던 예제얌. 
const button = document.querySelector("button");
function clickHandler( message: string ) {
    console.log("Clicked!",message);
}
if(button) button.addEventListener('click', clickHandler.bind(null, 'you\'r welcome'));
