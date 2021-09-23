const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((accumulator, nextItem) => accumulator * nextItem);
};

const power = function(num1, num2) {
	let newNum = 1;
  for( let i = 1; i <= num2; i++ ){
    newNum *= num1;
  }
  return newNum;
};

const factorial = function(num) {
	if( num === 0 ) return 1;
  let product = 1;
  for( let i = 1; i <= num; i++ ){
    product *= i;
  }
  return product;
};

// using recursion
// const factorial = function(num) {
// 	if( num === 0 ) return 1;
//   return num * factorial (num-1);
// };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
