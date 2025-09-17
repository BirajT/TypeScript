// Types:string, number, boolean, null, undefined
var num;
num = 20;
// a="Hello" (it will not accept string)
var name1 = "Biraj";
var age = 21;
var active = true;
var balance;
var address;
//any, unknown, void, never
var a;
a = 20;
a = "Hello";
a = true;
var b; //can take any type of input
b = 20;
b = "hi";
b = "false";
//function
function displays(name) {
    console.log("hello ".concat(name));
}
displays("Biraj");
function errors(msg) {
    throw new Error(msg);
}
function adding(a, b) {
    return a + b;
}
console.log("sum=", adding(5, 5));
var User1 = {
    id: 32,
    name: "Biraj",
};
User1.name = "King";
User1.id = 6571;
//Arrays
var info;
info = [23, "Biraj", "Attarkhel"];
console.log(info);
