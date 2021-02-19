'use strict'

//jQuery version
$(document).ready(function () {
    $("#login").click(function () {
        let query = {
            id : $("#id").val(),
            pwd : $("#pwd").val()
        };

        $.ajax({
            type : 'post',
            url : '/fuck',
            data : query,
            success : function (data) {
                window.location.href('/fuck');
            }
        });
    });

    $("#logout").click(function () {
        $.ajax({
            type : 'post',
            url : 'fucking',
            success : function (data) {
                window.location.href('/fuckingJquery');
            }
        });
    });
});

//Vanilla js version
