/* function factorial(num) {
  // Factorial example 5! is 1x2x3x4x5
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}
*/

function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return factorial(num - 1) * num;
  }
}

console.log(factorial(0));     // => 1
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320