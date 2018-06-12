$('#rebox').rebox({ selector: 'a' })
    .on('rebox:open', function(e, rx){ console.log(e.type, rx); })
    .on('rebox:close', function(e, rx){ console.log(e.type, rx); })
    .on('rebox:goto', function(e, rx, i, $item, $img){ console.log(e.type, rx, i, $item, $img); });
