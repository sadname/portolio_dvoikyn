// // Плавный скроллинг

// let arrowLink = $("#arrow-link").click(function() {
//     let _href = $(this).attr("href");
//     $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
//     return false;
// });

$(window).on('load',function(){
    $('#header').vide('video/coverr',
    {
        volume: 0.5,
        posterType: 'jpg'
    }
    );
});
