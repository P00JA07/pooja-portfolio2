$(document).ready(function(){

  // Highlight card on hover
  $(".card").hover(
    function(){ // mouse enter
      $(this).css("box-shadow", "0 0 25px #0ff, 0 0 35px #ff6ec7");
      $(this).css("transform", "scale(1.03)");
    },
    function(){ // mouse leave
      $(this).css("box-shadow", "0 0 15px rgba(0,255,255,0.2)");
      $(this).css("transform", "scale(1)");
    }
  );

  // Smooth scroll if needed (for longer pages)
  $("a").click(function(e){
    let target = $(this).attr("href");
    if(target.startsWith("#")){
      e.preventDefault();
      $("html, body").animate({
        scrollTop: $(target).offset().top
      }, 800);
    }
  });

});

