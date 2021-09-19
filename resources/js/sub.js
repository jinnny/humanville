var $title, $ele;
var _init = function() {
  $ele = $('.sub-content-header');
  $title = $ele.find('.sub-content__title');
  $titleEng = $ele.find('.sub-content__title-english');

  var mySplitText = new SplitText($title, { type: "chars" });
  var shuffleCharArray = shuffleArray(mySplitText.chars);
  var mySplitEng = new SplitText($titleEng, { type: "chars" });
  var shuffleCharArrayEng = shuffleArray(mySplitEng.chars);


  TweenLite.set(shuffleCharArray, { autoAlpha: 0 });
  TweenLite.set(shuffleCharArrayEng, { autoAlpha: 0 });

  tl = new TimelineLite();
  tl.staggerTo(shuffleCharArray, .8, { delay: 1.5, autoAlpha: 1, ease: Cubic.easeOut }, 0.2)
  tl.staggerTo(shuffleCharArrayEng, .5, { delay: 0, autoAlpha: 1, ease: Cubic.easeOut }, 0.1)
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
