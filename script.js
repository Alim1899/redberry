'use strict'
const renderInfo = function(){
    //Selections for input fields
const name = document.querySelector('.name');
const lastname = document.querySelector('.lastname');
const img = document.querySelector('.imageInput');
const about = document.querySelector('.quote');
const email = document.querySelector('.email');
const number = document.querySelector('.number');

// Selections for rendered cv
const fullname = document.querySelector('.fullName');
const aboutCV = document.querySelector('.resumeDetails');
const emailCV = document.querySelector('.resumeEmail');
const numberCV = document.querySelector('.resumeNumber');
const imgCV = document.querySelector('.resumeImg');

//retrieving data from localSTorage
const retrieveData = function(){    
    
    //Retrieving name and lastname, then creating fullname
    fullname.textContent = 
    (sessionStorage.getItem('name') ?sessionStorage.getItem('name'):'')
    + ' ' + 
    (sessionStorage.getItem('lastname')?sessionStorage.getItem('lastname'):(''));

    //Retrieve image
if(sessionStorage.getItem('src')) {
    imgCV.classList.remove('hidden');
    imgCV.src=sessionStorage.getItem('src');
}

    //Show/hide about me section
    if(sessionStorage.getItem('about')) document.querySelector('.aboutMeCv').classList.remove('hidden');
    aboutCV.textContent = sessionStorage.getItem('about'); 

    //Fontawesome icons
        const emailIcon = '<i class="fa-solid fa-at"></i>';
        const dialIcon = '<i class="fa-solid fa-phone"></i>';

    if(sessionStorage.getItem('email')) emailCV.innerHTML = emailIcon + ' ' + sessionStorage.getItem('email');
    else emailCV.textContent ='';
    
    if(sessionStorage.getItem('number')) numberCV.innerHTML = dialIcon + ' ' + sessionStorage.getItem('number');
    else numberCV.textContent = '';

}
retrieveData();

//Checking inputted fields validation
const checkValidity = function(field){
    //Restriction for space character in number input field
    if(field.id==='number'){
        if(field.value.match(/\s/g)){
      field.value=field.value.replace(/\s/g,'');      
}
    }
    
    
    const show = document.querySelector(`.show-${field.id}`);
    const hide = document.querySelector(`.hide-${field.id}`);
    
    
    if(field.checkValidity()){
    if(show==null){
        field.style.border = '2px solid #98E37E'
    }
     show.classList.remove('hidden');
     hide.classList.add('hidden');
        field.style.border = '2px solid #98E37E'
    }else{
        show.classList.add('hidden');
        hide.classList.remove('hidden');
        field.style.border = '2px solid #EF5050'
    }
}

//Sending data to seesionStorage
document.addEventListener('input',function(e){ 

checkValidity(e.target);



    const inputChecker = function(){
        sessionStorage.setItem(e.target.id,e.target.value)
    }
    inputChecker();

    if (img.files && img.files[0]){
        var reader = new FileReader();
        reader.onload = function (e) { 
            sessionStorage.setItem('src',e.target.result);
            retrieveData();
        }
        reader.readAsDataURL(img.files[0]);
    }
   retrieveData();
})

}


renderInfo();

