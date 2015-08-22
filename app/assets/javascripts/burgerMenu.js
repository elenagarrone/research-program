$(function() {
  var Menu = {
    
    el: {
      ham: $('.menu'),
      menuTop: $('.menu-top'),
      menuMiddle: $('.menu-middle'),
      menuBottom: $('.menu-bottom'),
      nav: $('.navigation'),
      main: $('.main'),
      menuLink: $('.navigation > ul > li > a')
    },
    
    init: function() {
      Menu.bindUIactions();
      Menu.deactivateMenu(Menu.el.main);
      Menu.deactivateMenu(Menu.el.menuLink);
    },
    
    bindUIactions: function() {
      Menu.el.ham
          .on('click', function(event) {
          Menu.activateMenu(event);
          Menu.toggleNav(event);
          event.preventDefault();
        }
      );
    },
    
    activateMenu: function() {
      Menu.el.menuTop.toggleClass('menu-top-click');
      Menu.el.menuMiddle.toggleClass('menu-middle-click');
      Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
    },

    toggleNav: function() {
      Menu.el.nav.toggleClass('is-active');
    },

    deactivateMenu: function(selector) {
      selector.on('click', function() {
        Menu.el.menuTop.removeClass('menu-top-click');
        Menu.el.menuMiddle.removeClass('menu-middle-click');
        Menu.el.menuBottom.removeClass('menu-bottom-click'); 
        Menu.el.nav.removeClass('is-active');
      });
    }
  };

  Menu.init();
});