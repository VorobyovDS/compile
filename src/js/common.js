/*
 * Third party
 */
//= ../../bower_components/vue/dist/vue.min.js
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


function reversInput(Element) {
     Element.classList.add('method__input_revers');
     Element.previousElementSibling.classList.add('method__input-text_revers');

};


window.onscroll = function () {
    parallaxScroll()
};

function parallaxScroll(){
    var SettingsScrolled = {
        scrolled:window.pageYOffset || document.documentElement.scrollTop,
        speed: 0.008,
        elements: {
            name:{
            s1:document.getElementsByClassName('header__decoration_s1'),
            s2:document.getElementsByClassName('header__decoration_s2'),
            s3:document.getElementsByClassName('header__decoration_s3'),
            s4:document.getElementsByClassName('header__decoration_s4'),
            b1:document.getElementsByClassName('header__decoration_b1'),
            b2:document.getElementsByClassName('header__decoration_b2')
            },
            main_settings_top:{
                s1:43,
                s2:7,
                s3:18,
                s4:33,
                b1:30,
                b2:11
            }
        },
        hightScroll:function () {
            var hight=SettingsScrolled.scrolled*SettingsScrolled.speed;
            if (hight>1) {
                hight=1
            }
            return hight
        }
    };
    // ниже идет сверх ужасная вещь, не могу что-то сообразить как сделать лучше, нужно как то перебирать красиво значения
    var i;
    for(i=0; i<SettingsScrolled.elements.name.s1.length; i++)SettingsScrolled.elements.name.s1[i].style.top=SettingsScrolled.elements.main_settings_top.s1+SettingsScrolled.hightScroll()+'vh';
    for(i=0; i<SettingsScrolled.elements.name.s2.length; i++)SettingsScrolled.elements.name.s2[i].style.top=SettingsScrolled.elements.main_settings_top.s2+SettingsScrolled.hightScroll()+'vh';
    for(i=0; i<SettingsScrolled.elements.name.s3.length; i++)SettingsScrolled.elements.name.s3[i].style.top=SettingsScrolled.elements.main_settings_top.s3+SettingsScrolled.hightScroll()+'vh';
    for(i=0; i<SettingsScrolled.elements.name.s4.length; i++)SettingsScrolled.elements.name.s4[i].style.top=SettingsScrolled.elements.main_settings_top.s4+SettingsScrolled.hightScroll()+'vh';
    for(i=0; i<SettingsScrolled.elements.name.b1.length; i++)SettingsScrolled.elements.name.b1[i].style.top=SettingsScrolled.elements.main_settings_top.b1+SettingsScrolled.hightScroll()+'vh';
    for(i=0; i<SettingsScrolled.elements.name.b2.length; i++)SettingsScrolled.elements.name.b2[i].style.top=SettingsScrolled.elements.main_settings_top.b2+SettingsScrolled.hightScroll()+'vh';

};
//-------------------копирование-в-буфер---Clipboard.js---------------------------

function CopyButton (e) {
    var clickId = e.id;
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
};
