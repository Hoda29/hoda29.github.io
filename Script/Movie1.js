/* Menu_Button_Fixed_When_Scroll */
$(window).scroll(function() {
    if($(document).scrollTop() > 20) {
        $('.navigation').addClass('fix-icon');
    }
    else{
        $('.navigation').removeClass('fix-icon');
    }
});
/* popup_open */
$(document).on('click', '.play-btn a', function() {
    $('.play').addClass('active-popup');
});
/* popup_Close */
$(document).on('click', '.close-movie', function() {
    $('.play').removeClass('active-popup');
});
/* auto_play_When_popup_Open */
$('.play-btn a').click(function() {
    $('.#m-video')[0].play();
});
/* Close_Video_When_popup_close */
$('.close-movie').click(function() {
    $('.#m-video')[0].pause();
});