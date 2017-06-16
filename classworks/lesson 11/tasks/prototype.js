function Animal(type) {
  this.type = type;
}

Animal.prototype.run = function() {
  console.log(`${this.name} побежал, поскакал! `);
};

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  showName() {
    console.log(this.name);
  }
};

var belyash = new Cat('Беляш без документов');
// belyash умным джаваСкрипт объектом
// запоминает ссылку на объект в .prototype

Cat.prototype = new Animal('КОШЕЧКА');
// prototype - создается новая ссылка
var barsik = new Cat('Барсик')

Cat.prototype.haha = function () {
  console.log('Santa Claus says HOHO !')
}

belyash.showName(); // ??
barsik.run(); // ??
