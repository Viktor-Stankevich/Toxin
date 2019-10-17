; (function ($) {
    $.fn.count = function (options) {
        let config = $.extend({}, options);

        return this.each(function () {
            $(this).on('click', function() {
                $('.countOne').css('display') == 'none' ? $('.countOne').animate({height: 'show'}, 400) : $('.countOne').animate({height: 'hide'}, 200);
            })

            $('<div/>',{
                class: 'countOne'
            }).appendTo('.count_guest')
            .css('width', 320 + 'px')
            .css('height', 159 + 'px')
            .css('background-color', '#fff')
            .css('position', 'relative');
                

            //Взрослые
            $('<div/>', {
                class: 'adult'
            }).appendTo('.countOne')
            .css('display', 'flex');

            $('<h3/>', {
                text: 'Взрослые'
            }).appendTo('.adult');

            $('<input/>', {
                type: 'button',
                class: 'plus_adult',
                value: '+'
            }).appendTo('.adult');

            $('<input/>', {
                class: 'result_adult',
                value: '0'
            }).appendTo('.adult');

            $('<input/>', {
                type: 'button',
                class: 'minus_adult',
                value: '-'
            }).appendTo('.adult');


            //Дети
            $('<div/>', {
                class: 'child'
            }).appendTo('.countOne')
            .css('display', 'flex');

            $('<h3/>', {
                text: 'Дети'
            }).appendTo('.child');

            $('<input/>', {
                type: 'button',
                class: 'plus_child',
                value: '+'
            }).appendTo('.child');

            $('<input/>', {
                class: 'result_child',
                value: '0'
            }).appendTo('.child');

            $('<input/>', {
                type: 'button',
                class: 'minus_child',
                value: '-'
            }).appendTo('.child');


            //Младенцы
            $('<div/>', {
                class: 'baby'
            }).appendTo('.countOne')
            .css('display', 'flex');

            $('<h3/>', {
                text: 'Младенцы'
            }).appendTo('.baby');

            $('<input/>', {
                type: 'button',
                class: 'plus_baby',
                value: '+'
            }).appendTo('.baby');

            $('<input/>', {
                class: 'result_baby',
                value: '0'
            }).appendTo('.baby');

            $('<input/>', {
                type: 'button',
                class: 'minus_baby',
                value: '-'
            }).appendTo('.baby');

            //Кнопки очистить и применить

            $('<div/>',{
                class: 'clear_aplly'
            }).appendTo('.countOne')
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
                let count_adult = 0;
                let count_child = 0;
                let count_baby = 0;
                $(".plus_adult").on('click', function() {   
                    count_adult++;
                    $(".result_adult").val(count_adult);
                    $('.count').val("Взрослые " + count_adult + " Дети " + count_child + " Младенцы " + count_baby);
                })
                $(".minus_adult").on('click', function() {   
                    if(count_adult > 0) {
                        count_adult--;
                }
                    $(".result_adult").val(count_adult);
                    $('.count').val("Взрослые " + count_adult + " Дети " + count_child + " Младенцы " + count_baby);
                })

              //Дети
                
                $(".plus_child").on('click', function() {   
                    count_child++;
                    $(".result_child").val(count_child);
                    $('.count').val("Взрослые " + count_adult + " Дети " + count_child + " Младенцы " + count_baby);
                })
                $(".minus_child").on('click', function() {   
                    if(count_child > 0) {
                        count_child--;
                }
                    $(".result_child").val(count_child);
                    $('.count').val("Взрослые " + count_adult + " Дети " + count_child + " Младенцы " + count_baby);
                })

                //Младенцы
                
                $(".plus_baby").on('click', function() {   
                    count_baby++;
                    $(".result_baby").val(count_baby);
                    $('.count').val("Взрослые " + count_adult + " Дети " + count_child + " Младенцы " + count_baby);
                })
                $(".minus_baby").on('click', function() {   
                    if(count_baby > 0) {
                        count_baby--;
                }
                    $(".result_baby").val(count_baby);
                    $('.count').val("Взрослые " + count_adult + " Дети " + count_child + " Младенцы " + count_baby);
                })

                //Функционал кнопок очистить и пременить
                $(".clear").on('click', function() {
                    count_adult = 0;
                    count_child = 0;
                    count_baby = 0;
                    $('.result_adult').val(0);
                    $('.result_child').val(0);
                    $('.result_baby').val(0);
                    $('.count').val("Взрослые " + 0 + "Дети " + 0 + "Младенцы " + 0);
                })

                $(".aplly").on('click', function() {
                    $(".countOne").hide();
                })

        })
    }
})(jQuery);