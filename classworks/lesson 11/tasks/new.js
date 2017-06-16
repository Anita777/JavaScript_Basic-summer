'use strict';

/*
* Создать конструктор у который будет создавать 
новый объект
*
myArray = параметр1 : Array
cars = параметр2    : Object
name = параметр3    : string
* */

// экземпляр

function Random(myArray, cars, name) {
  // если одно из свойств не передается мы его не создаем
  if (Array.isArray(myArray)) {
    this.myArray = myArray;
  }
  if (cars) {
    this.cars = cars;
  }
  if (name) {
    this.name = name;
  }
}

var portal = new Random(null, { model: 'bmw' }, 'jetty');
var portal2 = new Random(123, 'v12v3123', {});

// -------------------
// Создайте функцию конструктор, которая в зависимости
// от количества параметров создавать объект
// с разным количеством свойств

// --------------
// Создайте функцию конструктор, которая иметь приватный счетчик,
// данный счетчик можно будет увеличить только вызвав метод counter()
// --------------

function Counter() {
  let counter = 0;
  this.addCounter = function() {
    console.log(counter++);
  };
}

var myCounter = new Counter();