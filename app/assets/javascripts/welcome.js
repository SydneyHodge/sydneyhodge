$(document).ready(function() {
	$("#normal-delay").fadeIn(2500, function() {
		$("#long-delay").fadeIn(2500, function() {
			$("#xlong-delay").fadeIn(1500, function() {
				$("#xxlong-delay").fadeIn(1500, function() {
					$("#xxxlong-delay").fadeIn(1500);					
				});
			});
		});
	});

   $('.delay').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });

   $('.delay').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       });
   });
});