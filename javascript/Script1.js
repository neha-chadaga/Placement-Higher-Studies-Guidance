var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
function validateStudentEmail() {

    var email = document.getElementById('email1').value;
    var result = email.match('[a-z]+.cs[0-9][0-9]@bmsce.ac.in');
    if (result == email) {
        return true;
    }
    else {
        return false;
    }

}


function validateStudentDetails() {
    if (validateStudentEmail() == true && document.getElementById('pwd').value != '') {
        location.replace("file:///C:/Users/Nikita/Desktop/HTML/Project/campus%20training/HTML%20CODE/Home.html?email1=ab%4021&pwd=lkj");
        return true;
    }
    else {
        alert('Email Format is invalid or password field is empty');
        location.replace("file:///C:/Users/Nikita/Desktop/HTML/Project/campus%20training/HTML%20CODE/login.html")
    }

}

function validateInstructorEmail() {

    var email = document.getElementById('insemail').value;
    var result = email.match('[a-z]+.cs[0-9][0-9]@bmsce.ac.in');
    if (result == email) {
        return true;
    }
    else {
        return false;
    }


}

function validateInstructorDetails() {
    if (validateInstructorEmail() == true) {
        location.replace("file:///C:/Users/Nikita/Desktop/HTML/Project/campus%20training/HTML%20CODE/Admin-Instructor.html")
        return true;
    }
    else {
        alert('Email Format is invalid ');
        location.replace("file:///C:/Users/Nikita/Desktop/HTML/Project/campus%20training/HTML%20CODE/Instructor%20sign%20up.html")


    }
}

function validateAdminEmail() {

    var email = document.getElementById('adminemail').value;
    var result = email.match('[a-z]+.cse@bmsce.ac.in');
    if (result == email) {
        return true;
    }
    else {
        return false;
    }
}

function validateAdminDetails() {
    if (validateAdminEmail() == true) {
        location.replace("file:///C:/Users/Nikita/Desktop/HTML/Project/campus%20training/HTML%20CODE/Admin-Instructor.html")
        return true;
    }
    else {
        alert('Email Format is invalid ');
        location.replace("file:///C:/Users/Nikita/Desktop/HTML/Project/campus%20training/HTML%20CODE/signupadmin.html")


    }
}

function check_name() {
    var x = document.getElementById("name").value;
    var nameError = document.getElementById('name-field');
    if (x == "")   /*Checking if user input an empty string*/ {
        nameError.style.display = 'block';
        return false;
    } else {
        nameError.style.display = 'none';
        return true;
    }
}
function check_usn() {
    var t = document.getElementById("usn").value;
    var usn1 = t.match('[0-9][A-Z][A-Z][0-9][0-9][A-Z][A-Z][0-9][0-9][0-9]');
    var UsnError = document.getElementById('usn-field');
    var us = /^[0-9a-zA-Z]+$/;   /*Checking if USN is a valid alphanumeric String*/
    if (usn1 == t) {
        UsnError.style.display = 'none';
        return true;  /*If valid,continue*/
    }
    else {
        UsnError.style.display = 'block';
        return false;                      /*If USN is not valid,then requesting user to enter valid USN*/
    }
}
function check_usn1() {
    var t = document.getElementById("fusn").value;
    var usn1 = t.match('[0-9][A-Z][A-Z][0-9][0-9][A-Z][A-Z][0-9][0-9][0-9]');
    var UsnError = document.getElementById('usn-field1');
    var us = /^[0-9a-zA-Z]+$/;   /*Checking if USN is a valid alphanumeric String*/
    if (usn1 == t) {
        UsnError.style.display = 'none';
        return true;  /*If valid,continue*/
    }
    else {
        UsnError.style.display = 'block';
        return false;                      /*If USN is not valid,then requesting user to enter valid USN*/
    }
}
function check_name1() {
    var x = document.getElementById("name").value;
    var nameError = document.getElementById('name-field1');
    if (x == "" || !(isNaN(x))) {
        nameError.style.display = 'block';
        return false;
    }
    else {
        nameError.style.display = 'none';
        return true;                      /*If name is not valid,then requesting user to enter valid USN*/
    }
}
function check_name2() {
    var x = document.getElementById("fname").value;
    var nameError = document.getElementById('name-field1');
    if (x == "" || !(isNaN(x))) {
        nameError.style.display = 'block';
        return false;
    }
    else {
        nameError.style.display = 'none';
        return true;                      /*If name is not valid,then requesting user to enter valid USN*/
    }
}
function check_email() {

    var email1 = document.getElementById('email').value;
    var result = email1.match('[a-z]+.cs[0-9][0-9]@bmsce.ac.in');
    var emailError = document.getElementById('email-field');
    if (result == email1) {
        emailError.style.display = 'none';
        return true;
    }
    else {
        emailError.style.display = 'block';
        return false;
    }

}
function check_phone() {
    var z = document.getElementById("phone").value;
    var ph = /^\d{10}$/;   /*Checking if phone number is a valid 10 digit number*/
    var PhoneError = document.getElementById('phone-field');
    if (ph.test(z) && z !== '0000000000') {
        PhoneError.style.display = 'none';
        return true;                          /*If valid,continue*/
    }
    else {
        PhoneError.style.display = 'block';
        return false;
    }
}
function check_optionshs() {
    var cond;
    if (document.getElementById('gate').checked || document.getElementById('gre').checked || document.getElementById('cat').checked || document.getElementById('toefl').checked || document.getElementById('pgcet').checked) {
        cond = true;
    }
    else {
        alert("Please Select one of the Courses from the Options given");   /*If one of the checkbox isn't checked,requesting user to select an option*/
        cond = false;
    }
    cond = cond && check_name();
    cond = cond && check_usn();
    cond = cond && check_email();
    cond = cond && check_phone();
    return cond;
}
function check_optionspl() {
    var cond;
    if (document.getElementById('ads').checked || document.getElementById('android').checked || document.getElementById('net').checked || document.getElementById('php').checked || document.getElementById('adj').checked) {
        cond = true;
    }
    else {
        alert("Please Select one of the Courses from the Options given");   /*If one of the checkbox isn't checked,requesting user to select an option*/
        cond = false;
    }
    cond = cond && check_name();
    cond = cond && check_usn();
    cond = cond && check_email();
    cond = cond && check_phone();
    return cond;
}
function queryButton() {
    var q = document.getElementById('button1');
    q.style.display = 'block';

}