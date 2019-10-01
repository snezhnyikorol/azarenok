var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 100
    }, 500);

    return false;
});

let menuState = false;

$('.menu_btn').click(function () {
  menuState = !menuState;
  if (menuState) {
    $('.map_wrapper').animate({right: '0px'}, 500, function () {
      $('.substrate').animate({opacity: '0.5'}, 200)
    })
  }
})

$('.map_close').click(function () {
  menuState = !menuState;
  if (!menuState) {
    $('.substrate').animate({opacity: '0'}, 200, function () {
      $('.map_wrapper').animate({right: '-3000px'}, 500)
    })
  }
})

$('.substrate').click(function () {
  menuState = !menuState;
  if (!menuState) {
    $('.substrate').animate({opacity: '0'}, 200, function () {
      $('.map_wrapper').animate({right: '-3000px'}, 500)
    })
  }
})

$('.map_item').click(function () {
  menuState = !menuState;
  if (!menuState) {
    $('.substrate').animate({opacity: '0'}, 200, function () {
      $('.map_wrapper').animate({right: '-3000px'}, 500)
    })  
  }
})
