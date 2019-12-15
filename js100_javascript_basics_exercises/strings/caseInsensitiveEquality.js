let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

function stringCompare(str1, str2) {
  if (str1.toLowerCase() === str2.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(stringCompare(string1, string2));
console.log(stringCompare(string1, string3));
console.log(stringCompare(string3, string2));