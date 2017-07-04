/* 0 Алгоритмы
 Реализуйте функцию которая будет превращать трехмерный массив 
 в двухмерный
 а если массив двухмерный, тогда в трехмерный массив

 // solution([ [1, 'a'],[2, 'b'],[3, 'c'] ]) => [[1, 2, 3],[a, b, c]]
 // solution([ [1, 3, 5],[2, 4, 6] ]) => [ [1, 2],[3, 4],[5, 6] ]
 // solution([[]]) => []
 

 ИСПОЛЬЗУЙТЕ МЕТОДЫ МАССИВОВ !
 */

solution2([[1, 3, 5], [2, 4, 6]]);
solution2([[1, 'a'], [2, 'b'], [3, 'c']]);

/*
 Визуализируйте массив, если в коллекции есть свойство children,
  тогда создайте вложенный лист
 name - свойство h1
 children ul->li

 Используйте innerHTML

 */

const navigation = [
  { name: 'Главная' },
  {
    name: 'Каталог',
    children: [
      {
        name: 'Компьютеры',
        children: [
          { name: 'Ноутбуки' },
          { name: 'Планшеты' }
        ]
      }
    ]
  },
  { name: 'Профиль' }
];

const visualArray = arr => {};

/*  ПРИЛОЖЕНИЕ  */
// 1. Форкните репозиторий Саши.
// Добавьте скрипт который будет рисовать всю страницу с таблицей.
// https://github.com/aleksandra-maslennikova/my-phone-book
// удалите на всех страницах bootstrap.js, jquery.js
// по максимуму

// 2. Напишите функцию, которая будет получать последнего родителя
// у элемента, но не body

// 3. При нажатии на кнопку если были выбраны правильные ответы,
// отображайте "ПРАВИЛЬНО" или не правильно
// или отображайте значек X или галочку, возле вопроса

// Инкапсуляция
// Полиморфизм
// Наследование

// new !
class Apple {
  constructor(name) {
    this.name = name;
    let beep = 'be beep ';
    this.showBeep = secret => {
      if (secret === '3000') {
        return beep + beep;
      }
      return 'вы незнаете секрет'
    };
  }

  sayMeow() {
    console.log(this.name, 'says', 'IM TREE CANT SAY');
  }

  render() {
    console.log('<h1></h1>');
  }
}

class RedApple extends Apple {
  constructor(name) {
    super(name);
    this.counter = 0;
  }

  sayMeow() {
    this.counter = this.counter + 1;
    super.sayMeow(qw);
  }
}

function Apple2(name) {
  this.name = name;
  // private
  let myName = 'sadqvwqwe';

  this.showName = () => {
    console.log(myName);
  };
  // защищенные
  this._qwert = () => {};
}

const greenApple = new Apple2('green');
// {name:'green'}
const redApple = new Apple('red');
redApple.sayMeow();
const redApple2 = new RedApple('purple');
redApple2.sayMeow();
// {name:'red'}
