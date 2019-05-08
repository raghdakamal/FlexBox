

$(window).scroll(function(){
    
    var windowScroll  =$(window).scrollTop();
 // var teamOffest =$(".team").offset().top;
    
    if (windowScroll > 8)
        {
          $(".navigation").css("backgroundColor",'#ec3237')
        }
    else
        {
            $(".navigation").css("backgroundColor","transparent")
        }
});


$("#btnUp").click(function(){
    
//$(window).scrollTop('0');   
    
    
  $("html,body").animate({scrollTop:'0'}, 2000)
    
});

