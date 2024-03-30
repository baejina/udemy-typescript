
// 타입스크립트 제네릭
/*
    다른 타입에 연결된 타입 다른타입이 무엇인지 명시해.
*/
// const names = ['jina', 'zeeone'];
// const names: Array<string> = []; // sring[] 똑같어
// //

// /* 
//     이 promise 상수에 마우스 오버해보면 타입스크립트의 프로미스 타입임. 
//     뭐가 들어갈지는 모르니까 Promise<unknown>으로 뜨긴하지만.
// */
// const promise = new Promise(( resolve, reject ) => {
//     setTimeout(() => {
//         resolve('This is done!');
//     }, 2000)
// })


// function merge(objA: object, objB:object ) {
//     return Object.assign(objA, objB);
// }

/*
    함수뒤에 Type을 나타내는 T를 넣어도 되는데, 다른거 넣어도 되.
    교차타입이 반환됨. 
*/
// 제네릭 타입의 기반이 되는 타입에 제약조건 넣는 방법. extends object
//      제약조건은 다양하게 걸수 있어. 유니온(string | number), 직접만든 타입도 가능(Person)
//      등 숫자나 문자도 가능해.
//function merge<T, U>(objA: T, objB: U) {
function merge<T extends object,  U extends object>(objA: T, objB: U) {
    console.log(objB)
    return {...objA, ...objB};
}

/* 
    mergeObj에는 age가 있지만 막상 찍어보면 mergedObj에 age가 있는걸 
    타입스크립트가 모르니까 as로 각 객체를 형변환 해줄수도 있지만 
    제네릭으로 해줄수도 있어. 함수쪽 확인.
*/
// const mergedObj = merge({name: 'jina'},{age: 39}) as {name: string, age: number};
// const mergedObj = merge( {name: 'jina', hobbies: ['Sports']} ,30); // 넣으면 동작안해. 왜냐면 객체가 아니니깐.
const mergedObj = merge( {name: 'jina', hobbies: ['Sports']} ,{age: 30});
console.log(mergedObj);



interface Lengthy {
    length: number;
}

// 배열이나 문자열을 전달할데 배열의 글자나, 엘리먼트의 수를알고 싶엉.
// 문자열이나, 배열이 비어 있으면 값 없어 라고 사용할건데 있으면 알려줄거얌. // 튜플반환
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = '값 없어';
    if(element.length === 1) {
        descriptionText = 'Got 1 elements.'
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.'
    }
    return [element, descriptionText]
}

// console.log(countAndDescribe('Hi there!'));
// console.log(countAndDescribe(['Sports', 'Cooking']));
console.log(countAndDescribe([]));

/*
    keyof 제약조건
    앞의 객체 T의 key가 될꺼라서 두번쨰 매게변수는 key가 첫번째 타입의 속성이라는 걸 알랴줌
*/
function extractAndConvert<T extends object, U extends keyof T>( obj: T, key: U) {
    return 'value' + obj[key]
}

// console.log( extractAndConvert({name: 'JINA'} , 'name'))

// 의도치 않게 obejct까지 오버라이드해서 처리 하다보니 remove할때 이슈가 생겨서
// extends로 string, number, boolean만 받을 수 있도록 처리함.
class DataStorage<T extends string | number | boolean > {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }
    removeItem(item: T) {
        if(this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); 
        // 배열에서 찾지 못하면 -1반환 그래서 배열의 마지막 요소 제거됨.
        // 원래대로 작동되면 안되지만 어쩌다보니 제거된거. 그렇다면 해결방법은
        // 값이 -1이라면 반환하고 잘못된 item을 제거하지 못하게 하는 코드를 넣어염!

    }
    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string> ();
textStorage.addItem('JINA0');
textStorage.addItem('JINA2');
textStorage.addItem('JINA3');
textStorage.removeItem('JINA0');
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number> ();
// const objectsStorage = new DataStorage<object> ();
// objectsStorage.addItem({name: 'jina'})
// objectsStorage.addItem({name: 'jina2'})
// // ...
// objectsStorage.removeItem({name: 'jina2'});
// console.log(objectsStorage.getItems());


/*
    내장 유틸리티 타입 - 공식문서는 있는데 몇가지 유용한거 보여줄게!

    1) Partial 타입 -> 파셜타입이 우리가 만든 타입을 감싸면 이 모든 속성이 옵션이 되는 타입으로
                      바꿔 준디.처음엔 빈객체로 두어도, 이 요소들을 차례로 추가 할 수 있엉ㅇ
    2) Readonly 타입                  
*/

// 인터페이스든, 커스텀 타입이든 뭐 다 상관없어. 
interface CourseGoal {
    title: string,
    description: string;
    competeUnit: Date;
}

function createCourseGoal(title: string, description: string, date: Date
    ) : CourseGoal {
        let courseGoal: Partial<CourseGoal> = {};
        courseGoal.title = title,
        courseGoal.description = description;
        courseGoal.competeUnit = date;
        return courseGoal as CourseGoal; 
    }
   

// 더이상 추가 하고 싶지 않을떄 Readonly 타입 활용.
const names: Readonly<string[]> = ['jina', 'zeeone'];
// names.push('hoi'); <- 밑줄생겨.


