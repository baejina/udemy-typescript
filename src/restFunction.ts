
const people = {
    firstName: 'jina',
    firstAge: 39
};

const copiedPeople = {...people};

// 이렇게 받을 수 있어. 하나씩 안써줘도!
// ...rest 매개변수 덕분에 숫자 목록이 함수 내부의 배열로 병합되
// 결국 숫자가 반환되!
const add = ( ...numbers: number[]) => {
    // reduce는 숫자를 반환해.
    // 줄여진 숫자 결가 반환되.
    // 따라서 add 가 변수든, 상수든 숫자의 배열이 아니라,
    // 숫자 몇 개가 되
    return numbers.reduce(( curResult, curValue ) => {
        return curResult + curValue;
    }, 0);
}

// 파람값을 여러개 넘기고 싶을때 
const addedNumbers = add(10,5,2,3.7);

console.log(addedNumbers);


const hobbies = ['Sport', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

// const hobby1 = hobbies[0];
// let hobby2 = hobbies[1]; 이걸 아래로 짧게 쓸 수 있어.
// 배열 스트럭처링
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
// hobbies배열에 요소 두 개 이상 있다면
// hobby1, hobby2에 들어가지 못한 데이터들은 remainingHobbies라는 새로울 배열에 저장되어 새로운 배열로 병합이 되.

console.log('1. ', hobbies)
console.log('1. ', hobby1) // '꺼낸' 값은 실제로 새로운 상수나 변수에 복사된것뿐, 배열에서 제거 된건 아냐!
console.log('2. ', hobby2)
// console.log 결과값 확인해보셈.



// 객체 스트럭처링
// 객체에 있는 속성이름으로 해당 키값이름으로 가져올 수 있엉.
// 그리고 같은 이름의 상수나 변수에 저장 가능해! 
// let { firstName , firstAge } = people
// 그러나 다른이름으로 사용하고 싶을 수도 있잖아. 그럼 아래처럼 별징을 정해.
let { firstName: userNick , firstAge } = people

// people 은 그대로 인데, 객체 값을 복사한거여, 이렇게 출력이 되~
console.log(userNick, firstAge, people);

/*
    tsconfig.json 
    target을 es5도 해보고, es6로도 해봐서 컴파일 된거 확인 해봐.
    es5로 하면 stric모드 주석치고. 
*/
