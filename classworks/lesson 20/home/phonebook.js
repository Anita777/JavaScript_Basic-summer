class App {
  header() {
    return `
      <th>
        <td>fullName</td>
      </th>
      <th>
        <td>user name</td>
      </th>
      <th>
        <td>email</td>
      </th>
    `;
  }
  renderUsers() {
    const someUsers = [
      { name: 'Jack', phone: '123123' },
      { name: 'Bob', phone: '333' },
      { name: 'Spanch', phone: '333' }
    ];
    // `<tr>
    //   <td>Jack</td>
    //   <td>123123</td>
    //  </tr>`
    return someUsers
      .map(user => {
        return `<tr>
                <td>${user.name}</td>
                <td>${user.phone}</td>
             </tr>`;
      })
      .join('');
  }
  table() {
    return `
      <table>
        <thead>          
          <th>
            <td>fullName</td>
          </th>
          <th>
            <td>user name</td>
          </th>
          <th>
            <td>email</td>
          </th>    
        </thead>
        <tbody>
          ${this.renderUsers()}
        </tbody>
      </table>
    `;
  }
  render() {}
}
