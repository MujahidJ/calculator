var num1;
var num2;
var Addition;
var Subtraction;
var Multiplication;
var Division;
var operator;
var ans;

console.log('Hello and Welcome!\n This is a javascript console calculator.');

console.log("[1] Addition");
console.log("[2] Subtraction");
console.log("[3] Multiplication");
console.log("[4] Division");

operator = prompt("\nEnter operator number above: ");

num1 = prompt("Enter first number: ");
num2 = prompt("Enter second number: ");

if (operator === '[1]'){
    console.log(num1 + num2);
}else if(operator === '[2]'){
    console.log(num1 - num2);
}else if(operator === '[3]'){
    console.log(num1 * num2);
}else if(operator === '[4]'){
    console.log(num1 / num2);
}else {
    console.log("Wrong Input!")
}
