// turn the string into an array
// .pop on the array.
// join it back to a string

function removeLastChar(string) {
  let tempArray = string.split('');
  tempArray.pop();
  console.log(tempArray.join(''));
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'