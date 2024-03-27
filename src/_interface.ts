/*
 키워드 interface로 생성
 간단히 말하자면 객체가 어떻게 구성되어야 하는지 정의함.
 타입스크립트에서만 지원함. (바닐라 X)
 대문자로 시작 관례, 권장함.
 
    구조는 정의할 수 있으나, 값을 할당 안되.
    메서드 정의도 할수는 있지만 구조만 정의 가능해.
*/ 

// interface Person {
//     name: string;
//     age: number;

//     greet(phrease: string) :void;
// }

interface Named {
    readonly name?: string,
    outputName?: string
}


interface Greetable extends Named {
    name?: string;
    greet(phrase: string): void //선택적 프로퍼티선언. 없어도 오류는 안나.
}


class Person implements Greetable {
    name?: string;
    age = 30;

    // constructor(n?: string) { 
    constructor(n: string = 'baejina') { // 기본값 세팅. 
        if (n) this.name = n;
        
    }

    greet(phrase: string) {
        if(this.name) {
            console.log(phrase + ' ' + this.name );
        } else {
            console.log('hi');
        }
        
    }
}

// let user1: Person;
let user1: Greetable;
// 위에서 정의한 타입와 일치해야 해.
// user1 = {
//     name: 'jina',
//     age: 39,
//     greet(phrase: string) {
//         console.log(phrase + ' ', this.name);
//     }
// }

// user1 = new Person('Max'); 
user1 = new Person(); // Name 값이 옵션일때 
user1.greet('Hi there - I am');
console.log(user1);

/*

    그런데 왜 interface를 사용할까?
    걍 type으로 정의해도 상관없자나?
        인터페이스로 정의하면 객체의구조를 정의하고나 한다는 걸 명확히 해.

        따라서 객체의 타입을 정의할때는 
        커스텀 타입을 사용하기 보다 인터페이스를 자주 사용해.

        클래스 안에 인터페이스를 구현할 수 있어.
            이게 뭔소리여?
        예를들어

        class Person implements Greetable, AnotherInterface
            이런식으로 하나의 person 클래스에 1가지 이상 클래스를 상속받아 구현가능험.
            추상화 클래스 메서드 구현 가능한데, 얘는 아예 메서드 사용 불가해.

*/


// 이렇게 타입으로 함수를 받을수도 있구 인터페이스로 만들수도 있어! 아래참고.
// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a:number , b:number): number;
}

let add2: AddFn;

add2 = (n1: number, n2: number) => { return n1+n2 }