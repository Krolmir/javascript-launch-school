let rlSync = require('readline-sync');
let firstNumber = rlSync.question('Enter the first number: ');
let secondNumber = rlSync.question('Enter the second number: ');

function multiplyTwoNumbers(fNum, sNum) {
  return fNum * sNum;
}

console.log(`${firstNumber} * ${secondNumber} = ${multiplyTwoNumbers(firstNumber
, secondNumber)}`);