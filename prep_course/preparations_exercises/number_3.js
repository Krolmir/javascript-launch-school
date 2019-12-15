let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

//Check if the number 3 appears in these arrays
function checkForThree(array) {
  return array.includes(3);
}

console.log(checkForThree(numbers1));
console.log(checkForThree(numbers2));
console.log(checkForThree(numbers3));