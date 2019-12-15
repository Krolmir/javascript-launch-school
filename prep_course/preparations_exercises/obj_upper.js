let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let newArray = Object.keys(obj);

console.log(obj);
console.log(newArray.map(key => key.toUpperCase()));