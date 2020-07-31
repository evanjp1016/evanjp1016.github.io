// Play gif
$(document).ready(function playgif() {
	$("#homegif").attr("src", "static/images/gifs/home-1.gif?" + Math.random());
});

// Play gif on hover
$("#homegif").mouseover(function playgif() {
	$("#homegif").attr("src", "static/images/gifs/home-1.gif?" + Math.random());
});


// To top
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
        $(".toTop").addClass("fade-in");
    }
    else {
    	$(".toTop").removeClass("fade-in");
    }
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Nav height
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