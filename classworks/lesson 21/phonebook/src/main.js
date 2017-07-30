class App {
  constructor() {
    this.state = {
      db: {},
      locals: {}
    };

    this.ui = {
      contacts: new Contacts(this.state),
      keypad: new Keypad(this.state)
    };
  }

  render() {
    this.ui.contacts.render();
  }
}
