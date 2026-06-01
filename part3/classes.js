"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const m = require("framer-motion/m");
class person {
    constructor(n1, n2) {
        this.name = n1;
        this.age = n2;
    }
    greet() {
        console.log("Harshit welcome");
    }
}
const obj = new person("Harshit", 34);
console.log(obj);
console.log(obj.name);
obj.greet();
//public//private/proteced
class customer12 {
    constructor(name, age, balance) {
        this.name = name;
        this.age = age;
        this.balance = balance;
    }
    meet() {
        this.age = this.age + 22;
        return this.age;
    }
}
// const sriv=new customer12("harsh",32,3333);
// console.log(sriv.name="harsir");
// // console.log(sriv.age=1);
// console.log(sriv.meet());
class Manager extends customer12 {
    constructor(salary, name, age, balance) {
        super(name, age, balance); // Call parent constructor
        this.salary = salary;
    }
    sir() {
        console.log("hello");
    }
    meet() {
        //   console.log(this.age);
        console.log(this.balance);
        return 10;
    }
}
const obj10 = new Manager(122223, "Harsh", 12, 1233);
console.log(obj10.meet());
console.log(obj10.name);
// console.log(obj10.age)
function value(a) {
    return a;
}
console.log(value(10));
console.log(value([12, 33, 4, 4]));
//# sourceMappingURL=classes.js.map