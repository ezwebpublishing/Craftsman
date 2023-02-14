let mainMenu = $('nav > ul > li');
let suBMenu = mainMenu.find('ul');

mainMenu.mouseover(function () {
    suBMenu.stop().slideDown();
}).mouseout(function () {
    suBMenu.stop().slideUp();
});

let slideContainer = $('.container');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let currentIdx = 0;

function autoSlide() {
    setInterval(function () {
        //3초마다 반복수행 할 구문 시작     
        let nextIdx = (currentIdx + 1) % slideCount;
        slideContainer.animate({
            marginTop: -300 * nextIdx + 'px'
        });
        currentIdx = nextIdx;
    }, 3000)
}
autoSlide();

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