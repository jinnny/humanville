$(function() {
  // 모바일메뉴 열기닫기
  $('.js-header-menu-button').on('click', function () {
    $(this).parents('.js-header').toggleClass('is--open');
  })
  $('.js-header-menu-close-button').on('click', function (){
    $(this).parents('.js-header').removeClass('is--open');
  })
  // // 모바일일 경우 2차메뉴 열기
  $('.header-menu__link').on('click', function (e){
    var parentLi = $(this).parents('li')
    var $curruntClass = parentLi.hasClass('is--open');
    if (parentLi.has('ul').length > 0) {
      e.preventDefault()
      $('.header-menu__item').removeClass('is--open')
      $('.header-menu__item ul').stop().slideUp()
      parentLi.addClass('is--open');
      parentLi.find('ul').stop().slideDown()
      if ($curruntClass) {
        parentLi.removeClass('is--open');
        parentLi.find('ul').stop().slideUp()
      }
    }
  })
});
