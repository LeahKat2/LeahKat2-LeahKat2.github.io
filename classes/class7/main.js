/*click the button
the menu will slide in from the right -> change right to 20px
check if its on the page, move it off
if its off, move it on*/

$(function){

    var invisible = true;
    var myRight = "20px";

$("#clickme").on("click", function(){
    $("#menu").animate(
    {right: myRight},
    {queue: false, duration: 500, easing: "linear"}


    );

    if (invisible){
        myRight= "=1"
    }





$("#color_red)".prop("checked", true)
$("input"[name='myage']").val("18");
$("input[type='checkbox']").change(function(){
    //alert("the value is: ' + $(this).val());
$(this).next().css("color",$(this).val());



    //<div id="circle" data-color="hsl(0,50%,50%)">

    /*#circle::after{
    content: attr(data-color);

    }

     var s = "50";
     var l = "50";
     $("mycircle").css("background", "hsl(0, "+s+%, "+l+%)"); //hsl(4, 40%, 50%)
     $("#mycircle").data("color", "hsl(0, "+s+"%, "+l+"%)");*/

});

var mySlider1 = $("#saturation");
var mySlider2 = $("#lightness");
var myCircle = $("#circle");


$("#saturation, #lightness").on("change mousemove", function(){
    myCircle.css("background","hsl(0,"+mySlider1.val()+"%,"+mySlider2.val()+"%");
    myCircle.css("color","hsl(0,"+mySlider1.val()+"%,"+mySlider2.val()+"%");

});
});
