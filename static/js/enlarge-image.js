$("img").click(function(){
	var className = $(this).attr('class');
	if (className=='image') {
		$(this).removeClass('image');
		$(this).addClass('expanded');
	} else {
		$(this).removeClass('expanded');
		$(this).addClass('image');
	}
});