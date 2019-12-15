function stringLength (string) {
  if (string.length > 10) {
    // Output all caps
    console.log(string.toUpperCase());
  } else {
    // Output original String
    console.log(string)
  }
}

let prompt = require('readline-sync');

stringLength(prompt.question('Input a string: '));