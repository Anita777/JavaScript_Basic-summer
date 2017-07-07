const root = document.getElementById('root');
var changeColor = document.getElementById('changeColor');

// border-radius
// grid
// ...
// ...

const styles = [
  {
    styles: {
      backgroundColor: 'green',
      borderRadius: '50%'
    }
  }
];

// let colors = ['red', 'green', 'black', 'blue', 'yellow'];
// let counter = 0;
// setInterval(() => {
//   root.style.backgroundColor = colors[counter];
//   if (counter === colors.length - 1) counter = 0;
//   else counter++;
// }, 10000);

changeColor.onclick = () => {
  if (root.style.backgroundColor === 'green') {
    root.style.backgroundColor = 'red';
    root.style.borderRadius = null;
  } else {
    styles.forEach(style => {
      Object.keys(style.styles).forEach(property => {
        root.style[property] = style.styles[property];
      });
    });
  }
};

/*

По клику на элемент добавить или удалять класс

*/
root.onclick = () => {
  root.classList.toggle('active');
};

let rightDirection;
function moveTheBody() {
  if (!rightDirection) {
    let leftPosition = parseInt(root.style.left) || 0;
    root.style.left = ++leftPosition + 'px';
    if (leftPosition === 400) {
      rightDirection = true;
    }
  } else {
    let leftPosition = parseInt(root.style.left) || 0;
    root.style.left = --leftPosition + 'px';
    if (leftPosition === 0) {
      rightDirection = false;
    }
  }
}

root.onmousemove = () => {
  moveTheBody();

  // root.style.left =
};

setInterval(moveTheBody, 200);
/*



*/
