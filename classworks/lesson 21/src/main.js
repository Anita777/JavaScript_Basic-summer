const usersId = [1, 2, 3];
const url = 'https://jsonplaceholder.typicode.com/users/';
let counter = 0;
let users = [];

// callback-hell

const serverRequest = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      counter++;
      const data = callback(JSON.parse(xhr.responseText));
      // users.push({ userName: data.username, id: data.id });
    }
    if (counter === 3) {
      console.log(`index: #${url}`);
    }
  };
  xhr.send();
};
// callback-hell
// Когда мы делаем вложенный запрос которому требуются информация с прошлого запроса
serverRequest(url + 1, user1 => {
  serverRequest(url + 2, user2 => {
    serverRequest(url + 3, user3 => {
      console.log(
        user1,
        ' >>>>>>>>>> ',
        user2,
        ' >>>>>>> ',
        user3
      );
    });
  });
});

// ПРЕДПОЛАГАЕМ ЧТОБЫ ВЫГЛЯДЕТ ПРИМЕРНО ТАК!

// const users = [];
// pseudo-code

request(URL)
  .then(user1 => users.push(user1))
  .then(user2 => {
    users.push(user2);
  })
  .then(user3 => users.push(user3))
  .then(() => alert(users));

// request(usersId).map(usersFromServer => {});
