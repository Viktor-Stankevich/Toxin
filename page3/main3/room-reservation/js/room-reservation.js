$('.room-reservation__date-arrival').datepicker({
    dateFormat: "dd.mm"
});
$('.room-reservation__date-departure').datepicker({
    dateFormat: "dd.mm"
});


let departure = $('.room-reservation__date-departure');
let arival = $('.room-reservation__date-arrival');




    
departure.on('blur', function() {
    let arivalResult = $('.room-reservation__date-arrival').val();
    let departureResult = $('.room-reservation__date-departure').val();
    let total = Math.ceil(departureResult - arivalResult);
    console.log(total);
    $('.dayX').html(total);
    $('.priceX').html(total * 9900);
    $('.resultX').html(total * 9900);
})

