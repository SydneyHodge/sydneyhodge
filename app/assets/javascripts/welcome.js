var ready = function() {
	$("#right-content .content").append($("#right-responses .self").clone()).hide().fadeIn();
	$("#right-content .content").append($("#right-responses .social-info").clone()).hide().fadeIn();

	$(".menu-item").click(function() {
		// Clears elements within these divs.
		$("#additional-info").children().not(".info-hr").remove();
		$("#right-content .content").children().remove();

		// Retrieves the object that was clicked.
		$object = $(this).attr("id");

		// Adds the appropriate content to the respective div elements.
		$("#additional-info").append($("#left-responses ." + $object + "-info").clone());
		$("#right-content .content").append($("#right-responses ." + $object + "-info").clone());

		// Removes the hover effect from all elements, except for the one selected.
		$(".menu-item").not($(this)).each(function() {
			$(this).removeClass("menu-item-hover");
		});

		// Adds the hover effect to @code($this).
		$(this).addClass("menu-item-hover")
	});

	// Removes any elements in the @code(#additional-info) div.
	$(".name").click(function() {
		$("#additional-info").children().not(".info-hr").remove();
		$("#right-content .content").children().remove();
		$("#right-content .content").append($("#right-responses .self").clone());
		$("#right-content .content").append($("#right-responses .social-info").clone());
		
		// Removes the hover effect from all elements, except for the one selected.
		$(".menu-item").each(function() {
			$(this).removeClass("menu-item-hover");
		});
	});
};

$(document).ready(ready);
$(document).on("page:load", ready);

function change_image_color(value) {
	$("#" + value).before($("#" + value + "-color").clone()).hide()
}

function change_image(value) {
	$("#" + value + "-color").remove();
	$("#" + value).show();
}