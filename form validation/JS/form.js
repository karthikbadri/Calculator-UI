let fname=document.getElementById("fname");
let pass=document.getElementById("pass")
let mail=document.getElementById("mail")
let g1=document.getElementById('g1')
let g2=document.getElementById("g2")
let q1=document.getElementById("q1")
let q2=document.getElementById("q2")
let erro1=document.getElementById("error1")
let erro2=document.getElementById("error2")
let erro3=document.getElementById("error3")
let erro4=document.getElementById("error4")
let erro5=document.getElementById("error5")
let mobile1 = document.getElementById("mobile");


function validate1(){
    erro1.textContent="";
    let regName=new RegExp("/^[a-zA-z]$/")
    let fnamevalue=fname.value;
    if ( fnamevalue===""){
        erro1.textContent="Required"
        return false
    }else if(!regName.test(fnamevalue)==false){
        erro1.textContent="name should have alphabets"
        return false
    }else{
        erro1.textContent=""
        return true
    }
}

function validate2(){
    erro2.textContent="";
    let regName=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])")
    let passvalue=pass.value;
    console.log(regName.test(passvalue))
    if (passvalue==""){
        erro2.textContent="Required"
        return false;
    }else if(regName.test(passvalue)===false){
        erro2.innerHTML="Password should have<br/> capital letter <br/> small letter <br/> special character <br/> numbers";
        return false
    }else if (passvalue.length<5 || passvalue.length>10){
        erro2.textContent="the passowrd should greater than 5 and less than 10"
        return false
    }
    else{
        erro2.textContent="";
        return true
    }
}

function validate3(){
    erro3.textContent=""
    let mailvalue=mail.value
    let sub=mailvalue.substring(mailvalue.indexOf('@')+1)
    if (mailvalue==""){
        erro3.textContent="required"
        return false;
    }else if(!mailvalue.includes('@')||sub==""){
        erro3.textContent="Enter valid Email"
        return false;
    }else{
        erro3.textContent=""
        return true
    }
}

function validate4(){
    erro4.textContent="";
    if (g1.checked || g2.checked){
        return true
    }else{
        erro4.textContent="please select the gender";
        return false
    }
}
 
function validate5(){
    erro5.textContent="";
    let mobileCheck=new RegExp('^[0-9]*$');
    let mobileValue = mobile1.value;
    
    if(mobileValue==""){
        erro5.textContent="required";
        return false;
    }else if(mobileCheck.test(mobileValue)==false){
        erro5.textContent="Use only digits";
        return false;
    }else if(mobileValue.length<10||mobileValue.length>10){
        erro5.textContent="enter 10 digit mobile number";
        return false;
    }
    
    else{
        erro5.textContent="";
        return true;
    }
}

function validation(){
    let v1=validate1()
    let v2=validate2()
    let v3=validate3()
    let v4=validate4()
    let v5=validate5()
    return v1 && v2 && v3 && v4 && v5
}