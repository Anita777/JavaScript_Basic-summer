'use strict';


/*
 *
 * Напишите функцию которая будет изменять цвет каждые 1 секунды
 * на желтый, а потом на зеленый
 *
 *
 * */

(function() {
  let elem = document.getElementById('next');
  
  setInterval(() => {
    let { backgroundColor } = elem.style;
    if ( backgroundColor === 'blue' ) {
      elem.style.backgroundColor = 'red'
    } else if ( backgroundColor === 'red' ) {
      elem.style.backgroundColor = 'yellow'
    } else {
      elem.style.backgroundColor = 'blue'
    }
    elem.style.width = parseInt(elem.style.width) + 5 +'px';
  }, 300)
})();