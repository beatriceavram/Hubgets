$( function() {


var label = $('.label');
var cont1 = $('.cont1');
var error = $('.error');
var btn = $('button');
var form = $('form');

    $(form).on('submit', function(eve) {
        eve.preventDefault();

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validate() {

        var email = $("#email").val();

        if (validateEmail(email)) {
            //if email validation is ok

            $(cont1).removeClass('c-error');
            $(error).removeClass('c-validation').text(' ');
            $("#email").val(' ');

        } else {
            // if not
            $(cont1).addClass('c-error');
            $(error).addClass('c-validation').text('Invalid e-mail address');
        }
        return false;
    }
        validate();
    });
});