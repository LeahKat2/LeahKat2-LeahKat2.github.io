$(function(){
    $(window).scroll(function() {
        $('#footer').toggle($(document).scrollTop() > 100);

    var captionhidden = true;

//    $("img").on("click", function(){
//
//        if (captionHidden){
//               $(this).next().show();
//              captionHidden  = false;
//        }else{
//
//            $(this).next().hide()
//            captionHidden = true;
//        }
//
//        });

    var myImg = $ ("img");
    var myCaption = myImg.next();

     myImg.on("mouseenter", function(){
         myCaption.slideDown();

    }).on("mouseleave", function(){
         myCaption.slideUp();

            }
  $(window).scroll(function() {
    if($(document).scrollTop() > 100)
        $('#footer').fadeIn();
    else
        $('#footer').fadeOut();
    });

