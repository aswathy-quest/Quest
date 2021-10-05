// code for 
(function($){"use strict";$(window).scroll(function(){var window_top=$(window).scrollTop()+1;if(window_top>50){$('.main_menu').addClass('menu_fixed animated fadeInDown');}else{$('.main_menu').removeClass('menu_fixed animated fadeInDown');}});if(document.getElementById('default-select')){$('select').niceSelect();}}(jQuery));










// var el = $('.menu_fixed');
// el.addClass('.logo-black');
// el.removeClass('.logo-white');





$('div').each(function() {
    if ($(this).hasClass("menu_fixed")) {
        $('.logo-white').css('display', 'none');
    }
});





// code for megamenu 
$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
});