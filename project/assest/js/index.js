function showup(){
    let x = document.forms["contactform"]["fname"].value;
    if(x=== ""){
 alert("Input must be filled");
 return false;
    }
    let y = document.forms["contactform"]["email"].value;
    if(y=== ""){
     alert("Input must be filled");
 }else{
         alert("Your message has been recorded. Thank you");
     }
 }