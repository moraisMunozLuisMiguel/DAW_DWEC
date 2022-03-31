$(document).ready(function () {
    $('a').hover(function () {
        var titulo = $(this).attr('title'),
            fondo = $(this).data('fondo'); 
        $(this).data('titulo', titulo).removeAttr('title');
        $('<p class="tooltip"></p>')
            .text(titulo)
            .css('background-color', fondo)
            .appendTo('body')
            .fadeIn('slow');
    }, function () {
        $(this).attr('title', $(this).data('titulo'));
        $('.tooltip').remove();
    }).mousemove(function (e) {
        var ratonX = e.pageX + 20,
            ratonY = e.pageY + 10;
        $('.tooltip').css({
            top: ratonY,
            left: ratonX
        });
    });
});