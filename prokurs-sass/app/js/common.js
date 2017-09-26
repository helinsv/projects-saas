$(document).ready(function(){
	
	$(".tab_phone .tab_item").not(":first").hide();
	$(".tab_phone .wrapper .tab").click(function() {
		$(".tab_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	$(".tab_content .tab_item").not(":first").hide();
	$(".tab-header .wrapper .tab").click(function() {
		$(".tab-header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab-header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".contacts .tab_item").not(":first").hide();
	$(".contacts .tab").click(function() {
		$(".contacts .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".contacts .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$("footer .tab_phone .tab_item").not(":first").hide();
	$("footer .tab_phone .wrapper .tab").click(function() {
		$("footer .tab_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$("footer .tab_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".owl-carousel").owlCarousel({
		loop: true,
		responsive : {
			0 : {
				items : 1,
				nav : true
			}
		},
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	});
	
	$('.popup').magnificPopup({
		type:'image'
	});

	$('.popup_c').magnificPopup();


 	//E-mail Ajax Send
	$("form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance; 
				magnificPopup.close(); 
				th.trigger("reset"); //clear form
			}, 1000);
		});
		return false;
	});

});

$(window).load(function(){
	$(".top-description h1").animated("fadeInDown", "fadeOut");
	$(".top-description h3").animated("zoomInUp", "fadeOut");
	$(".tab-header").animated("flipInY", "fadeOut");
	$(".profi_item").animated("fadeInRight", "fadeOut");
	$(".s-profi form").animated("zoomIn", "fadeOut");
	$("footer").animated("fadeIn", "fadeOut");
});
