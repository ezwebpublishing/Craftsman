let mainMenu = $('aside nav > ul > li');

mainMenu.mouseover(function(){
    $(this).find('ul').stop().slideDown();
}).mouseout(function(){
    $(this).find('ul').stop().slideUp();
});