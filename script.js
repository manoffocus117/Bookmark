const navbar = document.getElementById("navbar");
const open_menu = document.getElementById("open-menu");
const close_menu = document.getElementById("close-menu");
const mobile_menu = document.getElementById("mobile-menu");

function handle_scroll() {
      if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
      } else {
            navbar.classList.remove("scrolled");
      }
}

window.addEventListener("scroll", handle_scroll, { passive: true });
handle_scroll();

open_menu.addEventListener("click", () => {
      mobile_menu.classList.add("active");

      open_menu.classList.add("hidden");
      close_menu.classList.remove("hidden");
});

close_menu.addEventListener("click", () => {
      mobile_menu.classList.remove("active");

      close_menu.classList.add("hidden");
      open_menu.classList.remove("hidden");
});
