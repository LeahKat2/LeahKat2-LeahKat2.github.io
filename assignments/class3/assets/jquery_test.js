$(function(){
    $("footer").on("mouseover",function(){
        $("footer div").fadeIn();
    }).on("mouseleave",function(){
        $("footer div").fadeOut();
    });
});
