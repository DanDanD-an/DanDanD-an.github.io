  $('#rebox > a').rebox();

  $('.post > p >  img[alt]').replaceWith(function() {
    return '<div id="rebox" class="gallery">' + '<a href="' + $(this).attr('src') + '" title="' + $(this).attr('alt') + '">' + '<img src="' + $(this).attr('src') + '"/></a></div>';
  });
