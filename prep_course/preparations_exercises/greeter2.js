function getName(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name;
}

let creatingName = (fName, lName) => {
  return fName + ' ' + lName;
}

let firstName = getName('What is your First Name? ');
let lastName = getName('What is your Last Name? ');

console.log(`Hello ${creatingName(firstName, lastName)}!`);
