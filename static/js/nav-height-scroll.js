// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  	var nav = document.getElementsByClassName("nav");
  	nav[0].style.height = "60px";

  	var navContainer = document.getElementsByClassName("nav-container");
  	navContainer[0].style.marginTop = "0";
  } else {
  	var nav = document.getElementsByClassName("nav");
  	nav[0].style.height = "90px";
  	
  	var navContainer = document.getElementsByClassName("nav-container");
  	navContainer[0].style.marginTop = "20px";
  }
}