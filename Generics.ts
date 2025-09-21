//Generics
 function identity<T>(value:T):T{
    return value;
 }

function add<t>(a:t,b:t)     //the function can take both string and number as input
{
    return (a as any)+(b as any)
}

console.log(add<number>(5,5));
console.log(add<string>("Biraj","Tamrakar"));


function wrapArray<t>(item:t[]):t[]
{
    return item
}
let numbers=wrapArray<number>([1,2,3,4,5,6])
let names=wrapArray<string>(["Ram","shyam","sita"])
console.log(numbers);
console.log(names); 


function wrap<t>(value:t[]):t[]
{
    return value
}
let nums=wrap<number>([5,6,7,8,9])
let bool=wrap<boolean>([true,false])
console.log(nums);





