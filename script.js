var nameErrorEl = document.getElementById("nameError");
var emailErrorEl= document.getElementById("emailError");
var msgErrorEl = document.getElementById("msgError");
var mobileErrorEl = document.getElementById("mobileError");


function validateName(){
    var name = document.getElementById("name-input").value;
    
    if(name.length == 0){
        nameErrorEl.innerHTML = "Enter name";
        return false
    
    }if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameErrorEl.innerHTML = "Enter valid name";
        return false
    }else{
        nameErrorEl.innerHTML = ''
        return true;
    }
    
}

function validateMobile(){
    var mobile = document.getElementById("mobile-input").value;
    
    if(mobile.length == 0){
        mobileErrorEl.innerHTML = "Enter mobile number";
        return false;
    }
    if(!mobile.match(/^[0-9]{10}$/)){
        mobileErrorEl.innerHTML = "Enter valid phone number";
        return false;
    }
    if(mobile.length !== 10 ){
        mobileErrorEl.innerHTML = "Enter valid phone number";
    }
    else{
        mobileErrorEl.innerHTML = "";
    }
    
}

function validateEmail(){
    var email = document.getElementById("email-input").value;
    
    if(email.length == 0){
        emailErrorEl.innerHTML = "Enter email";
        return false;
    }
    if(!email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)){
        emailErrorEl.innerHTML = "Enter valid email";
        return false;
    }
    else{
        emailErrorEl.innerHTML = "";
        return true;
    }
    
}


function validateMsg(){
    var msg = document.getElementById("Msg").value;

    if(msg.length <= 7){
        msgErrorEl.innerHTML="Please write in detail"
        return false;
    }else{
        msgErrorEl.innerHTML = "";
    }

}