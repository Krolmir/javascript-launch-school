let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// Use map and filter to determine the length of all the elements in an array
// discard even values
function oddLengths(array) {
  let lengthArray = array.map(str => str.length);
  return lengthArray.filter(value => value % 2 !== 0);
};

console.log(oddLengths(arr)); // => [1, 5, 3]