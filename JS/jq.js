/**
 * Created by elya on 09-Mar-16.
 */
$("document").ready(function() {
    $(".all_wedding_things").hide();ף
    $(".all_about_us_things").hide();
    $("#start").click(function(){
        $(".budget").show(1000);
        $(".all_wedding_things").hide(1000);
        $(".gallery").hide(1000);
        $(".all_about_us_things").hide(1000);
    });
    $("#home").click(function(){
        $(".gallery").show(1000);
        $(".all_wedding_things").hide(1000);
        $(".budget").hide(1000);
        $(".all_about_us_things").hide(1000);
    });
    $("#my_wedding").click(function(){
        $(".all_wedding_things").show(1000);
        $(".gallery").hide(1000);
        $(".budget").hide(1000);
        $(".all_about_us_things").hide(1000);
    });
    $("#about_us").click(function(){
        $(".all_about_us_things").show(1000);
        $(".all_wedding_things").hide(1000);
        $(".gallery").hide(1000);
        $(".budget").hide(1000);
    });
    rangeSlider();
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

