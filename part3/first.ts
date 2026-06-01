import number = require("framer-motion");
import dist = require("framer-motion");

interface person{
    name:string,
    age:number,
    gender:string,
    id?:number
}
let oj1:person={
    name:"Harshit",
    age:22,
    gender:"male",
    id:345
}
interface customer{
    name:string,
    age:number,
    balanace:number
};
const obj2:Partial<customer>={
    name:"Harshit",
    age:34,
};

const obj3:Required<customer>={
    name:"Harshit",
    age:34,
    balanace:3321
};
obj3.name="Harsh";
const obj4:Readonly<customer>={
    name:"Harshit",
    age:34,
    balanace:3321
};
interface  person1{
    name: string;
    age: number;
}[]
//Array of object
const arr:person1[]=[{name:"Harsh",age:22},{name:"suresh",age:55},{name:"ramesh",age:12}];

function greet(a:number):number
{
    console.log(a);
    return a+4;
}
console.log(greet(5));
function meet(a:number,b:string):void
{
    console.log(a,b);
}
meet(44,"Harsh");
function rate(msg:string="harsh")
{
    console.log(msg);
}
rate();
rate("Ramesh")
function Gate(msg?:string)
{
    console.log(msg || "fail");
}
Gate("yes");
Gate();

const sum=(a:number,b:number):number=>{
    return a+b;
}
console.log(sum(4,5));
// type chill=(amout:number)=>number;

function placeholder(order:number,callback:(amount:number)=>void):void{
    const amount:number=order+49;
    callback(amount);
}

placeholder(12,(amount)=>{
    console.log(amount)

})

function total(...arr:number[]){
let ans:number=0;
for(let val of arr)
{
    ans=ans+val;
}
console.log(ans);
}

total(1,2,3,4,5,6,7);
//extend keyword
interface person7275{
    name:string,
    age:number,
}
interface chid{
    birthplace:string;
}
interface Teacher extends person7275 , chid {
    id:number,
    Address:string,
}
const Ram:Teacher={
name:"Harsh",
age:33,
id:1263,
Address:"Nagpur",
birthplace:"Azamgarh"
};
console.log(Ram);
console.log(Ram.name);
