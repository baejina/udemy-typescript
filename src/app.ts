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

// 아래가 유니온 타입.
type Combinable2 = string | number;
type Numberic = number | boolean;

// 교차 연산자. 여러타입을 교차 시키는데 쓸 수 있고 교차타입들에 공통적으로 있는 타입을 교차 시키는켜.
// 아래 두개 공통적으로 있는 number가 교차되, 
type Universal = Combinable2 | Numberic;
 
