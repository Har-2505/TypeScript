"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const number = require("framer-motion");
const dist = require("framer-motion");
let oj1 = {
    name: "Harshit",
    age: 22,
    gender: "male",
    id: 345
};
;
const obj2 = {
    name: "Harshit",
    age: 34,
};
const obj3 = {
    name: "Harshit",
    age: 34,
    balanace: 3321
};
obj3.name = "Harsh";
const obj4 = {
    name: "Harshit",
    age: 34,
    balanace: 3321
};
[];
//Array of object
const arr = [{ name: "Harsh", age: 22 }, { name: "suresh", age: 55 }, { name: "ramesh", age: 12 }];
function greet(a) {
    console.log(a);
    return a + 4;
}
console.log(greet(5));
function meet(a, b) {
    console.log(a, b);
}
meet(44, "Harsh");
function rate(msg = "harsh") {
    console.log(msg);
}
rate();
rate("Ramesh");
function Gate(msg) {
    console.log(msg || "fail");
}
Gate("yes");
Gate();
const sum = (a, b) => {
    return a + b;
};
console.log(sum(4, 5));
// type chill=(amout:number)=>number;
function placeholder(order, callback) {
    const amount = order + 49;
    callback(amount);
}
placeholder(12, (amount) => {
    console.log(amount);
});
function total(...arr) {
    let ans = 0;
    for (let val of arr) {
        ans = ans + val;
    }
    console.log(ans);
}
total(1, 2, 3, 4, 5, 6, 7);
const Ram = {
    name: "Harsh",
    age: 33,
    id: 1263,
    Address: "Nagpur",
    birthplace: "Azamgarh"
};
console.log(Ram);
console.log(Ram.name);
//# sourceMappingURL=first.js.map