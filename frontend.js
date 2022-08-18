// Front end script by anupammondal.in


$(document).ready(function () {
    $('#new_card_dtls').inputmask({
        mask: '9999 9999 9999 9999',
        placeholder: ' ',
        "oncomplete": function () {
            $("#card-exp-dt").focus();
            $("#scroll-inputs").css( { marginLeft : "-50px" } );
        }
    });
    $('#card-exp-dt').inputmask({
        mask: '99/99',
        placeholder: ' ',
        "oncomplete": function () {
            $("#card-cvv").focus();
        }
    });
    $('#card-cvv').inputmask({
        mask: '999',
        placeholder: ' ',
        "oncomplete": function () {
            $("#pills-profile-tab").focus();
        }
    });
    // 
    $("#new_card_dtls").focus(function () {
        $("#card-ico-1").attr("src", "master_card.jpg");
    });
    $("#card-exp-dt").focus(function () {
        $("#card-ico-1").attr("src", "master_card.jpg");
    });
    $("#card-cvv").focus(function () {
        $("#card-ico-1").attr("src", "card_cvv.jpg");
    });
});