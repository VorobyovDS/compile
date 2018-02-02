/*
 * Third party
 */
//= ../../bower_components/vue/dist/vue.min.js
//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/clipboard/dist/clipboard.min.js
var path = new Vue({
    el: '.method',
    data: {
        less: {
            path:"domain.com/css/style.less",  //путь
            beforePath:"href=\"http://compilim.ru/v2c/less/?from_file=", //перед
            afterPath:"&ssl=off&min=off\" />" //после

        },
        scss: {
           path:"domain.com/css/style.scss",  //путь
           beforePath:"href=\"http://compiler.v2.axaple.com/c/scss/?from_file=", //перед
           afterPath:"&ssl=off&min=off\" />" //после
       },
        coffee: {
            path:"domain.com/js/script.coffee",  //путь
            beforePath:"src=\"http://compiler.v2.axaple.com/c/coffee/?from_file=", //перед
            afterPath:"&ssl=off&min=off\">" //после
        }
    }
});

//------------------------------

$(function () {
    $(".method__input").on("click", function (e) {
        $(this).addClass("method__input_revers");
        $(this).siblings(".method__input-text").addClass("method__input-text_revers");
    })
});

$(window).bind('scroll',function(e){
    parallaxScroll();
});
function parallaxScroll(){
    var SettingsScrolled = {
        scrolled:$(window).scrollTop(),
        speed: 0.008,
        hightScroll:function () {
            var hight=SettingsScrolled.scrolled*SettingsScrolled.speed;
            if (hight>1) {
                hight=1
            }
            else {
                hight=hight
            }
            return hight
        }
    };
    $('.header__decoration_s1').css('top',(43+(SettingsScrolled.hightScroll()))+'vh');
    $('.header__decoration_s2').css('top',(7+(SettingsScrolled.hightScroll()))+'vh');
    $('.header__decoration_s3').css('top',(18+(SettingsScrolled.hightScroll()))+'vh');
    $('.header__decoration_s4').css('top',(33+(SettingsScrolled.hightScroll()))+'vh');
    $('.header__decoration_b1').css('top',(30+(SettingsScrolled.hightScroll()))+'vh');
    $('.header__decoration_b2').css('top',(11+(SettingsScrolled.hightScroll()))+'vh');
};
//-------------------копирование-в-буфер---Clipboard.js---------------------------

$(function () {
    $(".method__button").on("click", function (e) {
        var clickId = $(this).prop('id');
        var target = "#"+clickId;
        var clipboard = new Clipboard(target);
        clipboard.on('success', function(e) {
            console.info('Action:', e.action);
            console.info('Text:', e.text);
            console.info('Trigger:', e.trigger);
            e.clearSelection();
        });
        clipboard.on('error', function(e) {
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });
    })
});


