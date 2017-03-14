/*click the button
the menu will slide in from the right -> change right to 20px
check if it's on the page, move it off
if its off, move it on*/

$(function(){

    var invisible = true;
    var myRight = "20px";

    $("#clickme").on("click", function(){
      $("#menu").animate(
        {right: myRight},
        {queue: false, duration: 500, easing: "linear"}



      );

        if (invisible){
            myRight = "-100px";
            invisible = false;
        }else{
            myRight = "20px";
            invisible = true;

        }

    });


});
