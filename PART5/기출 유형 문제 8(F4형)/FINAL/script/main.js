let mainMenu = $('nav > ul > li');
let subMenu = mainMenu.find('ul');
let header = $('header');

mainMenu.mouseover(function() {
  header.addClass('active');
  subMenu.stop().slideDown();
}).mouseout(function() {
  header.removeClass('active');
  subMenu.stop().slideUp();
});

//슬라이드
let slideContainer = $('.slideWrapper ul');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let currentIdx = 0;

function autoSlide() {
    setInterval(function() {
        //3초마다 반복수행 할 구문 시작  
        let nextIdx = (currentIdx + 1) % slideCount;
        slideContainer.animate({
            top: -350* nextIdx + 'px'
        });
        currentIdx = nextIdx;
    }, 3000)
}
autoSlide();

//팝업
let popupLink = $('#notice li:first');
let popup = $('#popup');
let popupCloseBtn = popup.find('.close');
popupLink.click(function(e) {
    e.preventDefault();
    popup.addClass('active');
});
popupCloseBtn.click(function() {
    popup.removeClass('active');
});