// setTimeout(function() {
//   console.log('first');
// }, 5);

setTimeout(function() {
  console.log('www');
}, 0);
console.log('next');

setTimeout(function() {
  console.log('NEXT TIMER !');
}, 1000);

console.time('start');
// мы знаем что тут 3 секунды
// for (let i = 0; i <= 1000000000; i++) {
//   if (i === 10000) {
//     console.log('something');
//   }
// }

console.timeEnd('start');
console.log('yahoo');

var someTimer = setInterval(() => {
  console.log('privet kak dela');
}, 1000);




/*



*/



//let numberOne = null;
//let add = (a, b) => {
//  console.log(a + b);
//  return a + b;
//};
//
//setTimeout(function() {
//  numberOne = 100;
//  this.x = 100;
//}, 1000);
//
//let errors = [];
//try {
//
//} catch (e) {
//  errors.push(e);
//  console.log('You have an error');
//} finally {
//  console.log(errors)
//}
//let xxx = (val => {console.log(val)})(val);

//var myArray = [1, 2, 3];
//
//
//var arr = [];
//for (let i = 0; i < 10; i++) {
//  (function() {
//    arr[i] = function() {
//      console.log(i)
//    }
//  })()
//}
//
//arr[5]()
//arr[4]()
//fn(1)(2) //3

//var
//
//
//
//
//function Browser(url, name) {
//  this.url = url;
//  this.name = name;
//}
