let mainMenu = $('nav > ul > li');
let subMenu = mainMenu.find('ul');
let header = $('header');

mainMenu.mouseover(function () {
  header.addClass('active');
  subMenu.stop().slideDown();
}).mouseout(function () {
  header.removeClass('active');
  subMenu.stop().slideUp();
});