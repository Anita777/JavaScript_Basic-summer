var userAuth = { name: 'logged' };
var isLogged = {
  showName(programmingLanguage, nextLanguage) {
    return this.name
  }
};

var realUser = {
  name: 'Santa',
  lastName: 'Claus'
};














userAuth.__proto__ = realUser;
realUser.__proto__ = isLogged;


//console.log(userAuth.lastName); // Claus
//console.log(userAuth.showName('JS')); // logged
//console.log(realUser.showName('C++')); // Santa


//console.log(realUser.showName.apply(userAuth, ['JS', 'C++'])); // logged ! ! !
//console.log(realUser.showName.call(userAuth, 'JS', 'C++')); // logged ! ! !
//var xxx = realUser.showName.bind(userAuth, 'JS');
//console.log(xxx);
/*
 *
 * apply, call - принимает первым аргументом объект, который
 * мы хотим установить в качестве контекста вызова функции
 *
 * call - принимает аргументы в вызываемую функцию, через
 * запятую
 * apply - принимает аргументы в виде массива
 *
 * СРАЗУ ЖЕ ВЫЗЫВАЮТ ФУНКЦИЮ
 *
 * bind - привязывает определенный объект к функции
 * НО НЕ ВЫЗЫВАЕТ ЕЕ
 *
 *
 *
 *
 *
 * */

/*
 *
 *
 * */

function MagicCreatures(type) {
  let counter = 0;

  this.add = function() {
    return counter++;
  };

  this.type = type;
}

MagicCreatures.prototype.doMagic = function() {
  if (this.castSpell) {
    this.castSpell()
  } else {
    console.log('Hello Human!')
  }
};

function Moroz(type) {
  MagicCreatures.call(this, type);
  this.castSpell = () => {
    console.log('YO HO HO');
  }
}

Moroz.prototype = Object.create(MagicCreatures.prototype);
//Moroz.prototype = new MagicCreature();
//Moroz.prototype = new MagicCreatures();
//Moroz.prototype = {
//  hello: 'Hello easy JavaScript'
//};

function Human(type, name) {
  MagicCreatures.call(this, type);

  let hello = 'World';

  this.qwerty = () => hello;

  this.name = name;
}

Human.prototype = Object.create(MagicCreatures.prototype);

var Kentaur = new MagicCreatures('Kentaur');
var santaClaus = new Moroz('Moroz');
var dedMoroz = new Moroz('Moroz');
var Jessica = new Human('Human');
var Jack = new Human('Human');

dedMoroz.doMagic();

/*
 * Создать функцию конструктор Human
 *
 *  type:string
 *  name:string
 *
 * Дочерние классы (Экземпляры) - должны уметь вызвать функцию
 * doMagic
 *
 * */


//function SecretCounter() {
//  let counter = 0;
//}
//
//
//function User() {
//  this.name = name;
//}
//
//User.prototype = Object.create(SecretCounter.prototype);
//
//var bobHero = new User();
//var bobHero = new User();


/*
 * Функцию конструктор Computer
 *
 *  start(function)
 *  stop
 *
 *  методы нужно чейнить
 *
 * */

var myPC = new Computer().start(function() {
  // В момент срабатывания метода stop, вызвать эту функцию

  console.log('Start')
}).stop();













