// все запросы к серверу вот здесь

class Api {
  constructor(url) {
    this.url = url;
  }

  requestUsers() {
    return fetch(this.url).then(data => data.json);
  }
}

const api = new Api(url + 'user');
