// Play gif on load, reload, or revisit
$(document).ready(function playgif() {
	$("#homegif").attr("src", "static/images/gifs/home-1.gif?" + Math.random());
});

// Play gif on hover
$("#homegif").mouseover(function playgif() {
	$("#homegif").attr("src", "static/images/gifs/home-1.gif?" + Math.random());
});