$(function () {
  $('.header').addClass('sub')
  $('.sub-content-header, .sub-top-menu').addClass('is--active')

  AOS.init({
    duration: 1000
  });

  $('.js-sub-menu-depth').on('click', function () {
    $(this).toggleClass('is--active')
  })
})
