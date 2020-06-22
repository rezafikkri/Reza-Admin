"use strict";

/* navbar toggler */
var mainBox = document.querySelector(".main__box");

if (mainBox !== null) {
  mainBox.addEventListener('click', function (e) {
    // navbar toggler
    var targetNavbarToggler = e.target;
    if (!targetNavbarToggler.classList.contains("navbar-toggler")) targetNavbarToggler = e.target.parentElement;

    if (targetNavbarToggler.classList.contains("navbar-toggler")) {
      var navbarTarget = document.querySelector("div".concat(targetNavbarToggler.getAttribute("target")));
      navbarTarget.classList.toggle("d-block");
    } // sidebar dropdown


    var targetSidebarDropdown = e.target;
    if (!targetSidebarDropdown.classList.contains("sidebar-btn-dropdown")) targetSidebarDropdown = e.target.parentElement;

    if (targetSidebarDropdown.classList.contains("sidebar-btn-dropdown")) {
      e.preventDefault();
      targetSidebarDropdown.parentElement.classList.toggle("sidebar__item--dropdown-active");
      targetSidebarDropdown.querySelector("span.sidebar__span-dropdown").classList.toggle("sidebar__span-dropdown--rotate");
      targetSidebarDropdown.nextElementSibling.classList.toggle("sidebar__dropdown--show");
    } // sidebar toggler


    var targetSidebarToggler = e.target;
    if (!targetSidebarToggler.classList.contains("navbar__sidebar-toggler")) targetSidebarToggler = e.target.parentElement;

    if (targetSidebarToggler.classList.contains("navbar__sidebar-toggler")) {
      e.preventDefault();
      targetSidebarToggler.parentElement.nextElementSibling.classList.toggle("sidebar--show-sm");
    }
  });
}