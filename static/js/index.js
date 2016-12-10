$(function(){
	$("#toTop").click(function(){
		$("html,body").animate({
			scrollTop:0
		},800)
	})
	$(window).scroll(function(){  
        // 回顶部
        if ($(window).scrollTop() > $(window).height()){  

            $("#toTop").fadeIn(500);  
        }
        else{  

            $("#toTop").fadeOut(500);  
        };
        //图片区
        // if ($(window).scrollTop() >= $('#figure').offset().top/2) {
        //     $('#figure .row figure').addClass('dh_img');
        // }

        // about
        if ($(window).scrollTop() >= $('#about').offset().top - 300){
            $('#about h2').addClass('dh_h2');
            $('#about #about_content #about_content_row .left').addClass('dh_l');
            $('#about #about_content #about_content_row .right').addClass('dh_r');
        }
        else {
            $('#about h2').removeClass('dh_h2');
            $('#about #about_content #about_content_row .left').removeClass('dh_l');
            $('#about #about_content #about_content_row .right').removeClass('dh_r');
        }
        // 图标
        if ($(window).scrollTop() >= $('#about').offset().top - 100) {
            $('#about_content .Process ul li').addClass('dh_tb');
          
        }
        else {
            $('#about_content .Process ul li').removeClass('dh_tb');
          
        }
        if ($(window).scrollTop() >= $('#about').offset().top) {
         
            $('#about #info .container .row div').addClass('dh_tb');
        }
        else {
          
            $('#about #info .container .row div').removeClass('dh_tb');
        }

        //partners
        if ($(window).scrollTop() >= $('#partners').offset().top - 300){
            $('#partners h2').addClass('dh_h2');
            $('#partners .partners_container .row_1').addClass('dh_row_1');
            $('#partners .partners_container .row_2').addClass('dh_row_2');
        }
        else {
            $('#partners h2').removeClass('dh_h2');
            $('#partners .partners_container .row_1').removeClass('dh_row_1');
            $('#partners .partners_container .row_2').removeClass('dh_row_2');
        }

        // contact
        if ($(window).scrollTop() >= $('#contact').offset().top - 500){
            // console.log($(window).scrollTop());
            // console.log($('#contact').offset().top);
            $('#contact h2').addClass('dh_h2');
            $('#contact .container .row').addClass('dh_form')
        }
        else{

             $('#contact .container .row').removeClass('dh_form');
             $('#contact h2').removeClass('dh_h2');
        }
    });



})