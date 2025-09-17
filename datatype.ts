// Types:string, number, boolean, null, undefined

let num:number;
num=20;
// a="Hello" (it will not accept string)
let name1: string = "Biraj";
let age: number = 21;
let active: boolean = true;
let balance:null;
let address:undefined;

//any, unknown, void, never
let a:any;
a=20;
a="Hello"
a=true;

let b:unknown;  //can take any type of input
b=20;
b="hi"
b="false"

//function

function displays(name:string):void{     //it will not return any thing
    console.log(`hello ${name}`);
}
displays("Biraj")

function errors(msg:string):never    //it will never return 
{
    throw new Error(msg)
}

function adding(a:number,b:number):number
{
    return a+b
}
console.log("sum=",adding(5,5));

type User={
    id:number;
    name:string,
    address?:string     // ?: it makes variable optional for obj 

}
let User1:User={
    id:32,
    name:"Biraj",
 }
 User1.name="King"
 User1.id=6571;   

//Arrays
let info:[number,string,string]
info=[23,"Biraj","Attarkhel"]
console.log(info);





