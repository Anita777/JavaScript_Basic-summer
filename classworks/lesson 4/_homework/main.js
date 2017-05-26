/*
 1. Напишите функцию которая принимает 2 числа 
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */

function numbersBetween(a, b) {
  let arr = [];
  for (let i = a + 1; i < b; i++) {
    arr.push(i);
  }
  return arr;
}

/*
 2. Перепешите задачу FizzBuzz, но с использованием цикла. 
 Расчет чисел должен идти до 100 
 */

// 1. FizzBuzz 3, 5, 3 && % 5

function FizzBuzz(number) {
  let str = '';

  if (number % 3 === 0) {
    str = str + 'Fizz';
  }

  if (!(number % 5)) {
    str = str + 'Buzz';
  }

  if (!str.length) {
    return number;
  }
  return str;
}

function fizzBuzz100(number) {
  for (let i = 0; i < number; i++) {
    console.log(FizzBuzz(i));
  }
}

function homework4() {
  console.log(numbersBetween(1, 5)); // 2,3,4
  console.log(numbersBetween(3, 6)); // 4,5
  console.log(numbersBetween(12, 15)); // 13,14
  console.log(numbersBetween(10, 15)); // 11, 12, 13, 14
  fizzBuzz100(15);
}

homework4();

/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */

// let arr = [1, null, undefined, 'str', {}, [], function() {}];

/*
 @@SUPER@@. Вам дан массив array, содержащий внутри объекты. 
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если тип данных NaN, 
 тогда добавляет данному объекту свойство unknownAge: true

 На основании нового массива, создайте новую функцию, которая вернет новый массив 
  содержащий все объекты содержащие свойство unknownAge:true
 */

let array = Array.from({ length: 35 }).map(
  (value, index) => (index % 2 ? { age: index + 2 } : { age: NaN })
);

// console.log(array); // [ { age:NaN }, { age:3 }, { age:NaN }, {age:5}, {age:NaN}, {age:7} ....]
// console.log(array.length); // 35

function solution(arr) {}

function returnArr(argument) {}
// returnArr(arr);
// returnArr(arr2);
