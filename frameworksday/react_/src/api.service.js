class Api {
  serverRequest() {
    const url = 'https://easycode-js.herokuapp.com/test/users';
    return fetch(url).then(data => data.json());
  }
}

export default new Api();