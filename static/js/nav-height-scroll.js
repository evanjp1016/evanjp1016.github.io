// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  	var navContainer = document.getElementsByClassName("nav-container");
  	navContainer[0].style.height = "70px";

  	var navLeft = document.getElementsByClassName("nav-left");
  	navLeft[0].style.marginTop = "0";

  	var navRight = document.getElementsByClassName("nav-right");
  	navRight[0].style.marginTop = "0";
  } else {
  	var navContainer = document.getElementsByClassName("nav-container");
  	navContainer[0].style.height = "140px";
  	
  	var navLeft = document.getElementsByClassName("nav-left");
  	navLeft[0].style.marginTop = "70px";

  	var navRight = document.getElementsByClassName("nav-right");
  	navRight[0].style.marginTop = "70px";
  }
}