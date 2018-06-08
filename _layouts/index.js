$(document).ready(function() {
  console.log('c');
  $('.post > p > img[alt]').replaceWith(function () {
    console.log('b');
    return '<figure>'
        + '<a href="' + $(this).attr('src') + '" class="mg-link">'
        + '<img src="' + $(this).attr('src') + '"/></a>'
        + '<figcaption class="caption">' + $(this).attr('alt') + '</figcaption>'
        + '</figure>';
  });

  $('.mg-link').magnificPopup({
    type: 'image',
    closeOnContentClick: true
  });
});
