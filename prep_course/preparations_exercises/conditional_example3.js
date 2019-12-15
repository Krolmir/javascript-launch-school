function numberRange(num) {
  if (num >= 0 && num <= 50) {
    console.log(num + ' is between 0 and 50.');
  } else if (num >= 51 && num <= 100) {
    console.log(num + ' is between 51 and 100.');
  } else if (num >= 101) {
    console.log(num + ' is greater than 100.');
  } else {
    console.log(num + ' is less than 0.');
  }
}

numberRange(25);   // '25 is between 0 and 50'
numberRange(75);   // '75 is between 51 and 100'
numberRange(125);  // '125 is greater than 100'
numberRange(-25);  // '-25 is less than 0'