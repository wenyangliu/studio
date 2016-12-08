$(function(){
	$("#toTop").click(function(){
		$("html,body").animate({
			scrollTop:0
		},800)
	})
	$(window).scroll(function(){  
        if ($(window).scrollTop() > $(window).height()){  

            $("#toTop").fadeIn(500);  
        }
        else{  

            $("#toTop").fadeOut(500);  
        }  
    });
})