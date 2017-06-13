// var JSONProduct = `{
//   "name": "iPhone 8s",
//   "vendors":["citrus","rozetka","mobilluck"],
//   "application":{
//     "name":"appStore"
//   },
//   "price":800,
//   "sold":false,
//   "tested":null
// }`

// JSON у JSON есть строка
// так же есть вложенный объект
// и вложенный объект, содержит массив

// функция конструктор
// КЛАСС !
function User(name) {}

function add(a, b) {
  this.a = a;
  this.b = b;
  return a + b;
}

function City() {}

let userOleg = new User('Oleg');
let random = new City();
let userPetr = new User('Petr');

/*
Мы сейчас будем делать функцию-конструктор World.

 World
свойство: bankCash: number
allCountries: [],
метод: addCountry(Country:{ ... })
----

После того как мы разместили страну в World
у данной страны добавился метод, который получает
доступ в bankCash

Country: {
name:string,
currentCash:number
callback: function() {
  // должен иметь доступ к bankCash
  } - город платежеспособный
}
*/

function World(cash) {
  this.cash = cash;
  this.addCountry = country => {
    console.log('>>>>>>>>> ADD COUNTRY', country);
    country[country.name] = (...args) => {
      console.log('>>>>>>>>> IM CALLED METHOD ' + country.name, country);
      country.callback.call(this, args);
    };
  };
}

function Country(name, callback) {
  this.name = name;
  this.currentCash = 0;
  this.callback = callback;
}

let earth = new World(100);
let ukraine = new Country('ua', function(howMuchMoneyINeed) {
  console.log('>>>>>>>>>>> howMuchMoneyINeed', this);
  console.log(howMuchMoneyINeed);
  this.cash -= howMuchMoneyINeed;

  // bankCash
});
console.log(ukraine);
// ukraine
/*
name: 'ua',
callback:function() {},
currentCash: 0
*/
let frontend = new Country('/login', function(cash) {
  // bankCash
});
/*
name: '/login',
callback:function() {},
currentCash: 0
*/
earth.addCountry(ukraine);
ukraine.ua(20);
console.log(earth);
console.log(ukraine);
// worldCash == 80
// ukraineCash == 20
// earth.addCountry(frontend);
// frontend.login(40);
// worldCash == 40
// frontCash == 40;
