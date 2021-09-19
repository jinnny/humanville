$(function() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  $(window).resize( function() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  var mainSlide = function(){
    var $slick_ele1 = $('.main-visual-content');

    $slick_ele1.slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 2000,
      fade:true,
      dots: true,
      pauseOnFocus: false
    });
  }


  mainSlide()



  AOS.init({
    duration: 2000
  });
})
