function toogleHamburgerMenu(button) {
	button.classList.toggle('opened');

	var navMenu = document.querySelector('nav');
	navMenu.classList.toggle('opened');
}

var velocity = 0.2;

window.addEventListener('scroll', function () {
	const mainSection = document.querySelector('.main-section');
	mainSection.style.transform = `translateY(${window.scrollY / 3}px)`;

	// TRY THIS:
	// var str = window.getComputedStyle(document.querySelector('p'), ':before')
	//        .getPropertyValue('content');

	const paralaxes = document.querySelectorAll('.parallax');
	paralaxes.forEach((element) => {
		const bgcPosition = element.dataset['bgcPosition'];
		const centerScreen = window.innerHeight / 2;
		var rect = element.getBoundingClientRect();
		const divAtTop = rect.y;
		const divCentered = divAtTop - centerScreen + rect.height / 2;
		element.style.backgroundPositionY = `-${
			bgcPosition - divCentered * velocity
		}px`;
	});
});
