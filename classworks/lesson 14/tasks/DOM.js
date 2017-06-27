// const h1 = document.createElement('h1');
// h1.textContent = 'HELLO EASY CODE WELLOCOME TO (H) DOM (E)';

// document.body.appendChild(h1);
// let create = tag => document.createElement(tag);

// let ul = create('ul');

// let li1 = create('li');
// li1.textContent = 'JavaScript'
// let li2 = create('li');
// li2.textContent = 'React'
// let li3 = create('li');
// li3.textContent = 'Node.js'

// ul.appendChild(li1)
// ul.appendChild(li2)
// ul.appendChild(li3)

// document.body.appendChild(ul);

// var info = ['JavaScript', 'React', 'Node.js'];
// const ul = document.createElement('ul');
// info.forEach(elem => {
//   const li = document.createElement('li');
//   li.textContent = elem;
//   ul.appendChild(li);
// });

// document.body.appendChild(ul);

/* СДЕЛАТЬ ПРИ ПОМОЩИ JavaScript и поместить в document.body
  <ul>
    <li>JavaScript</li>
    <li>React</li>
    <li>Node.js</li>
  </ul>
*/

const h1 = document.createElement('h1');
const content = 'HELLO EASY CODE WELLOCOME TO (H) DOM (E)';
h1.textContent = content;

const button = document.createElement('button');
button.textContent = 'SUBMIT';

button.onclick = function() {
  if (h1.textContent === content) {
    h1.textContent = 'OK !';
  } else {
    h1.textContent = content;
  }
  console.log('privet');
};
document.body.appendChild(h1);
document.body.appendChild(button);
