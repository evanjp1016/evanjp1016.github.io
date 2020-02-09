// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("page-navigation").style.height = "70px";
    document.getElementById("nav-left").style.marginTop = "25px";
    document.getElementById("nav-right").style.marginTop = "25px";
  } else {
    document.getElementById("page-navigation").style.height = "85px";
    document.getElementById("nav-left").style.marginTop = "40px";
    document.getElementById("nav-right").style.marginTop = "40px";
  }
}