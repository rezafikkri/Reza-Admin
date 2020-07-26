"use strict";

/* docs reza-admin v1.0 */
var mainBox = document.querySelector(".main__box");

if (mainBox !== null) {
  mainBox.addEventListener('click', function (e) {
    // sidebar dropdown
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
    } // copy to clipboard


    var targetClipboard = e.target;

    if (targetClipboard.classList.contains("clipboard")) {
      var textCode = targetClipboard.parentElement.nextElementSibling.textContent; // make textarea element then append and remove when copied to clipboard

      var input = document.createElement('textarea');
      input.value = textCode;
      input.style.position = "absolute";
      input.style.left = "-999px";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove(); // change text btn copy in 1 second

      targetClipboard.innerText = "Copied";
      targetClipboard.style.pointerEvents = "none";
      setTimeout(function () {
        targetClipboard.innerText = "Copy";
        targetClipboard.style.pointerEvents = "auto";
      }, 500);
    }
  });
}