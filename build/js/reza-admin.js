/**
 * Reza-Admin v1.0
 * Copyright 2020 Reza Sariful Fikri
 * Released under the MIT License
*/

const sidebar = document.querySelector("aside.sidebar");
const main = document.querySelector("main.main");

/* show hide menu sidebar */
const navbarSidebarToggler = document.querySelector("a.navbar__sidebar-toggler");
if(navbarSidebarToggler !== null) {
	navbarSidebarToggler.addEventListener('click', e => {
		// not aktifkan fungsi default link
		e.preventDefault();

		sidebar.classList.toggle("sidebar--show-sm");
	});
}

/* sidebar dropdown */
if(sidebar !== null) {
	sidebar.addEventListener('click', e =>{
		let targetDropdown = e.target;
		if(!targetDropdown.classList.contains("sidebar__btn-dropdown")) targetDropdown = e.target.parentElement;
		if(targetDropdown.classList.contains("sidebar__btn-dropdown")) {
			e.preventDefault();
			
			targetDropdown.parentElement.classList.toggle("sidebar__item--dropdown-active");
			targetDropdown.nextElementSibling.classList.toggle("sidebar__dropdown--show");
		}
	});
}

/* alert close */
if(main !== null) {
	main.addEventListener('click', e => {
		const btnClose = e.target;
		if(btnClose.classList.contains("alert__close-btn")) {
			btnClose.parentElement.parentElement.remove();
		}
	});
}