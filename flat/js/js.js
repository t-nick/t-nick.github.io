
$(document).ready($(".room").hover (
	function () {
		$(".description").html($(this).attr('desc-data'));
		$(".description").fadeIn();
	},
	function () {
		$(".description").fadeOut(50);
	}
));