let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
let newObject = {};

nestedArray.forEach(function(keyValuePair) {
  newObject[keyValuePair[0]] = keyValuePair[1];
});

console.log(newObject);
// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }