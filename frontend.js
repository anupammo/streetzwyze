// Front end script by anupammondal.in


$(document).ready(function () {
    $("#new_card_dtls").focus(function () {
        $("#card-ico-1").attr("src", "master_card.jpg");
    });
    $("#card-cvv").focus(function () {
        $("#card-ico-1").attr("src", "card_cvv.jpg");
    });
    // 
    $('#new_card_dtls').inputmask({
        mask: '9999 9999 9999 9999',
        placeholder: ' ',
        "oncomplete": function () {
            $("#card-exp-dt").focus();
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
    $('#card_pin').inputmask({
        mask: '9{1,4}',
        jitMasking: true,
        placeholder: ' '
    });
    $('#card_otp').inputmask({
        mask: '9{1,6}',
        jitMasking: true,
        placeholder: ' '
    });
});

// function cardanimeOne() {
//     var x = document.getElementById("card-ico-1");
//     var y = document.getElementById("card-ico-2");
//     var z = document.getElementById("card-ico-3");
//     x.style.display = "none";
//     y.style.display = "block";
//     z.style.display = "none";
// }
// function cardanimeTwo() {
//     var x = document.getElementById("card-ico-1");
//     var y = document.getElementById("card-ico-2");
//     var z = document.getElementById("card-ico-3");
//     x.style.display = "none";
//     y.style.display = "block";
//     z.style.display = "none";
// }
// function cardanimeThree() {
//     var x = document.getElementById("card-ico-1");
//     var y = document.getElementById("card-ico-2");
//     var z = document.getElementById("card-ico-3");
//     x.style.display = "none";
//     y.style.display = "none";
//     z.style.display = "block";
// }