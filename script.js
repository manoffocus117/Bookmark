const navbar = document.getElementById("navbar");

function handle_scroll() {
      if (window.scrollY > 100) {
            navbar.classList.add("scrolled");
      } else {
            navbar.classList.remove("scrolled");
      }
}

window.addEventListener("scroll", handle_scroll, { passive: true });
handle_scroll(); // run once on load in case the page is already scrolled
