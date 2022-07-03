$(function () {
  const $button = $('.js--button');
  const $gallery = $('.js--gallery');

  $('.small a').on('click', function (e) {
    if ($('.big img').attr('src') !== $(this).attr('href')) {
      $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000);
    }
    e.preventDefault();
  });

  $button.on('click', function () {
    $gallery.slideToggle(500);
    if ($button.text() === '-') {
      $button.text('+')
    } else {
      $button.text('-');
    }
  });

  $('.small a img').on('click', function () {
    $('.small a img').fadeTo(300, 1).css({
      'border': 'none',
    });
    $(this).fadeTo(300, 0.6).css({
      'border': '1px dotted red',
    });
  });

});