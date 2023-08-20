let mainMenu = $('.main_menu>li');
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
slide.eq(currentIdx).fadeIn();
setInterval(showNextSlide, 3000);

function showNextSlide() {
  let nextIdx = (currentIdx + 1) % slideCount;
  slide.eq(currentIdx).fadeOut();
  slide.eq(nextIdx).fadeIn();
  currentIdx = nextIdx;
}

let tabMenu = $('.tabmenu li');
let tabContent = $('.tabcontent > div');
tabMenu.click(function (e) {
  e.preventDefault();
  tabMenu.removeClass('active');
  $(this).addClass('active');

  let target = $(this).find('a').attr('href');
  tabContent.removeClass('active');
  $(target).addClass('active');
});

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