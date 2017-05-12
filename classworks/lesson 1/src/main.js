// var name = 'Oleg';

// let privet = 'Hello world';

// const PI = 3.14;
// const age = 28;
// const salary = 1000 + 2000;

// // console.log(salary);
// var isJSDEV = true;

// const xxx = null;
// const angular = undefined;
// const someDevSalary = NaN; // Not a number

// console.log(xxx);

// ваш возраст
// вашу ЗП как JS разработчика
// Ваше имя
// что все это правда

// name = 'Easy code teacher';
// PI = 100;

// console.log(PI, privet, name);

const user = {
  name: 'Oleg',
  age: 28,
  salary: Infinity,
  dev: true
};

/*
Создайте объект, внутри данного объекта, должен быть другой объект!
В внутреннем объекте, создайте ключ/параметр 'Status', с значением
'easy code student'

Отобразите в консоле, второй объект
и отобразите в консоле значение второго объекта
*/

const projects = {
  xxx: {
    name: 'React is rule'
  }
};

console.log(projects.xxx);
console.log(projects.xxx.name);

console.log(user);

let someFrameworks = [projects, 'Angular', 'React', 'Ember', 'Node.js'];
console.log(someFrameworks);
