function openContents() {
	var toc = document.getElementsByClassName("table-of-contents");
	toc[0].style.marginLeft = "20px";
	toc[0].style.visibility = "visible";
	toc[0].style.opacity = "1";

	var tocIcon = document.getElementsByClassName("toc-icon");
	tocIcon[0].style.opacity = "0";
}

function closeContents() {
	var toc = document.getElementsByClassName("table-of-contents");
	toc[0].style.marginLeft = "0px";
	toc[0].style.visibility = "hidden";
	toc[0].style.opacity = "0";

	var tocIcon = document.getElementsByClassName("toc-icon");
	tocIcon[0].style.opacity = "1";
}