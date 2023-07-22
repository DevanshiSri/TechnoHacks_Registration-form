function clearError(){
    allerrors=document.getElementsByClassName('error');
    for(let item of allerrors)
    {
        item.innerHTML="";
    }
}

function seterror(id, error){
    element= document.getElementById(id);
    element.getElementsByClassName('error')[0].innerHTML=error;
}

function formvalidation(){
    var returnval=true;
    clearError();

    var name= document.forms['myForm']["fname"].value;
    if(name.length<5){
        seterror("name", "*Length of name is too short!");
        returnval=false;
    }
    var email= document.forms['myForm']["femail"].value;
    if(email.length>25){
        seterror("email", "*Length of E-mail is too long!");
        returnval=false;
    }
    var phone= document.forms['myForm']["fphone"].value;
   if(phone.length!=10){
        seterror("phone", "*Mobile Number should be of 10 digits!");
        returnval=false;
    }
    var password= document.forms['myForm']["pass"].value;
   if(password.length<8){
        seterror("pass", "*Password should have atleast 8 characters!");
        returnval=false;
    }
    var cpassword= document.forms['myForm']["cpass"].value;
   if(cpassword!=password){
        seterror("cpass", "*Password and Confirm Password should match!");
        returnval=false; 
    }

    return returnval;

}
