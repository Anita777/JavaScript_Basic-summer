let number = 0;

number = number + 1;
number += 1;
number++;

// console.log(++number);

number *= 25;

// console.log(number);

function aOrB(a, b) {
  return a > b ? a : b;
}

// console.log(aOrB(10, 5));
// console.log(aOrB(10, 100));

// Напишите функцию, которая принимает 2 аргумента
// 1 аргумент МАССИВ ИЛИ ОБЪЕКТ
// 2 аргумент число

// Если у нас объект, тогда, найти в этом объекте массив
// И найти число, которое больше переданного второго параметра

// Если массив, тогда найти в этом массиве, число больше второго аргумента
// отобразить данное число и завершить циклы

const obj = {
  name: 'qwerty',
  qwerty: [1, 2, 310, 20, 10],
  qwerty2: [1, 2, 310, 20, 10]
};

for (let key in obj) {
}
const arr = [1, 2, 500, 310, 20, 75];

const task1 = function(data, number) {
  // 2. Array.isArray(data)
  if (Array.isArray(data)) {
    // всегда массив
    for (let i = 0; i < data.length; i++) {
      let elem = data[i];
      console.log(elem);
      if (elem > number) {
        console.log(elem);
        return;
      }
    }
  } else {
    // Всегда объект
    for (let key in data) {
      let elemInsideObject = obj[key];
      if (Array.isArray(elemInsideObject)) {
        for (let i = 0; i < elemInsideObject.length; i++) {
          let elem = elemInsideObject[i];
          if (elem > number) {
            console.log(elem);
            return;
          }
        }
      }
      console.log('privet');
    }
  }
};

// упростить

task1(obj, 200);
task1(arr, 55);

function add(x, y) {
  return x + y;
}

function double(number) {
  return number * 2;
}
