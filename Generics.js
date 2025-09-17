//Generics
function identity(value) {
    return value;
}
function add(a, b) {
    return a + b;
}
console.log(add(5, 5));
console.log(add("Biraj", "Tamrakar"));
function wrapArray(item) {
    return item;
}
var numbers = wrapArray([1, 2, 3, 4, 5, 6]);
var names = wrapArray(["Ram", "shyam", "sita"]);
console.log(numbers);
console.log(names);
function wrap(value) {
    return value;
}
var nums = wrap([5, 6, 7, 8, 9]);
var bool = wrap([true, false]);
console.log(nums);
