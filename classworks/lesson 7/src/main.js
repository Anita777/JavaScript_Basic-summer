// let outerValue = 'ninja';

// let later;

// function outerFn() {
//   let innerValue = 'JS';

//   function innerFunction(param) {
//     console.log(outerValue);
//     console.log(innerValue);
//   }
//   later = innerFunction;
// }

// outerFn();

// later();

function helloUser(name) {
  // return [10, 20, 50];

  return function() {
    console.log('privet', name);
  };
}

// privet %ваше имя%
// передать в параметрах ваше имя

const user = helloUser('Oleg')();

// сделайте функцию
// которая будет складывать 2 числа
function add(number1) {
  return function(number2) {
    return number1 + number2;
  };
}
const number15 = add(5)(10);
console.log(number15); // 15

function counter() {
  // что должна делать - возвращать объект
  // у объекта должен быть метод add
  // что должен делать метод ?
  // показывать в консоле цифру на 1 больше предыдущей
}

const plusOne = counter(); // {add:function(){}}

plusOne.add()
// 1
plusOne.add()
// 2
plusOne.add()
// 3

