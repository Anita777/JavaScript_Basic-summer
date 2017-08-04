import { add, minus } from './myMath';

const showText = text => {
  const app = document.querySelector('.app');
  app.innerHTML = text;
};


class App {}
showText('30+40=' + add(3)(4));
showText('10-1=' + minus(10, 10));
