const helloString = 'hello';
const iAmString = 'world';

const es6String = `"hello"' ${iAmString}`; //ё;

const helloWorld = `hello`;

// Сделайте переменную в которой значения будет отображаться
// одно на одной строке, а второй на следующей

let myString = 'oleg';
// let myName = 'oLEG';
// let myNameSmall = myName.toLowerCase();
let someService = 'YouTube';

// console.log(myString.toUpperCase(), myString);
// console.log(myNameSmall.toUpperCase().toLowerCase().length);
// console.log(someService.slice(4, 3));

// myString.length -- свойство
// myString.toUpperCase() -- метод

// hello
// world

const myName = 'oLEG';

// console(myName); // Oleg

// 1. Получить первую букву
let o = myName[0];
// 2. Сделать эту букву в верхнем регистре
o = o.toUpperCase();
// 3. Получить оставшиеся символы
// let xxx = myName.slice(1);
// 4. Оставшиеся символы в нижнем регистре
// 5. Соединить все части

// console.log(o + xxx.toLowerCase());

const hi = 'privet, kak, dela';

let qwerty = hi.replace('dela', 'ti');

// console.log(hi.includes('kak'));
const PI = 3.14;
// console.log(PI >= 3.14);

var xxx = '50';

// console.log(xxx == 50);
// console.log(undefined == '')

// console.log(15%3);
// 15-3 = 12
// 12-3 = 9
// 9-3  = 6
// 6-3  = 3
// 3-3  = 0

const year2017 = 2017;
// console.log(year2017%2000);
// console.log(!1 == false);

/*
 Отобразите год без тысячей
*/

var someArray = [100, 200, 300, 400];
// console.log(Math.max(someArray));

Math.max(...[50, 10, 20]); // 50, 10, 20
Math.max(50, 10, 20);

console.log(typeof 'privet' == 'string');
console.log(typeof 50 == 'number');
console.log(typeof true == 'boolean');
console.log(typeof {} == 'object');
console.log(typeof null == 'object'); // bag js
console.log(typeof [] == 'object');
console.log(typeof NaN);

