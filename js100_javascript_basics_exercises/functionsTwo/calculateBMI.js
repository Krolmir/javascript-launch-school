// bmi = weight_in_kg / height_in_m**2

function calculateBMI(height, weight) {
  return (weight / ((height / 100) ** 2)).toFixed(2);
}

console.log(calculateBMI(180, 80)); // 24.69