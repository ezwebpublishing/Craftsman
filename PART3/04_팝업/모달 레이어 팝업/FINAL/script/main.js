let popupLink = $('.notice li:first');
let popup = $('#popup');
let popupCloseBtn = popup.find('.close');

popupLink.click(function(e){
    e.preventDefault();
    popup.addClass('active');
});
popupCloseBtn.click(function(){
    popup.removeClass('active');
});