"use strict";
var _a;
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
function add3(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result3 = add3('BBJina', 'Schwars');
result3.split(' ');
const fetchUserData = {
    id: 'u1',
    name: 'Jina',
    job: { title: 'CEO', description: 'My own company!' }
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput2 = null;
const storedData = userInput2 !== null && userInput2 !== void 0 ? userInput2 : 'Default';
console.log(storedData);
function printEmployeeInformaton(emp) {
    console.log('Name: ', emp.name);
    if ('privileges' in emp) {
        console.log('Privileges:', emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('startDate', emp.startDate);
    }
}
printEmployeeInformaton({ name: 'Jina', startDate: new Date() });
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck!');
    }
    loadCargo(amount) {
        console.log('Loading cargo...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(5);
    }
}
useVehicle(v1);
useVehicle(v2);
const userInputEl = document.getElementById('user-input');
if (userInputEl) {
    userInputEl.value = 'Hi there!';
}
const errorBag = {
    email: 'Not a vaild email',
    userName: 'Nust start with a capital character!'
};
