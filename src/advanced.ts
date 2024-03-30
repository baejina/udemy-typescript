type Admin  = {
    name: string,
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};

/*
    아래가 유니온 타입.
*/ 
type Combinable2 = string | number;
type Numberic = number | boolean;

/*
    교차 연산자. 여러타입을 교차 시키는데 쓸 수 있고 교차타입들에 공통적으로 있는 타입을 교차 시키는켜.
    아래 두개 공통적으로 있는 number가 교차되, 
*/
type Universal = Combinable2 | Numberic;

/* 
    함수 오버로드 하기.
*/
// function add3 ( a:number, b:string ): string 
function add3 ( a:number, b: number): number ;
function add3 ( a:string, b: string): string ;
function add3 ( a:Combinable2, b: Combinable2) {
    // 아래 if문 구조가 타입가드라고해.
    if(typeof a ==='string' || typeof b ==='string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result3 = add3('BBJina', 'Schwars') as string; // 형변환. 숫자나 문자
result3.split(' ');

/*
    옵셔널 체이닝
*/

const fetchUserData = {
    id: 'u1',
    name: 'Jina',
    job: {title: 'CEO', description: 'My own company!'}
}
// 갖고오다가 만약에 못가져오게 되면 자바스크립트에서 체크하는건 
// fetchUserData.job && fetchUserData.job.title <-이런식으로 윗단계가 있는지 체크하고 그 다음 값에 접근 해야 
// 런타임에러를 피할 수 있엉. 
// 하지만 타입스크립트에서는  fetchUserData?.job?.title <- 이렇게 ?물음표를 뒤에 붙여주는 
//    타입스크립트에게 존재하냐고 묻고, 존재하면 job속성에 접근해
// 타입스크립트 버전 3.7
console.log(fetchUserData?.job?.title)


/*
    선택적 체이닝 :nullish 데이터 처리를 도와주기 떄문에 null병함이라함.
    null인지, undefind인지 null일때를 대비한 폴백이 있어야하자나@
*/

const userInput2 = null
// const storedData = userInput2 || 'default'
const storedData = userInput2 ?? 'Default' //null이거나 undefind일 때 폴백을 쓰세용 ''일 때는 안들어가. 빈값이 출력이되.

console.log(storedData);


type UnknownEmployee = Employee | Admin;

// 해당 타입 내에 해당 컬럼의 값 있는 거 체크. 없을수도 있자나.
// 그냥 자바스크립트로 체크도 가능하지만 실제로 오브젝트 빈값으로 와서.
// name 은 admin , Employee 둘다 있어서 확인이 가능하나,
// privileges, startDate는 있을수도 있고 없을수도 있자나. 그래서 
function printEmployeeInformaton(emp: UnknownEmployee) {
    console.log('Name: ', emp.name);
    // if걸어주는거 타입가드라고해. 
    if('privileges' in emp) {
        console.log('Privileges:', emp.privileges);
    }
    if('startDate' in emp) {
        console.log( 'startDate', emp.startDate);
    }
    //console.log('emp: ', emp);
}

// printEmployeeInformaton(e1);
printEmployeeInformaton( {name : 'Jina', startDate: new Date()});
// privileges 가 없어서 출력이 안됨~ 


class Car {
    drive() {
        console.log('Driving...')
    }
}

class Truck {
    drive() {
        console.log('Driving a truck!');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo...'+ amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive(); // car truck 둘다에 있음. 
    
    //이렇게 쓸수도 있고 우아한 방식으로 쓸 수도 있어 instanceof
    // instanceof는 바닐라스크립트에 있는거. 타입스크립트 아녀,
    if( vehicle instanceof Truck) {
    // if( 'loadCargo' in vehicle) {
        vehicle.loadCargo(5); // truck 타입에만 존재하자나.
    }
}

useVehicle(v1);
useVehicle(v2);

// 인터페이스로
// interface Bird {
//     flyingSpeed: number;
// }

// interface Horse {
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//     if('flyingSpeed' in animal)  {
//         console.log('Moving with speed : ' , animal.flyingSpeed)
//     }
//     if('runningSpeed' in animal)  { 
//         console.log('Moving with speed : ' , animal.runningSpeed)
//     }
// }
// // moveAnimal({})


/*
 타입스크립트가 이해하도록 하는 형변환 방식에는 2가지가 있어.
    1) 앞에다가 const ... = <HTMLInputElement>document..getByInd('xxx);
    2) 뒤에다가 const ... = document.get..ById('user-input')! as HTMLInputElement 
    암튼 이런식으로 중요한 정보를 타입스크립트에 전달해 코드가 잘 동작하게 할수있엉.

    참고로 협업할 땐 한가지 방식으로 쓰는것을 추천해.
*/

// 형변환 관련 코드 그냥 docu..geById 하면 타입스크립트입장에서 dom몰라. 그래서 
// tsconfig.json lib옵션에 dom넣어줬어. 앞에다가 <HTMLInputElement>형변환 코드 넣어줘.
// const userInputEl = <HTMLInputElement>document.getElementById('user-input')!;



// const userInputEl = document.getElementById('user-input')! as HTMLInputElement
const userInputEl = document.getElementById('user-input');
/*
참고로 "!"<-는 이 앞에 값이 절대 null이 아니라고 typescript에게 알려주는코드야. 
만약에 확신할수 없으면 걍 if문써버려
*/
// userInputEl.value = 'Hi there!';
// userInput null일수도 있다는 에러가 뜸. 그럴땐 끝에 !qnxdlaus ehl.

if(userInputEl) {
    (userInputEl as HTMLInputElement).value = 'Hi there!';
    // 그냥 HTMLInputElement.value하면 에러나 () 감싸줘.
}


/*
    인덱스 타입. 객체 속성 관련해서 유연한 객체를 만들때 사용해
    값저장 및 에러 관리.
*/

interface ErrorContainer {
    [prop: string] : string; //  속성이름은 string이어야해.
}

const errorBag : ErrorContainer = {
    email: 'Not a vaild email',
    userName: 'Nust start with a capital character!'
}
// 오버로딩 ㅜ