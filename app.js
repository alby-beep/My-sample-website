//form blur event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('lname').addEventListener('blur', validateLastName);
document.getElementById('city').addEventListener('blur', validateCity);
document.getElementById('age').addEventListener('blur', validateAge);
//document.getElementById('submit').addEventListener('click', validateAll);
document.getElementById('resume').addEventListener('blur', validateResume);
document.getElementById('state').addEventListener('blur', validateState);


// document.getElementById('submit').addEventListener('click', function (e) {
// validateName();
//   validateLastName();
//   validateCity();
//   validateAge();
//   validateResume();
//   validateGender();
//   validateState();
//   fname=document.getElementById('name').value;
//   lname=document.getElementById('lname').value;
//   age=document.getElementById('age').value;
//   city=document.getElementById('city').value;
//   alert("First Name:" +" "+fname +" " +"Last Name:" +" "+ lname+" "  +"Age:" +" "+ age+" "  +"City:" +" "+ city);
// });

// document.getElementById('submit').addEventListener('submit', function (e) {
  
//   // prevent the form from submitting
//   e.preventDefault();

// });

function validateName(){
const name=document.getElementById('name');
var n;
n=0;
const re=/^[a-zA-Z]{3,10}$/;
if(!re.test(name.value)){
  name.classList.add('is-invalid');
  return false;
 }
else{
  name.classList.remove('is-invalid');
  n=1;
  return true;
 }
}

function validateLastName(){
  var n2=0;
    const lname=document.getElementById('lname');
    const re=/^[a-zA-Z]{0,10}$/;
    if(!re.test(lname.value)){
      lname.classList.add('is-invalid');
      return false;
     }
    else{
      lname.classList.remove('is-invalid');
      n2=1;
      return true;
     }
    }

function validateCity(){
  var n3=0;
  const city=document.getElementById('city');
  const re=/^[a-zA-Z]{0,100}$/;
if(!re.test(city.value)){
  city.classList.add('is-invalid');
  return false;
 }
else{
  city.classList.remove('is-invalid');
  n3=1;
  return true;
 }
}

function validateAge(){
  var n4=0;
  const age=document.getElementById('age');
  const re=/^[0-9]{1,3}$/;
if(!re.test(age.value) || (age.value < 1 || age.value > 120)){
  age.classList.add('is-invalid');
  return false;
 }
else{
  age.classList.remove('is-invalid');
  n4=1;
  return true;
 }

}


function validateResume(){
  var n6=0;
  const fi = document.getElementById('resume');
  var filePath = fi.value;
  // fsize= Math.round((fi.files[0].size)/1024);
  if (fi.files.length > 0) {
    var allowedExtensions = /(\.pdf)$/i;
        var MAX_FILE_SIZE = 500; // 500kb
    for (const i = 0; i <= fi.files.length - 1; i++) {

        const fsize = fi.files.item(i).size;
        const file = Math.round((fsize / 1024));
        
          if ((!allowedExtensions.exec(filePath)) || (file > MAX_FILE_SIZE) ) {
            resume.classList.add('is-invalid');
            return false;
        }
        else{
          resume.classList.remove('is-invalid');
          n6=1;
          return true;
        }
    }
    
  }
  else{
    resume.classList.add('is-invalid');
    return false;
  }
  

}
function validateGender(){

var genderM=document.getElementById('male');
var genderF=document.getElementById('female');
var genderT=document.getElementById('trans');

if(genderM.checked==false && genderF.checked==false && genderT.checked==false ) {
  genderT.classList.add('is-invalid');
  return false;
}   
else{
  genderT.classList.remove('is-invalid');
  return true;
  }
}

function validateState(){
var state=document.getElementById('state');
var invalid=state.value=='Please Select';
if(invalid){
  state.classList.add('is-invalid');
  return false;
}
else{
  state.classList.remove('is-invalid');
  return true;
}

}

function validateAll(){
  
   while((validateName()===false)||(validateLastName()===false)||(validateCity()===false)||(validateAge()===false)||(validateResume()===false)||(validateGender()===false)||(validateState()===false)){
    
    validateName();
    validateLastName();
    validateCity();
    validateAge();
    validateResume();
    validateGender();
    validateState();
    

    if(validateName()===true){
      break;
      }
      
      if(validateLastName()===true){
        break;
      }
    if(validateCity()===true){
      break;
        }
    if(validateAge()===true){
      break;
      }
   if(validateResume()===true){
    break;
    }
    if(validateGender()===true){
      break;
  } 
  if(validateState()===true){
    break;
}

}
  
  if((validateName()===true) &&(validateLastName()===true)&&(validateCity()===true)&&(validateAge()===true)&&(validateResume()===true)&&(validateGender()===true)&&(validateState()===true)){
      fname=document.getElementById('name').value;
      lname=document.getElementById('lname').value;
      age=document.getElementById('age').value;
      city=document.getElementById('city').value;
      resume_file= document.getElementById('resume').value;
      gender=displayRadioValue();
      var state = document.getElementById("state").value;
      alert("First Name:" +" "+fname +"\n"+"Last Name:" +" "+ lname +"\n"+"Age:" +" "+ age +"\n"+"City:" +" "+ city+"\n"+"Gender:" +" "+ gender +"\n"+"State:" +" "+ state+"\n"+"Resume:"+" "+resume_file);
      return true;
    }
    
}
function displayRadioValue() {
  var ele = document.getElementsByName('gender');
    
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked)
         return ele[i].value;
  }
}
//validateAll();

