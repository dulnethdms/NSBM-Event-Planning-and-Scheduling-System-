/**
 * NSBM EventHub — main.js
 * Shared behaviour used across every page. Currently handles the
 * mobile navigation toggle. Add page-specific scripts in separate
 * files and include them only on the pages that need them.
 */
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".navbar__toggle");
  var menu = document.querySelector(".navbar__menu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", function () {
    var isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});
