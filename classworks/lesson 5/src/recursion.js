function sum(number) {
  if (number < 1) {
    return number;
  }

  return sum(number - 1) + number;

  // итерация1: 4 + 5
}

console.log(sum(5));
// 5 + 4 + 3 + 2 + 1
