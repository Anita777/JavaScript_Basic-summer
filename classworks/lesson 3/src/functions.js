// function privet() {
//   console.log('hello world');
// }

// privet();
// privet();

// function helloUser(name) {
//   console.log(name);
//   console.log(`hello ${name}`);
// }

// helloUser('OLEG ! ');

// const user = {
//   name: 'Egor'
// };

function qwerty(user) {
  //
  console.log(user);
}

qwerty();

function add(number1, number2) {
  //
  // console.log(number1 + number2);
  var sum = number1 + number2;
  return sum;
}

const number30 = add(10, 20);
const number70 = add(50, 20);

const createArray = function() {
  // function expression
  return ['10', 10, { name: 'da' }];
};

console.log(createArray);
console.log(createArray());

const arr = createArray();
const arr2 = ['10', 10, { name: 'da' }];

/*
Напишите функцию которая будет возвращать объект
с свойством name, а значением будет первый аргумент функции
*/

/*
Функция будет принимать 1 аргумент - ОБЪЕКТ у которого
будет свойство name
и возвращать новый объект изменяя свойство name
в большой регистр
*/

function makeObjNameBIG(obj) {}

console.log(makeObjNameBIG({ name: 'oleg' }));
// {name:'OLEG'}
