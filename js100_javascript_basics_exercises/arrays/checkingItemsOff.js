let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.
let loopLength = groceryList.length;
for (let i = 0; i < loopLength; i++) {
  console.log(groceryList.shift());
}
// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

console.log(groceryList); // []