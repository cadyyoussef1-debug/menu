const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".navlinks");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "فتح القائمة" : "إغلاق القائمة");
    links.classList.toggle("is-open", !isOpen);
  });

  links.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "فتح القائمة");
      links.classList.remove("is-open");
    }
  });
}