var $title, $ele;
var _init = function() {
  $ele = $('.sub-top-area');
  $title = $ele.find('.sub-top__title');

  var mySplitText = new SplitText($title, { type: "chars" });
  var shuffleCharArray = shuffleArray(mySplitText.chars);

  TweenLite.set(shuffleCharArray, { autoAlpha: 0 });

  tl = new TimelineLite();
  tl.staggerTo(shuffleCharArray, .8, { delay: 1, autoAlpha: 1, ease: Cubic.easeOut }, 0.2)
  tl.play();
  tl.timeScale(1.5);

  function shuffleArray (array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  $('.js-header').addClass('sub')
}
$(function () {
  _init()

  AOS.init({
    duration: 1000
  });
})
