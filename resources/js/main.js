$(function() {
  var mainSlide = function() {
    var $slick_main_ele = $('.main-slide')
    var $slick_nav_ele = $('.main-slide-nav')
    var $pagerProgressLine = $('.slick-control-area .controller-progress-line');
    var $pagerCurrentText = $('.slick-control-area .controller__current');
    var $pagerTotalText = $('.slick-control-area .controller__total');

    $slick_main_ele.on('init', function(event, slick){
      $pagerTotalText.text('0' + slick.slideCount);
      $pagerProgressLine.addClass('is--active')
    });

    $slick_main_ele.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 4000,
      asNavFor: '.main-slide-nav',
      draggable: false
    });

    $slick_main_ele.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      $pagerProgressLine.removeClass('is--active')
      $pagerCurrentText.text('0' + (nextSlide+1));
    });

    $slick_main_ele.on('afterChange',function(){
      $pagerProgressLine.addClass('is--active')
    });

    $slick_nav_ele.slick({
      slidesToScroll: 1,
      asNavFor: '.main-slide',
      arrows: false,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 4000,
      variableWidth: true,
      dots: true,
      focusOnSelect: true
    });

    $('.js-controller__button-prev').on('click', function (){
      $slick_main_ele.slick('slickPrev')
    })
    $('.js-controller__button-next').on('click', function (){
      $slick_main_ele.slick('slickNext')
    })
  }

  mainSlide()

  AOS.init({
    duration: 1000
  });
})
