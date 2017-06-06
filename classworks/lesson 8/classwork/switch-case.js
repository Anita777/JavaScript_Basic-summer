'use strict';

function checkNumber(a) {
  if ( a == 2 ) {
    // Тогда это
  }
  else if ( a == 10 ) {
    // Или это
  }
  else if ( a == 42 ) {
    // Или вот это
  }
  else {
    // Если ничего не прошло, тогда это
  }
}


/*
 * Напишите функцию, которая проверяет тип значения одного аргумента
 * Если тип Массив - тогда отобрает в консоле "Это массив"
 * Если тип Объект - тогда отображает в консоле "Объект"
 * Если любой другой тип - тогда отобрает "Ошибка 250"
 *
 * */

function checkNumber2(a) {
  let isType = null;
  if ( Array.isArray(a)) {
    isType = 'array'
  } else if ( typeof a == 'object' ) {
    isType = 'object'
  }
  
  switch (isType) {
    case 'array':
      console.log('ok');
      //break;
    case 'object':
      console.log('HI Object');
      break;
    default:
      console.log('the end');
  }
}

checkNumber2([]);
//checkNumber2({});
//checkNumber2(15);