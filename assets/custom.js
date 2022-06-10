$(document).on('click', '.watch-video', function () {
    var title = $(this).text();
    var video_url = $(this).data('url');
    $('.video-popup--title').text(title);
    $('.video-popup').addClass('active');
    var video = `<iframe src="${video_url}?enablejsapi=1&autoplay=1" class="video-div" allow="autoplay; encrypted-media" allowfullscreen title=""></iframe>`;
    $('.video-popup--body').append(video);
});

$(document).on('click', '.icon-close', function(){
    $('.video-popup').removeClass('active');
    $('.video-popup--body').empty();
});

$(document).on('change', '#quantity', function(){
    var qty = $(this).val();
    $('input[name="properties[_picking_bundle_qty0]"]').val(qty);
    $('.bundle-qty').each(function(){
        $(this).val($(this).data('origin-qty') * qty);
    });
});