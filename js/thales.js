
$(document).ready(function() {
    $('#submit').click(function(e) {

    var firstname = $('#fname').val();
    var lastname = $('#lname').val();
    var email = $('#email').val();

    var name_regex = /^[a-zA-Z]+$/;
    var email_regex = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

    if (!firstname.match(name_regex) || firstname.length == 0) {
    
    $('#p1').text("First name can't be blank and must be words").css({"color":"red","display":"block"}); 
    $("#firstname").focus();
    return false;
    }

    else if (!lastname.match(name_regex) || lastname.length == 0) {
    $('#p2').text("Last name can't be blank and must be words").css({"color":"red","display":"block"}); 
    $("#firstname").focus();
    return false;
    }

    // Validating Email Field.
    else if (!email.match(email_regex) || email.length == 0) {
    $('#p3').text("Email can't be blank and must include xx@xxx.xx sign").css({"color":"red","display":"block"});
    $("#email").focus();
    return false;
    }
    });
    });