import m = require("framer-motion/m");

class person{
    name:string;
    age:number;
    constructor(n1:string,n2:number)
    {
        this.name=n1;
        this.age=n2;
    }
    greet():void{
        console.log("Harshit welcome");
    }
}
const obj=new person("Harshit",34);

console.log(obj);

console.log(obj.name);

obj.greet();
//public//private/proteced

class customer12{
   public name:string;
   private age:number;
   protected balance:number;
    constructor(name:string,age:number , balance:number)
    {
        this.name=name;
        this.age=age;
        this.balance=balance;
    }
     meet():number{
        this.age=this.age+22;
        return this.age;
    }
}
// const sriv=new customer12("harsh",32,3333);
// console.log(sriv.name="harsir");
// // console.log(sriv.age=1);
// console.log(sriv.meet());

class Manager extends customer12 {
    salary: number;

    constructor(
        salary: number,
        name: string,
        age: number,
        balance: number
    ) {
        super(name, age, balance); // Call parent constructor
        this.salary = salary;
    }
    sir():void{
        console.log("hello")
    }
      meet():number{
    //   console.log(this.age);
      console.log(this.balance);
      return 10;
    }
}
const obj10=new Manager(122223,"Harsh",12,1233);
console.log(obj10.meet());
console.log(obj10.name);
// console.log(obj10.age)

function value <T>(a:T):T{
    return a;
}
console.log(value(10));
console.log(value([12,33,4,4]));