$(document).ready(function() {
	$("#normal-delay").fadeIn(2500);
	$("#long-delay").fadeIn(5000);
	$("#xlong-delay").fadeIn(5500);
	$("#xxlong-delay").fadeIn(6000);
	$("#xxxlong-delay").fadeIn(6500);

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