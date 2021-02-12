$(function () {
    app.changeLang(sessionStorage.getItem("lang"));
    $('.zoom-image').hover(function() {	    
        $(this).siblings('.zoom-image').css('z-index', 10);
        $(this).css('z-index', 99);
        });

        $('.collapse').on('show.bs.collapse', function (e) {
            var id_collapse = $(this).attr("id");
            if(id_collapse === 'collapse5'){
            $('.skillbar').each(function(){
                $(this).find('.skillbar-bar').animate({
                    width:$(this).attr('data-percent')
                },3000);
            });
        }else{
            $('.skillbar').each(function(){
            $(this).find('.skillbar-bar').animate({
                width: '0%'
            },100);
        });
        }
        });

       
});

app.changeLang = function (lang) {
    if (lang === $Config.baseLang[0].shortName) {     
        sessionStorage.setItem("lang", lang);
        $("#btn_change_lang_th").css({ "background-color": "#28a745", "color": "white" });
        $("#btn_change_lang_en").css({ "background-color": "transparent", "color": "#28a745" });
        app.findMessageAndRender(sessionStorage.getItem("lang"));
    } else {
        sessionStorage.setItem("lang", lang);
        $("#btn_change_lang_en").css({ "background-color": "#28a745", "color": "white" });
        $("#btn_change_lang_th").css({ "background-color": "transparent", "color": "#28a745" });
        app.findMessageAndRender(sessionStorage.getItem("lang"));
    }
}

app.findMessageAndRender = function (lang) {
    $.getJSON("messagelocal/message_" + lang.toLowerCase() + ".json", function (json) {
        $('span[lang-code]').each(function () {
            $(this).text(json[$(this).attr("lang-code")]);
        });
    });
}