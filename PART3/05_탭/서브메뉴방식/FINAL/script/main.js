let tabMenu = $('.tabmenu li');
let tabContent = $('.tabcontent > div');

tabMenu.click(function(e){
    e.preventDefault();
    tabMenu.removeClass('active');
    $(this).addClass('active');  
});