let slideContainer = $('.container');
let slide = slideContainer.find('.slide');
let slideCount = slide.length;
let currentIdx = 0;

slide.eq(currentIdx).fadeIn();
setInterval(showNextSlide, 3000);

function showNextSlide(){      
    let nextIdx = (currentIdx+1)%slideCount;
    slide.eq(currentIdx).fadeOut();
    slide.eq(nextIdx).fadeIn();
    currentIdx = nextIdx;
}

