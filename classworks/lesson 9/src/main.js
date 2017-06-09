'use strict';

function showThis() {
  this.react = 'my super code !';
  // undefined.react = ''
}

showThis();

// es6 Object

let myObject = {
  // очень долго писать !
  es5function: function() {
    // невероятно медленно
    // ie + firefox 100 раз медленее
    // for(let i =0 ...)
    for (let key in myObject) {
      console.log(key);
      console.log(myObject[key]);
    }
  },
  // отобразите все значения данного объекта
  es6function() {
    Object.keys(myObject).forEach(function(elem) {
      console.log(myObject[elem]);
    });
  },
  length: 10
};

// myObject.es6function();

let sum = function(a, b) {
  return a + b;
};

let sumES6 = (a, b) => {
  console.log('SUM ES6 ->');
  return a + b;
};

let doubleES3 = () => {
  return a;
};

let double = a => a * 2;
// console.log(double(50));

// напишите функцию, которая принимает 1 число
// и возвращает данное число умноженное на 2 !

// console.log(sum(10, 20));
// console.log(sumES6(10, 20));

var myOffers = [1000, 1500, 2000, 2500, 3500];

// > 1500 выберите все значения больше 1500
// используйте функцию стрелку

// var mySalary = arr => arr.filter(elem => elem > 1500);

// var sumArguments = (...args) =>
//   args.reduce((prevValue, value) => (prevValue += value));

// console.log(sumArguments(10, 20, 30));

var cakes = 'pizza';

function showFriends() {
  console.log(this.friends);
}

var telephoneBook = {
  friends: ['торт', 'мороженное', 'пицца'],
  showFriends: showFriends
};
var telephoneBook2 = {
  friends: ['яблоко', 'apple', 'Апельсин'],
  helloFriends: showFriends
};

// DRY - Don't Repeat your self
// добавьте функции которые покажут моих друзей

telephoneBook.showFriends(); // ['торт', 'мороженное', 'пицца']
telephoneBook2.helloFriends(); // ['яблоко', 'apple', 'Апельсин']

const user = {
  name: 'Jack',
  fruits: 'mango, kivi, banan',
  friends: [
    {
      name: 'Legolas',
      fruits: 'apple'
    },
    {
      name: 'Gendalf',
      fruits: 'lime'
    },
    {
      name: 'Frodo Baggins',
      fruits: 'Хлебцы это прелесть'
    }
  ],
  showFruits() {
    console.log(this.fruits);
  },
  // какие друг любит фрукты
  // используйте так же уже существующий метод showFruits
};

// функцию которая покажет какие фрукты любит джек
