let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let newArray = removeNonInteger(array);

// Use filter method to weed out all of the non integers
function removeNonInteger(arr) {
  return arr.filter(value => Number.isInteger(value))
}

console.log(newArray); // => [1, 3, -4]