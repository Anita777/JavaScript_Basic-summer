import React from 'react';
import ReactDOM from 'react-dom';

import api from './api.service';

const renderDOMNode = document.querySelector('#root');

console.log(renderDOMNode);

/*
Сделайте реакт-комонент Hello, этот компонент будет
отображать ваше имя и вставьте данный компонент в App
*/

class Hello extends React.Component {
  constructor() {
    super();
    this.name = 'Oleg';
  }
  render() {
    return (
      <h1>
        {this.name}
      </h1>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      frameworks: ['Angular', 'Vue', 'React']
    };
  }

  async componentDidMount() {
    console.log(await api.serverRequest());

    this.setState({ frameworks: await api.serverRequest() });
  }
  render() {
    return (
      <h1>
        <Hello />
        {this.state.frameworks.map(user =>
          <li>
            {user.fullName}
          </li>
        )}
      </h1>
    );
  }
}
/*
<li>123</li>
<li>123</li>
<li>123</li>

*/

ReactDOM.render(<App />, renderDOMNode);
