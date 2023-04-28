let mainMenu = $('.main_menu > li');

mainMenu.mouseover(function () {
  $(this).find('ul').stop().slideDown();
}).mouseout(function () {
  $(this).find('ul').stop().slideUp();
});

//슬라이드
let slideContainer = $('.slide_container');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let currentIdx = 0;

function autoSlide() {
  setInterval(function () {
    //3초마다 반복수행할 구문 시작
    nextIdx = (currentIdx + 1) % slideCount;
    slideContainer.animate({
      left: -100 * nextIdx + '%'
    });
    currentIdx = nextIdx;

  }, 3000)
}
autoSlide();

//팝업
let popupLink = $('.notice li:first');
let popup = $('#popup');
let popupCloseBtn = popup.find('.close');

popupLink.click(function (e) {
  e.preventDefault();
  popup.addClass('active');
});

popupCloseBtn.click(function () {
  popup.removeClass('active');
});