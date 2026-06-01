import dist = require("framer-motion");

let num:number=10;
let x=10;

// x="Harshit";
let money:any;
money="Harshit";
money=112;
console.log(money.toUpperCase());

let val2:unknown;
val2="Harshit";
val2=2345;
if(typeof val2=='number')
console.log(val2);

let arr:number[]=[1,2,3,4,5,6];
let arr2:(string | number)[]=[2,3,4,5,6,"Harshit"];
arr2.push(338);
let arr3:(string | number | boolean )[]=[1,2,3,4,"gdgd",true];
let tuple:[number,string]=[12,"Harshit"];
let surname="Srivastav";

// surname=122;
let obj1:{name:string ,age:number,Course:string}={
    name:"Harshit",
    age:22,
    Course:"B.TECH"
};
let obj2:{name:string ,age:number,Course:string};
obj2={
    name:"Harshit",
    age:22,
    Course:"B.TECH"
};
type customer={name:string,age:number,course:string};
// let c1:customer={
//     name:"Harsh",
//     age:33,
//     course:"Hindi"
// }
let c1:customer;
c1={
    name:"Harsh",
    age:33,
    course:"Hindi"
}
interface admin{
    name:string,
    age:number,
    position:string
}
interface admin{
    id:number
}
let c2:admin={
    name:"Harshit",
    age:12,
    position:"worker",
    id:223
};