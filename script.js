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
    //Retrieve image
if(sessionStorage.getItem('src')) imgCV.classList.remove('hidden')
    imgCV.src=sessionStorage.getItem('src');
    //Retrieving name and lastname, then creating fullname
    fullname.textContent = 
    (sessionStorage.getItem('name') ?sessionStorage.getItem('name'):'')
    + ' ' + 
    (sessionStorage.getItem('lastname')?sessionStorage.getItem('lastname'):(''));

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

//Sending data to seesionStorage
document.addEventListener('input',function(e){ 
    if(e.target.id === 'name' ){
        sessionStorage.setItem('name',name.value);
        retrieveData();
    return;
}   
if(e.target.id === 'lastname' ){
    sessionStorage.setItem('lastname',lastname.value);
    retrieveData();
return;
}   
    if(e.target.id === 'quote'){
        sessionStorage.setItem('about',about.value);
        retrieveData();
        return;
    }
    if(e.target.id === 'email'){
        sessionStorage.setItem('email',email.value )
        retrieveData();
        return;
    }
    if(e.target.id === 'number'){
        sessionStorage.setItem('number',number.value )
        retrieveData();
        return;
    }
    
    
    if (img.files && img.files[0]){
        var reader = new FileReader();
        reader.onload = function (e) { 
            console.log(e.target.result);
            sessionStorage.setItem('src',e.target.result);
            retrieveData();
        }
        reader.readAsDataURL(img.files[0]);
    }
   retrieveData();
})


}

renderInfo();

