
$(document).ready(function() {
    $('#submit').click(function(e) {

    var firstname = $('#fname').val();
    var lastname = $('#lname').val();
    var email = $('#email').val();

    var name_regex = /^[a-zA-Z]+$/;
    var email_regex = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

    if (!firstname.match(name_regex) || firstname.length == 0) {
    
    alert("First name can't be blank and must be words"); 
    $("#firstname").focus();
    return false;
    }

    else if (!lastname.match(name_regex) || lastname.length == 0) {
    alert("Last name can't be blank and must be words"); 
    $("#firstname").focus();
    return false;
    }

    // Validating Email Field.
    else if (!email.match(email_regex) || email.length == 0) {
    alert("Email can't be blank and must include xx@xxx.xx sign");
    $("#email").focus();
    return false;
    }
    });

    $('#job-indicator1').click(function(){
        var job1 = $('#job1');
        var job2 = $('#job2');
        var job3 = $('#job3');
        var clicked_indicator1 = $('#job-indicator1');
        var clicked_indicator2 = $('#job-indicator2');
        var clicked_indicator3 = $('#job-indicator3');
        
        job1.css("display","block");
        job2.css("display","none");
        job3.css("display","none");
        clicked_indicator2.css("background-color","gray");
        clicked_indicator3.css("background-color","gray");
        clicked_indicator1.css("background-color","#57B5FC");
    });

    $('#job-indicator2').click(function(){
        var job1 = $('#job1');
        var job2 = $('#job2');
        var job3 = $('#job3');
        var clicked_indicator1 = $('#job-indicator1');
        var clicked_indicator2 = $('#job-indicator2');
        var clicked_indicator3 = $('#job-indicator3');
        
        job1.css("display","none");
        job2.css("display","block");
        job3.css("display","none");
        clicked_indicator3.css("background-color","gray");
        clicked_indicator1.css("background-color","gray");
        clicked_indicator2.css("background-color","#57B5FC");
    });

    $('#job-indicator3').click(function(){
        var job1 = $('#job1');
        var job2 = $('#job2');
        var job3 = $('#job3');
        var clicked_indicator1 = $('#job-indicator1');
        var clicked_indicator2 = $('#job-indicator2');
        var clicked_indicator3 = $('#job-indicator3');
        
        job1.css("display","none");
        job2.css("display","none");
        job3.css("display","block");
        clicked_indicator1.css("background-color","gray");
        clicked_indicator2.css("background-color","gray");
        clicked_indicator3.css("background-color","#57B5FC");
    });

    $('#why-indicator1').click(function(){
        var why1 = $('#why1');
        var why2 = $('#why2');
        var why3 = $('#why3');
        var why4 = $('#why4');
        var clicked_indicator1 = $('#why-indicator1');
        var clicked_indicator2 = $('#why-indicator2');
        var clicked_indicator3 = $('#why-indicator3');
        var clicked_indicator4 = $('#why-indicator4');
        
        why1.css("display","block");
        why2.css("display","none");
        why3.css("display","none");
        why4.css("display","none");
        clicked_indicator1.css("background-color","white");
        clicked_indicator2.css("background-color","darkgray");
        clicked_indicator3.css("background-color","darkgray");
        clicked_indicator4.css("background-color","darkgray");
    });

    $('#why-indicator2').click(function(){
        var why1 = $('#why1');
        var why2 = $('#why2');
        var why3 = $('#why3');
        var why4 = $('#why4');
        var clicked_indicator1 = $('#why-indicator1');
        var clicked_indicator2 = $('#why-indicator2');
        var clicked_indicator3 = $('#why-indicator3');
        var clicked_indicator4 = $('#why-indicator4');
        
        why1.css("display","none");
        why2.css("display","block");
        why3.css("display","none");
        why4.css("display","none");
        clicked_indicator1.css("background-color","darkgray");    
        clicked_indicator3.css("background-color","darkgray");
        clicked_indicator4.css("background-color","darkgray");
        clicked_indicator2.css("background-color","white");
    });

    $('#why-indicator3').click(function(){
        var why1 = $('#why1');
        var why2 = $('#why2');
        var why3 = $('#why3');
        var why4 = $('#why4');
        var clicked_indicator1 = $('#why-indicator1');
        var clicked_indicator2 = $('#why-indicator2');
        var clicked_indicator3 = $('#why-indicator3');
        var clicked_indicator4 = $('#why-indicator4');
        
        why1.css("display","none");
        why2.css("display","none");
        why3.css("display","block");
        why4.css("display","none");
        clicked_indicator1.css("background-color","darkgray");    
        clicked_indicator4.css("background-color","darkgray");
        clicked_indicator2.css("background-color","darkgray");
        clicked_indicator3.css("background-color","white");
    });

    $('#why-indicator4').click(function(){
        var why1 = $('#why1');
        var why2 = $('#why2');
        var why3 = $('#why3');
        var why4 = $('#why4');
        var clicked_indicator1 = $('#why-indicator1');
        var clicked_indicator2 = $('#why-indicator2');
        var clicked_indicator3 = $('#why-indicator3');
        var clicked_indicator4 = $('#why-indicator4');
        
        why1.css("display","none");
        why2.css("display","none");
        why3.css("display","none");
        why4.css("display","block");
        clicked_indicator1.css("background-color","darkgray");   
        clicked_indicator2.css("background-color","darkgray");
        clicked_indicator3.css("background-color","darkgray");
        clicked_indicator4.css("background-color","white");
    });

    $('#job-indicator-w1').click(function(){
        var job1 = $('.job-row1');
        var job2 = $('.job-row2');
        var job3 = $('.job-row3');
        var job4 = $('.job-row4');
        var job4 = $('.job-row5');
        var clicked_indicator1 = $('#job-indicator-w1');
        var clicked_indicator2 = $('#job-indicator-w2');
        var clicked_indicator3 = $('#job-indicator-w3');
        var clicked_indicator4 = $('#job-indicator-w4');
        var clicked_indicator5 = $('#job-indicator-w5');
        
        clicked_indicator2.css("background-color","darkgray");
        clicked_indicator3.css("background-color","darkgray");
        clicked_indicator4.css("background-color","darkgray");
        clicked_indicator5.css("background-color","darkgray");
        clicked_indicator1.css("background-color","black");
        job1.css("display","block");
        job2.css("display","none");
        job3.css("display","none");
        job4.css("display","none");
        job5.css("display","none");        
    });

    $('#job-indicator-w2').click(function(){       
        var job1 = $('.job-row1');
        var job2 = $('.job-row2');
        var job3 = $('.job-row3');
        var job4 = $('.job-row4');
        var job4 = $('.job-row5');
        var clicked_indicator1 = $('#job-indicator-w1');
        var clicked_indicator2 = $('#job-indicator-w2');
        var clicked_indicator3 = $('#job-indicator-w3');
        var clicked_indicator4 = $('#job-indicator-w4');
        var clicked_indicator5 = $('#job-indicator-w5');
        
        clicked_indicator3.css("background-color","darkgray");
        clicked_indicator4.css("background-color","darkgray");
        clicked_indicator5.css("background-color","darkgray");
        clicked_indicator1.css("background-color","darkgray");
        clicked_indicator2.css("background-color","black");
        job1.css("display","none");
        job2.css("display","block");
        job3.css("display","none");
        job4.css("display","none");
        job5.css("display","none");       
    });

    $('#job-indicator-w3').click(function(){
        var job1 = $('.job-row1');
        var job2 = $('.job-row2');
        var job3 = $('.job-row3');
        var job4 = $('.job-row4');
        var job5 = $('.job-row5');
        var clicked_indicator1 = $('#job-indicator-w1');
        var clicked_indicator2 = $('#job-indicator-w2');
        var clicked_indicator3 = $('#job-indicator-w3');
        var clicked_indicator4 = $('#job-indicator-w4');
        var clicked_indicator5 = $('#job-indicator-w5');
        
        job1.css("display","none");
        job2.css("display","none");
        job3.css("display","block");
        job4.css("display","none");
        job5.css("display","none");
        clicked_indicator4.css("background-color","darkgray");
        clicked_indicator5.css("background-color","darkgray");
        clicked_indicator1.css("background-color","darkgray");   
        clicked_indicator2.css("background-color","darkgray");
        clicked_indicator3.css("background-color","black");
    });

    $('#job-indicator-w4').click(function(){
        var job1 = $('.job-row1');
        var job2 = $('.job-row2');
        var job3 = $('.job-row3');
        var job4 = $('.job-row4');
        var job5 = $('.job-row5');
        var clicked_indicator1 = $('#job-indicator-w1');
        var clicked_indicator2 = $('#job-indicator-w2');
        var clicked_indicator3 = $('#job-indicator-w3');
        var clicked_indicator4 = $('#job-indicator-w4');
        var clicked_indicator5 = $('#job-indicator-w5');
        
        job1.css("display","none");
        job2.css("display","none");
        job3.css("display","none");
        job4.css("display","block");
        job5.css("display","none");
        clicked_indicator5.css("background-color","darkgray");
        clicked_indicator1.css("background-color","darkgray");   
        clicked_indicator2.css("background-color","darkgray");
        clicked_indicator3.css("background-color","darkgray");
        clicked_indicator4.css("background-color","black");
    });

    $('#job-indicator-w5').click(function(){
        var job1 = $('.job-row1');
        var job2 = $('.job-row2');
        var job3 = $('.job-row3');
        var job4 = $('.job-row4');
        var job5 = $('.job-row5');
        var clicked_indicator1 = $('#job-indicator-w1');
        var clicked_indicator2 = $('#job-indicator-w2');
        var clicked_indicator3 = $('#job-indicator-w3');
        var clicked_indicator4 = $('#job-indicator-w4');
        var clicked_indicator5 = $('#job-indicator-w5');
        
        job1.css("display","none");
        job2.css("display","none");
        job3.css("display","none");
        job4.css("display","none");
        job5.css("display","block");
        clicked_indicator1.css("background-color","darkgray");   
        clicked_indicator2.css("background-color","darkgray");
        clicked_indicator3.css("background-color","darkgray");
        clicked_indicator4.css("background-color","darkgray");
        clicked_indicator5.css("background-color","black");
    });

    });