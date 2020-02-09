// toTop button appears after scrolling down 160
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
        $(".toTop").addClass("fade-in-element");
    }
    else {
    	$(".toTop").removeClass("fade-in-element");
    }
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}