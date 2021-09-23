$(function() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  $(window).resize( function() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  var mainSlide = function(){
    var $slick_ele1 = $('.main-visual-content');

    $slick_ele1.on('init', function(event, slick){
      setTimeout(function() {
        $('.main-visual-content .slick-slide').eq(0).addClass('zoom-out')
      }, 100)
    });

    $slick_ele1.slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      fade:true,
      dots: true,
      pauseOnFocus: false
    });

    $slick_ele1.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      $('.main-visual-content .slick-slide').removeClass('zoom-out')
      $('.main-visual-content .slick-slide').eq(nextSlide).addClass('zoom-out')
    });
  }


  mainSlide()



  AOS.init({
    duration: 2000
  });
})
