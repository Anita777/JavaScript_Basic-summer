function Parent() { }
// class Parent {
//   sayHello() {
//     console.log('hello ' + this.name);
//   }

//   sayMeow() {
//     console.log('MEOW W_W @_@ ' + this.name);
//   }
// }
Parent.prototype.sayHello = function() {
  console.log('hello ' + this.name);
}
Parent.prototype.sayMeow = function() {
  console.log('MEOW W_W @_@ ' + this.name);
}

// class Child extends Parent {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
//   // полиморфизм
//   sayHello() {
//     console.log('hello from children')
//     super.sayHello();

//     // console.log('привет полиморфизм')
//   }
// }
function Child(name) {
  this.name = name;
}

Child.prototype = Object.create(Parent.prototype);
// Child.prototype = new Parent();
Child.prototype.sayHello = function() {
  console.log('привет полиморфизм')
}

var cat = new Child('Хвостик');
cat.sayHello();

// function Server() {
//   let secret_password = 'so secret';
//   this.showSecretPassword = function() {
//     console.log(secret_password);
//   }

//   this._changeSecretPassword = function(newPassword) {
//     secret_password = newPassword;
//   }
// }

// Server.prototype.public = function() { }
// var http = new Server();

class Server {
  constructor(options) {
    this.url = options.url;
    this.query = options.query;
  }

  listen(PORT, host) {
    console.log('server runnint at http://host:port');
  }
}

class Client extends Server {
  constructor(options, name) {
    super(options);
    // { url:'404' }
    this.name = name;
  }
}

var http = new Client({ url: '404' }, 'FIREFOX');
