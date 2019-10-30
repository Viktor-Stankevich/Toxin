; (function ($) {
    $.fn.countFacilities = function (options) {
        let config = $.extend({}, options);

        return this.each(function () {
            $(this).on('click', function() {
                $('.countTwo').css('display') == 'none' ? $('.countTwo').animate({height: 'show'}, 400) : $('.countTwo').animate({height: 'hide'}, 200);
            })

            $('<div/>',{
                class: 'countTwo'
            }).appendTo('.count__facilities')
            .css('width', 266 + 'px')
            .css('height', 159 + 'px')
            .css('background-color', '#fff')
            .css('position', 'relative');
                

            //Взрослые
            $('<div/>', {
                class: 'bedroom'
            }).appendTo('.countTwo')
            .css('display', 'flex');

            $('<h3/>', {
                text: 'спальни'
            }).appendTo('.bedroom');

            $('<input/>', {
                type: 'button',
                class: 'plus_bedroom',
                value: '+'
            }).appendTo('.bedroom');

            $('<input/>', {
                class: 'result_bedroom',
                value: '0'
            }).appendTo('.bedroom');

            $('<input/>', {
                type: 'button',
                class: 'minus_bedroom',
                value: '-'
            }).appendTo('.bedroom');


            //кровати
            $('<div/>', {
                class: 'bed'
            }).appendTo('.countTwo')
            .css('display', 'flex');

            $('<h3/>', {
                text: 'кровати'
            }).appendTo('.bed');

            $('<input/>', {
                type: 'button',
                class: 'plus_bed',
                value: '+'
            }).appendTo('.bed');

            $('<input/>', {
                class: 'result_bed',
                value: '0'
            }).appendTo('.bed');

            $('<input/>', {
                type: 'button',
                class: 'minus_bed',
                value: '-'
            }).appendTo('.bed');


            //ванная комната
            $('<div/>', {
                class: 'bathroom'
            }).appendTo('.countTwo')
            .css('display', 'flex');

            $('<h3/>', {
                text: 'ванные комнаты'
            }).appendTo('.bathroom');

            $('<input/>', {
                type: 'button',
                class: 'plus_bathroom',
                value: '+'
            }).appendTo('.bathroom');

            $('<input/>', {
                class: 'result_bathroom',
                value: '0'
            }).appendTo('.bathroom');

            $('<input/>', {
                type: 'button',
                class: 'minus_bathroom',
                value: '-'
            }).appendTo('.bathroom');

            //Кнопки очистить и применить

            $('<div/>',{
                class: 'clear_aplly'
            }).appendTo('.countTwo')
            .css('display', 'flex');

            $('<input/>', {
                class: 'clear',
                value: 'очистить'
            }).appendTo('.clear_aplly');

            $('<input/>', {
                class: 'aplly',
                value: 'применить'
            }).appendTo('.clear_aplly');




            //Функционал
                //Взрослые
                let count_bedroom = 0;
                let count_bed = 0;
                let count_bathroom = 0;
                $(".plus_bedroom").on('click', function() {   
                    count_bedroom++;
                    $(".result_bedroom").val(count_bedroom);
                    $('.facilities').val("спальни " + count_bedroom + " кровати " + count_bed + " ванные комнаты " + count_bathroom);
                })
                $(".minus_bedroom").on('click', function() {   
                    if(count_bedroom > 0) {
                        count_bedroom--;
                }
                    $(".result_bedroom").val(count_bedroom);
                    $('.facilities').val("спальни " + count_bedroom + " кровати " + count_bed + " ванные комнаты " + count_bathroom);
                })

              //кровати
                
                $(".plus_bed").on('click', function() {   
                    count_bed++;
                    $(".result_bed").val(count_bed);
                    $('.facilities').val("спальни " + count_bedroom + " кровати " + count_bed + " ванная комната " + count_bathroom);
                })
                $(".minus_bed").on('click', function() {   
                    if(count_bed > 0) {
                        count_bed--;
                }
                    $(".result_bed").val(count_bed);
                    $('.facilities').val("спальни " + count_bedroom + " кровати " + count_bed + " ванная комната " + count_bathroom);
                })

                //ванная комната
                
                $(".plus_bathroom").on('click', function() {   
                    count_bathroom++;
                    $(".result_bathroom").val(count_bathroom);
                    $('.facilities').val("спальни " + count_bedroom + " кровати " + count_bed + " ванная комната " + count_bathroom);
                })
                $(".minus_bathroom").on('click', function() {   
                    if(count_bathroom > 0) {
                        count_bathroom--;
                }
                    $(".result_bathroom").val(count_bathroom);
                    $('.facilities').val("спальни " + count_bedroom + " кровати " + count_bed + " ванная комната " + count_bathroom);
                })

                //Функционал кнопок очистить и пременить
                $(".clear").on('click', function() {
                    count_bedroom = 0;
                    count_bed = 0;
                    count_bathroom = 0;
                    $('.result_bedroom').val(0);
                    $('.result_bed').val(0);
                    $('.result_bathroom').val(0);
                    $('.facilities').val("спальни " + 0 + "кровати " + 0 + "ванная комната " + 0);
                })

                $(".aplly").on('click', function() {
                    $(".countTwo").hide();
                })

        })
    }
})(jQuery);