let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];

console.log(myArray.filter(num => num % 2 === 0));

myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

let result = [];
myArray.forEach(arr => {
  result.push((arr.filter(num => num % 2 === 0)));
});

console.log(result);

myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let newArray = (myArray.map(num => {
  if (num % 2 !== 0) {
    return 'odd';
  } else {
    return 'even'
  }
}));

console.log(newArray);