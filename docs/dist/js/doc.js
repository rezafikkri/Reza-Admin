"use strict";

/* navbar toggler */
var mainBox = document.querySelector(".main__box");

if (mainBox !== null) {
  mainBox.addEventListener('click', function (e) {
    var targetNavbarToggler = e.target;
    if (!targetNavbarToggler.classList.contains("navbar-toggler")) targetNavbarToggler = e.target.parentElement;

    if (targetNavbarToggler.classList.contains("navbar-toggler")) {
      var navbarTarget = document.querySelector("div".concat(targetNavbarToggler.getAttribute("target")));
      navbarTarget.classList.toggle("d-block");
    }
  });
}