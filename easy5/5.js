function negative1(number) {
  if (number < 0) {
    return number;
  } else {
    return -(number);
  }
}


console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

function negative(number) {
  return Math.abs(number) * -1;
}