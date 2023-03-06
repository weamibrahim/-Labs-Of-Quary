// $(document).ready(function(){
//     $('#slider>li:gt(0)').hide();
//     var cl= setInterval(function() {
//         $('#slider > li:first')
//           .fadeOut(1000)
//           .next()
//           .fadeIn(1000)
//           .end()
//           .appendTo('#slider');
//       }, 3000);
//       $("#stop").on("click",function(){
//         clearInterval(cl)

//         });
//     })
$(document).ready(function(){
   var cl =setInterval(function(){
  $(".s1").fadeOut(1000)
  .next().fadeIn(1000)
.appendTo("#slider")




    },1000)
    $("#stop").on("click",function(){
          clearInterval(cl)
  })})