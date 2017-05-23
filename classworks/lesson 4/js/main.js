function happyNewYear() {

}

let isHappyNewYear = 31 && 'december';
let youIsJavaScriptDev = true || false;

let myObject = {};

let myName = myObject.name || 'Oleg';

let React = false || 1 && 'lib' && !true || 'ok';



function add(a, b, boolean, c) {
  console.log(c);
  if (typeof a == 'number' && minusFive(b) > 10 && c == 'hi') {
    console.log(a + b);
    return;
  }
  console.log('you nice developers');
}

function minusFive(number) {
  return number - 5;
}

add('w', 5, true, 'hi')
add('w', 2, false);











// console.log(isHappyNewYear, youIsJavaScriptDev);


function userWithFamily(user) {
  if (user.name && user.family) {
    return true
  }
  return false
}



function makeUser(prevState, nextState) {

  let userName = prevState.name || 'Chuck';
  let surname = prevState.surname || 'Norris';

  return {
    name: userName,
    surname: surname,
    email: nextState.email
  }

}



let number = 1;

//Добавить 1
number = number + 1;
number += 1;
number++;


number *= 25;

number = +1;
//Сначала идет преобразование, а после присвоение





// LOOP