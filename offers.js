const button = document.querySelector(".nav-toggle");
const nav = document.querySelector(".navlinks");

button.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  button.setAttribute("aria-expanded", open);
});