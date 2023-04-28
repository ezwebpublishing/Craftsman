let mainMenu = $('nav > ul > li');
let suBMenu = mainMenu.find('ul');

mainMenu.mouseover(function () {
  suBMenu.stop().slideDown();
}).mouseout(function () {
  suBMenu.stop().slideUp();
});