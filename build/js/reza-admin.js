/*
	Reza-admin: v1.0
	Copyright 2020 Reza Sariful Fikri
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
		if(!targetDropdown.classList.contains("sidebar-btn-dropdown")) targetDropdown = e.target.parentElement;
		if(targetDropdown.classList.contains("sidebar-btn-dropdown")) {
			e.preventDefault();
			
			targetDropdown.parentElement.classList.toggle("sidebar__item--dropdown-active");
			targetDropdown.querySelector("span.sidebar__span-dropdown").classList.toggle("sidebar__span-dropdown--rotate");
			targetDropdown.nextElementSibling.classList.toggle("sidebar__dropdown--show");
		}
	});
}

/* navbar toggler */
const btnNavbarToggler = document.querySelector("button.navbar-toggler");
if(btnNavbarToggler !== null) {
	btnNavbarToggler.addEventListener('click', () => {
		const navbarTarget = document.querySelector(`div${btnNavbarToggler.getAttribute("target")}`);
		navbarTarget.classList.toggle("d-block");
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

/* add class 'footer--b-100' to footer if document height more than window height */
const footer = document.querySelector("footer.footer");
const documentH = document.scrollingElement.offsetHeight;
const windowH = window.innerHeight;
if(footer !== null && documentH > windowH) {
	footer.classList.add("footer--b-100");
}