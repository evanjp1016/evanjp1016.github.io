function scrollAppear(){
	var introText = document.querySelectorAll('.intro-text');
	var introPosition = introText.getBoundingClientRect().top;
	var screenPosition = window.innerHeight / 2;

	console.log('called');

	if (introPosition < screenPosition){
		introText.classList.add('intro-appear');
	}
}

scrollAppear();

window.addEventListener('scroll', scrollAppear);