let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj['qux'] = 3;
console.log(myObj);

Object.keys(myObj).forEach(function(key) {
  console.log(key);
});

for (key in myObj) {
  console.log(key);
}