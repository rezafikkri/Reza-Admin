"use strict";

/*
	Reza-admin: v1.0
	Copyright 2020 Reza Sariful Fikri
*/
var sidebar = document.querySelector("aside.sidebar");
var main = document.querySelector("main.main");
/* show hide menu sidebar */

var navbarSidebarToggler = document.querySelector("a.navbar__sidebar-toggler");

if (navbarSidebarToggler !== null) {
  navbarSidebarToggler.addEventListener('click', function (e) {
    // not aktifkan fungsi default link
    e.preventDefault();
    sidebar.classList.toggle("sidebar--show-sm");
  });
}
/* sidebar dropdown */


if (sidebar !== null) {
  sidebar.addEventListener('click', function (e) {
    var targetDropdown = e.target;
    if (!targetDropdown.classList.contains("sidebar-btn-dropdown")) targetDropdown = e.target.parentElement;

    if (targetDropdown.classList.contains("sidebar-btn-dropdown")) {
      e.preventDefault();
      targetDropdown.parentElement.classList.toggle("sidebar__item--dropdown-active");
      targetDropdown.querySelector("span.sidebar__span-dropdown").classList.toggle("sidebar__span-dropdown--rotate");
      targetDropdown.nextElementSibling.classList.toggle("sidebar__dropdown--show");
    }
  });
}
/* alert close */


if (main !== null) {
  main.addEventListener('click', function (e) {
    var btnClose = e.target;

    if (btnClose.classList.contains("alert__close-btn")) {
      btnClose.parentElement.parentElement.remove();
    }
  });
}