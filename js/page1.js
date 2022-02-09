$(document).ready(function () {
    "use strict"
    const $header = $('.header'), 
          $btnMenu = $('.mobile-menu'),
          $hideMenu = $('.hide-menu'),
          $bookHover = $('.book-hover');
    // Book Cover effect
    $bookHover.click(function () {
      $bookHover.toggleClass('active');
    });
    // Mobile Menu
    $btnMenu.click(function () {
      $header.toggleClass('active');
      
      if ($header.hasClass('active')) {
        $hideMenu.addClass('active');
      }
      else {
        $hideMenu.removeClass('active');
      }
    });
    $hideMenu.click(function () {
      $header.removeClass('active');
      $hideMenu.removeClass('active');
    });
  });