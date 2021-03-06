-
00*'use strict';

// Legolas Task !xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxc xxxxxxxxxddxxxxxxxxxxxxxxxxxxxxx/ TASK 1
// Отобразите достаточно ли у developers навыков ?
// Отобразите всех разработчиков и вызовете у каждого
// разработчика метод goodDev --

/*
 Количество требований к разработчику совпадает с его навыками.
 * Используйте в задаче this
 * */

let developer1 = {
  skills: ['JavaScript', 'linux', 'html', 'OOP', 'Node.js'],
  requires: ['Node.js', 'JavaScript', 'OOP'],
  // getSkills: getSkills,
  goodDev: goodDev
};
let developer2 = {
  experience: [
    { technology: 'java' },
    { technology: 'c++' },
    { technology: 'aws' },
    { technology: 'docker' }
  ],
  requires: ['java', 'json', 'c++', 'JavaScript'],
  // getSkills: getSkills,
  goodDev: goodDev
};

function goodDev(dev) {}

let developers = [developer1, developer2];
developers.forEach((dev, index) => {
  console.log(`developer ${index + 1}`);
  dev.goodDev();
});
// developer 1
// required: Node.js ... success
// required: JavaScript ... success
// required: OOP ... success
// ---

// developer 2
// required: json ... fail
// required: JavaScript ... success
// required: Java ... success
// required: OOP ... success

/*
 *
 * TASK 2
 *
 * Создайте объект содержащий коллекцию элементов с одинаковыми
 * свойстами и разными значениями!
 * Напишите функцию принимает 1 аргумент сортирует объект по 
 * переданному значению
 * 
 * При вызове функции используйте this
 *
 * */

let myObject = {
  database: [
    { age: 100, name: 'b' },
    { age: 15, name: 'c' },
    { age: 25, name: 'a' }
  ]
};

// {age:15, name:'c'}, {age:25, name:'a'} {age:100, name:'b'}

myObject.myFilter = function(param) {
  return [
    ...this.database.sort((a, b) => {
      return a[param] > b[param];
    })
  ];
};

console.log(myObject.myFilter('age'));
const random = () => {};
console.log(myObject.myFilter('name'));

// {age:25, name:a}, {age:100, name: b} ...

/*
 * TASK 3
 *
 * Перепишите homework 5 с использованием методов массивов и
 * => arrow functions
 * 
*/

////// @ TODO -- LVL Strong Junior
/*
 *
 * TASK 1
 * Напишите функцию которая принимает 3 аргумента:*
 *
 *  - объект к которому привязывается метод
 *  - Имя свойства с которым связывается метод
 *  - Объявление привязываемого метода( функция )
 *
 *  Если количество аргументов у функции fn совпадает с переданными
 *  параметрами тогда сохраняет метод в замыкании
 *  и привязывает функцию к методу объекта
 *
 *  при вызове одного и того же метода с разным количеством аргументов, 
 *  должно давать различный результат
 *
 * */

let junior = {};

// fn.length == arguments.length

function addMethod(object, name, fn) {
  let method = object[name];

  object[name] = function() {
    if (fn.length === arguments.length) {
      fn.apply(this, arguments);
    } else if (typeof method === 'function') {
      method.apply(this, arguments);
    }
  };
}

addMethod(junior, 'ok', function() {
  console.log('zero arguments');
});
addMethod(junior, 'ok', function(one) {
  console.log('one arguments');
});
addMethod(junior, 'ok', function(one, two) {
  console.log('two arguments');
});
addMethod(junior, 'ok', function(one, two, three) {
  console.log('three arguments');
});

junior.ok(1, 2, 3); // 'three arguments'
junior.ok(1, 2); // 'two arguments'
junior.ok(1); //'one arguments'
junior.ok(); //'zero arguments'
