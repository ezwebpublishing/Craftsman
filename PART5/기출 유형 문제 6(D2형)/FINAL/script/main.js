//메뉴
let mainMenu = $('.main-menu > li');
mainMenu.mouseover(function () {
  $(this).find('ul').stop().slideDown();
}).mouseout(function () {
  $(this).find('ul').stop().slideUp();
});

//슬라이드
let slideContainer = $('.container'); /*①*/
let slide = slideContainer.find('.slide'); /*②*/
let slideCount = slide.length; /*③*/
let currentIdx = 0; /*④*/

function autoSlide() {
  setInterval(function () {
    /*⑤*/
    //3초마다 반복 수행할 구문 시작
    let nextIdx = (currentIdx + 1) % slideCount; /*⑥*/
    slideContainer.animate({
      left: -100 * nextIdx + '%' /*⑦*/
    });
    currentIdx = nextIdx; /*⑧*/
  }, 3000)
}
autoSlide();

//팝업
let popupLink = $('#notice li:first');
let popup = $('#popup');
let popupCloseBtn = popup.find('.close');
popupLink.click(function (e) {
  e.preventDefault();
  popup.addClass('active');
});
popupCloseBtn.click(function () {
  popup.removeClass('active');
});
