$('.facilities').countFacilities();

$('.click__additional-amenities').on('click', function () {
    $('.additional-amenities').css('display') == 'none' ? $('.additional-amenities').animate({height: 'show'}, 400) : $('.additional-amenities').animate({height: 'hide'}, 200);
});

$('.date-stay').datepicker({
    range: true
});