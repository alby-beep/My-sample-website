//form blur event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('lname').addEventListener('blur', validateLastName);
document.getElementById('city').addEventListener('blur', validateCity);
document.getElementById('age').addEventListener('blur', validateAge);
document.getElementById('submit').addEventListener('click', validateGenderNState);
document.getElementById('resume').addEventListener('blur', validateResume);

function validateName(){
const name=document.getElementById('name');
var n;
n=0;
const re=/^[a-zA-Z]{3,10}$/;
if(!re.test(name.value)){
  name.classList.add('is-invalid');
 }
else{
  name.classList.remove('is-invalid');
  n=1;
 }
}

function validateLastName(){
  var n2=0;
    const lname=document.getElementById('lname');
    const re=/^[a-zA-Z]{0,10}$/;
    if(!re.test(lname.value)){
      lname.classList.add('is-invalid');
     }
    else{
      lname.classList.remove('is-invalid');
      n2=1;

     }
    }

function validateCity(){
  var n3=0;
  const city=document.getElementById('city');
  const re=/^[a-zA-Z]{0,100}$/;
if(!re.test(city.value)){
  city.classList.add('is-invalid');
 }
else{
  city.classList.remove('is-invalid');
  n3=1;
 }
}

function validateAge(){
  var n4=0;
  const age=document.getElementById('age');
  const re=/^[0-9]{1,3}$/;
if(!re.test(age.value) || (age.value < 1 || age.value > 120)){
  age.classList.add('is-invalid');
 }
else{
  age.classList.remove('is-invalid');
  n4=1;
 }

}

function validateGenderNState(){
  var n5=0;
  var genderM=document.getElementById('male');
  var genderF=document.getElementById('female');
  var genderT=document.getElementById('trans');

  if(genderM.checked==false && genderF.checked==false && genderT.checked==false ) {
    trans.classList.add('is-invalid');
  }   
  else{
    trans.classList.remove('is-invalid');
    n5=1;
   }

}
function validateResume(){
  var n6=0;
  const fi = document.getElementById('resume');
  var filePath = fi.value;
  fsize= Math.round((fi.files[0].size)/1024);
  var allowedExtensions = /(\.pdf)$/i;
  var MAX_FILE_SIZE = 500; // 500kb
  if ((!allowedExtensions.exec(filePath)) || (fsize > MAX_FILE_SIZE) ) {
    resume.classList.add('is-invalid');
}
else{
  resume.classList.remove('is-invalid');
  n6=1;
}
}
if((n===1)&&(n2===1)&&(n3===1)&&(n4===1)&&(n5===1)&&(n6===1)){
  alert("Registration Successful");
}
