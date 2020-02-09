function openContents() {
	document.getElementById("mySidenav").style.marginLeft = "20px";
	document.getElementById("mySidenav").style.visibility = "visible";
	document.getElementById("mySidenav").style.opacity = "1";
	document.getElementById("tableOfContents").style.opacity = "0";
}

function closeContents() {
	document.getElementById("mySidenav").style.marginLeft = "0px";
	document.getElementById("mySidenav").style.visibility = "hidden";
	document.getElementById("mySidenav").style.opacity = "0";
	document.getElementById("tableOfContents").style.opacity = "1";
}