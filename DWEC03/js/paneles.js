$(document).ready(function () {
    $('.panel__contenido').first().slideDown()
    
    $('.panel__cabecera').on('click', function (evt) {
        evt.preventDefault();
        $('.panel__contenido').not(this).each(function () {
           $(this).slideUp();
        });
        $(this).siblings('.panel__contenido').slideToggle();
    });
});