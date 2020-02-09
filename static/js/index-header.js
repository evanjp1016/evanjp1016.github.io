const introDiv = document.querySelector('.intro');
const buttonDiv = document.querySelector('.button');
const intros = Array.from(introDiv.children);
const buttons = Array.from(buttonDiv.children);

function changeIntroText() {
	const currentIntro = introDiv.querySelector('.current-intro');
	const currentButton = buttonDiv.querySelector('.current-button');
	const nextIntro = (currentIntro.nextElementSibling);
	const nextButton = (currentButton.nextElementSibling);

	currentIntro.classList.remove('current-intro');
	currentButton.classList.remove('current-button');

	if (nextIntro !== null) {
		nextIntro.classList.add('current-intro');
		nextButton.classList.add('current-button');
	}
	else {
		intros[0].classList.add('current-intro');
		buttons[0].classList.add('current-button');
	}
}




