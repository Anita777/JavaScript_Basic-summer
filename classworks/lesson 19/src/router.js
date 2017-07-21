// alert('Hello from Node.js world');

const links = [...document.querySelectorAll('a')];
const content = document.querySelector('.content');
const updateContent = state => {
  content.innerHTML = state;
};

links.forEach(link => {
  link.addEventListener('click', event => {
    let href = event.target.getAttribute('href');
    let state = event.target.innerHTML;
    event.preventDefault();

    updateContent(state);
    // history.pushState(state, href, href);
  });
});

window.addEventListener('popstate', function(event) {
  // console.log('popstate fired!');
  console.log(event);
  updateContent(event.state);
});
