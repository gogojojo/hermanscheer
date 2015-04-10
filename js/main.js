$(function(){
  $('.play').click(function(){
    $('object').attr('class','');
    $('.overlay').css("display","none")
  })
  $('#button').on('click', function(e){
      e.preventDefault();
      var target= $('#main');
      $('html, body').stop().animate({
         scrollTop: target.offset().top
      }, 2000);
  });
});