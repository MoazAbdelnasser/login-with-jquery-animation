$(document).ready(function(){
    "use Strict";
     
    $("h1").animate({top:"10px"},1000);
    
    $("button.float-left").animate({left:'0px'},500);
    $("button.float-right").animate({right:'0px'},500);
    $(".form-check").animate({bottom:'0px'},500,function(){
        $(this).css("display","inline-block");
    });
   //Animate Company Logo
    $(".login img").animate({top:"-80px"},500);
    //Animate .welcome-visitor Message
    $(".welcome-visitor").animate({opacity:'1'},500,function(){
        $(".login").css('borderWidth', '1px');
        $(".login").css('borderStyle', 'solid');
        $(".login").css('borderColor', '#193f75');
    });
    
});