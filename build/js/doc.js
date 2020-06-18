/* navbar toggler */
const mainBox = document.querySelector(".main__box");
if(mainBox !== null) {
	mainBox.addEventListener('click', e => {
		let targetNavbarToggler = e.target;

		if(!targetNavbarToggler.classList.contains("navbar-toggler")) targetNavbarToggler = e.target.parentElement;

		if(targetNavbarToggler.classList.contains("navbar-toggler")) {
			const navbarTarget = document.querySelector(`div${targetNavbarToggler.getAttribute("target")}`);
			navbarTarget.classList.toggle("d-block");
		}
	});
}