/**
 * Created by elya on 09-Mar-16.
 */
$("document").ready(function() {

    $("#start").click(function(){
        $(".budget").show(1000);
        $(".gallery").hide(1000);
    });
    $("#home").click(function(){
        $(".gallery").show(1000);
        $(".budget").hide(1000);
    });
    rangeSlider();
})

//making range slider responsive
var rangeSlider = function(){
    var slider = $('.slider'),
        range = $('.range'),
        value = $('.rangevalue');

    slider.each(function(){

        value.each(function(){
            var value = $(this).prev().attr('value');
            $(this).html(value);
        });

        range.on('input', function(){
            $(this).next(value).html(this.value);
        });
    });
}

