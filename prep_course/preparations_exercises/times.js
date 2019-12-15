function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

// Write a program that logs the value of 1! 2! 3! 4! 5! to the console
let runningTotal = 1;
for (let i = 0; i < 5; i++) {
  runningTotal = times(runningTotal, i + 1);
}