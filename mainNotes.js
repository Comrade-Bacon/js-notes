
console.log('Hello Word!');


// you do not have to specify data types for varibles in javascript.
// you can also change the data type of a verialbe by simply seting the veriable to have a value of a difrent data type.

const NUM1 = 1; // for constants the keyword is const and you use all caps in the variable name

// let is a newer keyword, it acts like a traditonal vaariable
let num2 = 2;
let num3 = 3.3;
let str = 'Hello World!';
let bool = true;

// var is the original keyword, ignores scope
var num4 = 4;
var num5 = 5.5;
var str2 = "What's Up World?";
let bool2 = false;

// print numbers 0 thrugh 12
for (let i = 0; i <= 12; i ++) {
  console.log(i);
}

if (true == true) {
  console.log('indeed');
}

console.log(13 % 5); // % = get remainder

// a for loop, but its a while loop!
let i = 0;
while(true) {
  i ++;
  if (i > 10) {
    break; // break exits the loop and does not procede with code in the scope of the local loop
  }
  console.log('yes ' + i);
}

