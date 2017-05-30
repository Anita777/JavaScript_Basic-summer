'use strict';

/*
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 .сoncat();
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];
let arr2 = [
  'a',
  0,
  0,
  'b',
  null,
  'c',
  'd',
  0,
  1,
  false,
  0,
  1,
  0,
  3,
  [],
  0,
  1,
  9,
  0,
  0,
  {},
  0,
  0,
  9
];
function moveZeroToEnd(arr) {
  let zeros = [];
  let myArray = [];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    if (elem === 0) {
      zeros.push(elem);
    } else {
      myArray.push(elem);
    }
  }

  return myArray.concat(zeros);
}

function moveZeroToEnd2(arr) {
  let arr2 = [];

  for (let i = 0; i < arr.length; ) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      // [1, 2, 3]
      //  0  1  2
      // [1, 3]
      //  0  1
      arr2.push(0);
      continue;
    }
    i++;
  }

  let conc = arr.concat(arr2);
  console.log(conc);
}

moveZeroToEnd(arr1);

// console.log(moveZeroToEnd(arr2));
console.log(arr2);
console.log(moveZeroToEnd2(arr2));

/*
 2. Верните сумму двух найменьших чисел в массиве
 
 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10
 
 */

function minimalNumber(arr) {
  var arr2 = arr.sort();
  return arr2[0] + arr2[1];
}

/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */

function nameShuffler(str) {
  return str.split(' ').reverse().join(' ');
}

/*
 // !
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */

function capMe(arr) {
  let myArr = [];
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i].toLowerCase();
    myArr.push(elem[0].toUpperCase() + elem.slice(1));
    // arr[i] = elem[0].toUpperCase() + elem.slice(1);
  }
  return myArr;
}

//@SUPER
/*

 1. Найдите число отсутствующее в заданной последовательности

 example:
  [1,3,5,9] => 7 (9-1) / 4 == 2
  [0,8,16,32] => 24
  [4, 6, 8, 10] => 2 // число сначала
  [0,16,24,32] => 8  
 */

function random(arr) {
  let step = (arr[arr.length - 1] - arr[0]) / arr.length;
}

random([1, 3, 5, 9]);
random([0, 8, 16, 32]);
random([0, 16, 24, 32]);
random([4, 6, 8, 10]);

/*
 2. Напишите функция которая преобразовывает/открывает скобки всех 
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов
 
 example:

  [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
  [25,10,[10,[15]]] => [25,10,10,15]
 
 */

function openBraces(arr) {}
