$(function () {
    app.changeLang(app.lang);
});

app.changeLang = function (lang) {
    if (lang === $Config.baseLang[0].shortName) {
        app.lang = lang;
        $("#btn_change_lang_th").css({ "background-color": "#28a745", "color": "white" });
        $("#btn_change_lang_en").css({ "background-color": "transparent", "color": "#28a745" });
        app.findMessageAndRender(app.lang);
    } else {
        app.lang = lang;
        $("#btn_change_lang_en").css({ "background-color": "#28a745", "color": "white" });
        $("#btn_change_lang_th").css({ "background-color": "transparent", "color": "#28a745" });
        app.findMessageAndRender(app.lang);
    }
}

app.findMessageAndRender = function (lang) {
    $.getJSON("messagelocal/message_" + lang.toLowerCase() + ".json", function (json) {
        $('span[lang-code]').each(function () {
            $(this).text(json[$(this).attr("lang-code")]);
        });
    });
}