const button = document.querySelector('.hamb');
const nav = document.querySelector('.links');

button.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', open);
});