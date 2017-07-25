const url = 'http://easycode-js.herokuapp.com/';
const button = document.querySelector('button');
const button2 = document.querySelector('.btn2');
const app = document.querySelector('.app');

const serverRequestGET = () => {
  let xhr = new XMLHttpRequest();
  // readystatechange
  // изменение готовности состояния нашего запроса
  xhr.addEventListener('readystatechange', () => {
    // 0 - ЕЩЕ НЕ ОТПРАВЛЕННО
    // 1 - Открыто
    // 2 - Получены заголовки
    // 3 - Начало получения ответа
    // 4 - Завершение получения ответа

    console.log(xhr.responseText);
    if (xhr.readyState === 4) {
      app.innerHTML = '<hr />' + xhr.responseText;
      // callback(xhr.responseText);
    }
  });

  xhr.open('GET', url + 'test99999', true);
  xhr.send();
};

button.addEventListener('click', () => {
  serverRequestGET();
});

button2.addEventListener('click', () => {
  let xhrPOST = new XMLHttpRequest();

  xhrPOST.addEventListener('readystatechange', () => {
    if (xhrPOST.readyState === 4) {
      console.log('response: ', JSON.parse(xhrPOST.response));
      console.log('responseText: ', xhrPOST.responseText);
    }
  });

  xhrPOST.open('POST', url + 'test99999/users', true);
  const newUser = {
    fullName: 'sss',
    email: 'mail@ukr.net'
  };
  xhrPOST.setRequestHeader('Content-Type', 'application/json');

  xhrPOST.send(JSON.stringify(newUser));
});

// let xhr = new XMLHttpRequest();
// xhr.addEventListener('readystatechange', () => {
//   console.log(xhr.readyState);
//   if (xhr.readyState === 4 && xhr.DONE === 4) {
//     state4 = xhr.responseText;
//     console.log(xhr.responseText);
//   }

// });
// xhr.onreadystatechange = () => {};

// То, что я хочу запросить
// xhr.open('GET', url + 'test', true);
// Отправка запроса

// xhr.send();

/*

Сделать запрос вот сюда 'http://easycode-js.herokuapp.com/'
/ollu
/qweqwe
http://easycode-js.herokuapp.com/ollu/users

ДОБАВИЛИ ПОЛЬЗОВАТЕЛЯ !

*/

myForm.addEventListener('submit', e => {
  e.preventDefault();
  const { name, email } = myForm.elements;

  if (!name.value) {
    alert('ЗАПОЛНИТЕ ИМЯ! ');
  }

  if (!email.value) {
    alert('ЗАПОЛНИТЕ EMAIL! ');
  }
  // Если одно из полей name, email не заполнено
  // отобразить alert какое именно поле не заполнено!
});
