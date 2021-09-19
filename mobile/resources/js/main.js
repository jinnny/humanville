$(function() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  $(window).resize( function() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  var mainSlide = function(){
    var $slick_ele1 = $('.main-visual-content');

    // $slick_ele1.on('init', function(slick){
    //   _bgMotion(0);
    // });

    $slick_ele1.slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 2000,
      fade:true,
      dots: true,
      focusOnSelect: false
    });



    // $slick_ele1.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //   _bgMotion(nextSlide);
    // });
    //
    // function _bgMotion(num){
    //   var $nextLi = $slick_ele1.find('.slick-slide').eq(num);
    //   TweenMax.set($('.main-text-img'), {autoAlpha:0, y:80});
    //   TweenMax.set($('.main-label-img'), {autoAlpha:0, y:80});
    //
    //   TweenMax.to($nextLi.find('.main-text-img'), 1, {delay:.3, autoAlpha:1, y:0, ease:Power2.easeOut});
    //   TweenMax.to($nextLi.find('.main-label-img'), 1, {delay:.6, autoAlpha:1, y:0, ease:Power2.easeOut});
    // }
  }


  mainSlide()



  AOS.init({
    duration: 2000
  });
})
