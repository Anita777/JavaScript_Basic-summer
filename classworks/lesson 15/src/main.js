const app = {
  questions: [
    {
      name: 'Вопрос 1',
      answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
      rightAnswers: [2]
    }, // приходят с сервера
    {
      name: 'Вопрос 2',
      answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
      rightAnswers: [1]
    }, // приходят с сервера
    {
      name: 'Вопрос 3',
      answers: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
      rightAnswers: [2]
    } // приходят с сервера
  ],
  createLi() {
    return this.new('li')
  },
  render() {
    const body = document.body;   
    const main = this.new('main');
    const h1 = this.new('h1');
    const ol = this.new('ol');

    main.appendChild(h1);
    main.appendChild(ol);
    
    this.questions.forEach(question => {
      const li = this.createLi();
      const h3 = this.new('h3');
      const ul = this.new('ul');
      question.answers.forEach(answer => {
        const liAnswer = this.createLi();
        

      })
      li.appendChild(h3);
      li.appendChild(ul);

    })    
  },
  new(tag) {
    return document.createElement(tag);
  }
};

app.render();
