// const person: {
//     name: string,
//     age: number,
//     hobbies: []
// } = {
//     name: 'jina',
//     age: 40,
//     hobbies: ['sports', 'cooking'],
//     role: [number, string];
// };

// # 튜플 학습 샘플
// const person = {
//     name: 'jina',
//     age: 40,
//     hobbies: ['sports', 'cooking'],
//     role: [2, 'author'] // 두개의 요소 타입을 넣고 싶어, 
//                         /* 만약 몇개의 값을 배열에 담을지가 명확, 각 타입을 알고 있다면 사용하면 딱좋아.*/
// };

// #enum 타입 예제.
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// enum도 커스텀 타입이얌. 이름과 중괄호, 세미콜론만 있엉 끝.
enum Role { ADMIN=5, READ_ONLY, AUTHOR ='AUTHOR'};

const person = {
    name: 'jina',
    age: 40,
    hobbies: ['sports', 'cooking'],
    role: Role.READ_ONLY
};

if(person.role === Role.READ_ONLY) {
    // enum Role { ADMIN, READ_ONLY, AUTHOR ='AUTHOR'};
    // Role.ADMIN에 값 안넣으면 숫자 0이 들어가있엉.
    // 만약에 여기서 Rol {ADMIN=5} 라고 설정하면 5라고 들어가.
    // 그다음 값 안넣었으면 READ_ONLY값은 6이얌. 
    // 실제로 값을 대입해서 사용할 수 있엉~! 자주 쓰게 될꺼얌~
    console.log('is READ_ONLY', Role.READ_ONLY);
} 

// any 타입 학습.
let favoriteActivities: any[];
favoriteActivities = ['Sports',5];

for(const hobby of person.hobbies) {
    console.log(hobby);
    // console.log(hobby.localeCompare() ) 
    // Error , 배열속 string은 .map을 사용할수없지,,
    // 타입스크립트가 추론해줘.
    // 기존에 있던거임. 현재까지는 number, string, boolean, array, obj 배움. 
    // 이제부터는 tuple 배워보자!
}

console.log('favoriteActivities:', favoriteActivities)