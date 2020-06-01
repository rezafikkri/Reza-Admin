const sidebar = document.querySelector("aside.sidebar");
const main = document.querySelector("main.main");

/* show hide menu sidebar */
const navbarSidebarToggler = document.querySelector("a.navbar__sidebar-toggler");
if(navbarSidebarToggler !== null) {
	navbarSidebarToggler.addEventListener('click', function(e){
		// not aktifkan fungsi default link
		e.preventDefault();

		sidebar.classList.toggle("sidebar--show-sm");
	});
}

/* sidebar dropdown */
if(sidebar !== null) {
	sidebar.addEventListener('click', function(e){
		let targetDropdown = e.target;
		if(!targetDropdown.classList.contains("sidebar__btn-dropdown")) targetDropdown = e.target.parentElement;
		if(targetDropdown.classList.contains("sidebar__btn-dropdown")) {
			e.preventDefault();
			
			targetDropdown.classList.toggle("sidebar__btn-dropdown--active");
			targetDropdown.querySelector("span.sidebar__span-dropdown").classList.toggle("sidebar__span-dropdown--rotate");
			targetDropdown.nextElementSibling.classList.toggle("sidebar__dropdown--show");
		}
	});
}

/* navbar toggler */
const btnNavbarToggler = document.querySelector("button.navbar-toggler");
if(btnNavbarToggler !== null) {
	btnNavbarToggler.addEventListener('click', function(){
		const navbarTarget = document.querySelector(`div${btnNavbarToggler.getAttribute("target")}`);
		navbarTarget.classList.toggle("d-block");
	});
}

/* alert close */
if(main !== null) {
	main.addEventListener('click', function(e){
		const btnClose = e.target;
		if(btnClose.classList.contains("alert__close-btn")) {
			btnClose.parentElement.parentElement.remove();
		}
	});
}