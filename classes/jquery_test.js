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
$(function() {
    $('#footer').css({opacity: 0, bottom: '-100px'});
    $(window).scroll(function() {
        if( $(window).scrollTop + $(window).height() > $(document).height() ) {
            $('#footer').animate({opacity: 1, bottom: '0px'});
        }
    });
});


