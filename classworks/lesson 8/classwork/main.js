//function one(number1, number2, fn) {
//  console.log(fn(number1, number2))
//}
//
//function sumNumber(a, b) {
//  return a + b
//}
//
//function minusNumbers(a, b) {
//  return a - b
//}
//
//console.log(sumNumber(3, 4));
//one(3, 4, function(a, b) {
//  return a + b
//}); // 7
//one(3, 4, function(a, b) {
//  return a + b
//}); // 7
//one(3, 4, minusNumbers, 25, 50, 60, 100); // -1
//
//one.array = [];
//
//one.array.push(150);

//let arr = [100, 200, 300];
//let pseudoArray = {};
//
//pseudoArray['length'] = 3;
//
//pseudoArray[0] = 100;
//pseudoArray[1] = 200;
//pseudoArray[2] = 300;
//
//
//for (let i = 0; i < pseudoArray.length; i++) {
//  console.log(pseudoArray[i])
//}

// function sum(...args) {
//   let args = [].slice.apply(arguments);
//   //console.log(args);
//   //console.log(arguments);
//   return args.reduce(function(a, b) {
//     return a + b;
//   });
// }

// console.log(sum(1, 2, 3)); //6
// sum(10, 50, 40); //100

// напишите функцию, Которая принимает 1 аргумент
// это массив или объект
// если массив тогда отобразите все значения как строку
// value1 - value2 - value3
// если объект, отобразите все свойства в консоле

// switch - case

function showSomething(data) {
  let isArray = Array.isArray(data);

  switch (isArray) {
    case true:
      console.log('ARRAY!: ', data.join('-'));
      break;
    case false:
      console.group('start');
      for (let key in data) {
        console.log(key);
      }
      console.groupEnd('start');
      break;
  }
}

showSomething([1, 200]);
showSomething({ age: 28, skills: [] });
