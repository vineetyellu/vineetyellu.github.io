$(document).ready(function() {
  $("#fill1").mouseover(function(){
      $("#pic1").fadeTo(200, 0.10);
      $("#ranking1").fadeTo(200, 1);
      $("#distance1").fadeTo(200, 1);
    });
  $("#fill1").mouseleave(function(){
      $("#pic1").fadeTo(200, 1);
      $("#ranking1").fadeTo(200, 0);
      $("#distance1").fadeTo(200, 0);
    });
  $("#fill2").mouseover(function(){
      $("#pic2").fadeTo(200, 0.10);
      $("#ranking2").fadeTo(200, 1);
      $("#distance2").fadeTo(200, 1);
    });
  $("#fill2").mouseleave(function(){
      $("#pic2").fadeTo(200, 1);
      $("#ranking2").fadeTo(200, 0);
      $("#distance2").fadeTo(200, 0);
    });
  $("#fill3").mouseover(function(){
      $("#pic3").fadeTo(200, 0.10);
      $("#ranking3").fadeTo(200, 1);
      $("#distance3").fadeTo(200, 1);
    });
  $("#fill3").mouseleave(function(){
      $("#pic3").fadeTo(200, 1);
      $("#ranking3").fadeTo(200, 0);
      $("#distance3").fadeTo(200, 0);
    });
  $("#fill4").mouseover(function(){
      $("#pic4").fadeTo(200, 0.10);
      $("#ranking4").fadeTo(200, 1);
      $("#distance4").fadeTo(200, 1);
    });
  $("#fill4").mouseleave(function(){
      $("#pic4").fadeTo(200, 1);
      $("#ranking4").fadeTo(200, 0);
      $("#distance4").fadeTo(200, 0);
    });
  $("#fill5").mouseover(function(){
      $("#pic5").fadeTo(200, 0.10);
      $("#ranking5").fadeTo(200, 1);
      $("#distance5").fadeTo(200, 1);
    });
  $("#fill5").mouseleave(function(){
      $("#pic5").fadeTo(200, 1);
      $("#ranking5").fadeTo(200, 0);
      $("#distance5").fadeTo(200, 0);
    });
  $("#fill6").mouseover(function(){
      $("#pic6").fadeTo(200, 0.10);
      $("#ranking6").fadeTo(200, 1);
      $("#distance6").fadeTo(200, 1);
    });
  $("#fill6").mouseleave(function(){
      $("#pic6").fadeTo(200, 1);
      $("#ranking6").fadeTo(200, 0);
      $("#distance6").fadeTo(200, 0);
    });
  $("#fill7").mouseover(function(){
      $("#pic7").fadeTo(200, 0.10);
      $("#ranking7").fadeTo(200, 1);
      $("#distance7").fadeTo(200, 1);
    });
  $("#fill7").mouseleave(function(){
      $("#pic7").fadeTo(200, 1);
      $("#ranking7").fadeTo(200, 0);
      $("#distance7").fadeTo(200, 0);
    });
  $("#fill8").mouseover(function(){
      $("#pic8").fadeTo(200, 0.10);
      $("#ranking8").fadeTo(200, 1);
      $("#distance8").fadeTo(200, 1);
    });
  $("#fill8").mouseleave(function(){
      $("#pic8").fadeTo(200, 1);
      $("#ranking8").fadeTo(200, 0);
      $("#distance8").fadeTo(200, 0);
    });
  $("#house").click(function(){
      $(".pic").fadeTo(200, 0.1);
      $("#frat").removeClass("marked");
      $("#kickback").removeClass("marked");
      $("#invite").removeClass("marked");
      $("#public").removeClass("marked");
      if($("#house").hasClass("marked")){
        $("#house").removeClass("marked");
        $(".pic").fadeTo(200, 1);
      } else {
      $("#pic1").fadeTo(200, 1);
      $("#pic4").fadeTo(200, 1);
      $("#house").addClass("marked");
      }
    });
  $("#frat").click(function(){
      $(".pic").fadeTo(200, 0.1);
      $("#house").removeClass("marked");
      $("#kickback").removeClass("marked");
      $("#invite").removeClass("marked");
      $("#public").removeClass("marked");
      if($("#frat").hasClass("marked")){
        $("#frat").removeClass("marked");
        $(".pic").fadeTo(200, 1);
      } else {
      $("#pic2").fadeTo(200, 1);
      $("#pic5").fadeTo(200, 1);
      $("#pic7").fadeTo(200, 1);
      $("#frat").addClass("marked");
      }
    });
  $("#kickback").click(function(){
      $(".pic").fadeTo(200, 0.1);
      $("#house").removeClass("marked");
      $("#frat").removeClass("marked");
      $("#invite").removeClass("marked");
      $("#public").removeClass("marked");
      if($("#kickback").hasClass("marked")){
        $("#kickback").removeClass("marked");
        $(".pic").fadeTo(200, 1);
      } else {
      $("#pic3").fadeTo(200, 1);
      $("#pic6").fadeTo(200, 1);
      $("#pic8").fadeTo(200, 1);
      $("#kickback").addClass("marked");
      }
      });
  $("#invite").click(function(){
      $(".pic").fadeTo(200, 0.1);
      $("#house").removeClass("marked");
      $("#frat").removeClass("marked");
      $("#kickback").removeClass("marked");
      $("#public").removeClass("marked");
      if($("#invite").hasClass("marked")){
        $("#invite").removeClass("marked");
        $(".pic").fadeTo(200, 1);
      } else {
      $("#pic4").fadeTo(200, 1);
      $("#pic6").fadeTo(200, 1);
      $("#pic5").fadeTo(200, 1);
      $("#pic7").fadeTo(200, 1);
      $("#invite").addClass("marked");
      }
      });
  $("#public").click(function(){
      $(".pic").fadeTo(200, 0.1);
      $("#house").removeClass("marked");
      $("#frat").removeClass("marked");
      $("#kickback").removeClass("marked");
      $("#invite").removeClass("marked");
      if($("#public").hasClass("marked")){
        $("#public").removeClass("marked");
        $(".pic").fadeTo(200, 1);
      } else {
      $("#pic2").fadeTo(200, 1);
      $("#pic3").fadeTo(200, 1);
      $("#pic8").fadeTo(200, 1);
      $("#pic1").fadeTo(200, 1);
      $("#public").addClass("marked");
      }
      });

});
