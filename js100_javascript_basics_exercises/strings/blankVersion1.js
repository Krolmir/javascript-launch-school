function isBlank(string) {
  if (string.trim().length < 1) {
    return true;
  } else {
    return false;
  }
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true