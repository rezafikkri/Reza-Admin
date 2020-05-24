/* show hide menu sidebar */
const navbarSidebarToggler = document.querySelector("a.navbar__sidebar-toggler");
const sidebar = document.querySelector("nav.sidebar");
const mainKonten = document.querySelector("main.main-konten");
if(navbarSidebarToggler !== null) {
	navbarSidebarToggler.addEventListener('click', function(e){
		// not aktifkan fungsi default link
		e.preventDefault();

		sidebar.classList.toggle("sidebar--show-sm");
		mainKonten.classList.toggle("main-konten--show-sidebar");
	});
}