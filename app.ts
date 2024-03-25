let userInput: unknown; // 사용자가 무엇을 입력할지 몰라서 넣어놓음.
let userName: string;

userInput=5;
userInput="string max";

// userName = userInput; // unknown은 any보다 조금 더 제한적임
if(typeof userInput === 'string') {
    userName = userInput
}



function generateError(message: string, code: number) {
    throw { message: message, errorCode: code};
}

generateError('an error occurred!', 500);

