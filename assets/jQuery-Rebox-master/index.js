  $('#rebox > a').rebox();

  $('.post > .rebox >  img[alt]').replaceWith(function() {
    return '<figure>' + '<a href="' + $(this).attr('src') + '" id="rebox">' + '<img src="' + $(this).attr('src') + '"/></a>' + '<figcaption class="caption">' + $(this).attr('alt') + '</figcaption>' + '</figure>';
  });
