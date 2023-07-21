function validateForm(){
    let x=document.myform.username.value
    let y=document.myform.pass.value
    let z=document.myform.phone.value
    let m=document.myform.email.value

    var atposition=m.indexOf("@")
    var dotposition=m.lastIndexOf(".")
    if(x.length<6){
        alert("Username should be minimum six characters")
        return false;
    }
    else if(y.length<8){
        alert("Password should be minimum eight characters")
        return false;
    }
    else if(isNaN(z)){
        alert("Enter digits only")
        return false;

    }
    else if(z.length!=10){
        alert("Enter only 10 digits")
        return false;
    }
    else if(atposition<1 ||
         dotposition<atposition+2
          || dotposition+2>=m.length){
        alert("Please enter a valid e-mail address")
        return false;
    }
    else{
        return true;
    }
}