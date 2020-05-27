const sidebar = document.querySelector("aside.sidebar");

/* show hide menu sidebar */
const navbarSidebarToggler = document.querySelector("a.navbar__sidebar-toggler");
const mainKonten = document.querySelector("main.main-konten");
if(navbarSidebarToggler !== null) {
	navbarSidebarToggler.addEventListener('click', function(e){
		// not aktifkan fungsi default link
		e.preventDefault();

		sidebar.classList.toggle("sidebar--show-sm");
		mainKonten.classList.toggle("main-konten--show-sidebar");
	});
}

/* sidebar dropdown */
if(sidebar !== null) {
	sidebar.addEventListener('click', function(e){
		e.preventDefault();

		let targetDropdown = e.target;
		if(!targetDropdown.classList.contains("sidebar__btn-dropdown")) targetDropdown = e.target.parentElement;
		if(targetDropdown.classList.contains("sidebar__btn-dropdown")) {
			targetDropdown.classList.toggle("sidebar__btn-dropdown--active");
			targetDropdown.querySelector("span.sidebar__span-dropdown").classList.toggle("sidebar__span-dropdown--rotate");
			targetDropdown.nextElementSibling.classList.toggle("sidebar__dropdown--show");
		}
	});
}