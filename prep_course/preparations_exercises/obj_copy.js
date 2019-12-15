let objToCopy = {
  foo: 1,
  bar: 2,
};

// copying an object. Second paramter = key value pairs to be copied
function copyObj(obj, array = []) {
  let resultObject = {};
  if (array.length === 0) {
    resultObject = obj;
  } else {
    resultObject = {};
    array.forEach(key => {
      // need to copy each key pair element to resultObject
      resultObject[key] = obj[key];
    });
  }
  return resultObject;
}

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined
