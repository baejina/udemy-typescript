"use strict";
class Person {
    constructor(n = 'baejina') {
        this.age = 30;
        if (n)
            this.name = n;
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('hi');
        }
    }
}
let user1;
user1 = new Person();
user1.greet('Hi there - I am');
console.log(user1);
let add2;
add2 = (n1, n2) => { return n1 + n2; };
