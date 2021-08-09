import $ from './lib/lib';

//$('button').on('click', function() {
//    $('div').eq(2).toggleClass('active');
//});

/* $('div').click(function() {
    console.log($(this).index());
}); */

//console.log($('div').eq(2).find('.more'));
//console.log($('.some').closest('.findme'));
//console.log($('.more').eq(0).siblings());
//$('button').fadeOut(1800);
//$('button').fadeIn(1800);

//console.log($('button').html());

/* function sayHello() {
    console.log('Hello!');
}
 */

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});