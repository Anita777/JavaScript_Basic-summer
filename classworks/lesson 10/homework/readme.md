### Example from classwork
```javascript
let dataBase2 = {
  storages: [
    fruits2016,
    { fruits: ['mango', 'orange'] }
  ],
  //fruits: ['apple', 'banan'],
  reverse() {
    //console.log(this);
    this.fruits.forEach((el) => {
      console.log(el.split('').reverse().join(''));
    })
  },
  reverseFruits() {
    // storages
    let self = this;
    this.storages.forEach(function(el) {  
      self.reverse.call(el);
    });
  }
};
```
> + [Первые 7](https://learn.javascript.ru/es-modern) - es6
> + [call-apply](https://learn.javascript.ru/call-apply) es5
> + [You Don't Know JS: Up & Going](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md) (english)
> + [Lexical-this](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/apC.md) (english)
> + [this Sorax](https://www.youtube.com/watch?v=213r4EOHfF0) video 

# > + [arrow-function ЗАДАЧИ](http://tddbin.com/#?kata=es6/language/arrow-functions/basics)
