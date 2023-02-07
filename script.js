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
    
    fullname.textContent = sessionStorage.getItem('fullname');
    aboutCV.textContent = sessionStorage.getItem('about'); 
    //Fontawesome icons
        const emailIcon = '<i class="fa-solid fa-at"></i>';
        const dialIcon = '<i class="fa-solid fa-phone"></i>';

    if(sessionStorage.getItem('email')) emailCV.innerHTML = emailIcon + ' ' + sessionStorage.getItem('email');
    else emailCV.textContent ='';
    
    if(sessionStorage.getItem('number')) numberCV.innerHTML = dialIcon + ' ' + sessionStorage.getItem('number');
    else numberCV.textContent = '';



     imgCV.src = sessionStorage.getItem('src');
}
retrieveData();

//Sending data to seesionStorage
document.addEventListener('input',function(){    
    sessionStorage.setItem('fullname',name.value + ' ' + lastname.value)
    sessionStorage.setItem('about',about.value )
    sessionStorage.setItem('email',email.value )
    sessionStorage.setItem('number',number.value )
    
    if (img.files && img.files[0]){
        var reader = new FileReader();

        reader.onload = function (e) {
           
            console.log(e.target.result);
            sessionStorage.setItem('src',e.target.result);
        }

        reader.readAsDataURL(img.files[0]);
        
    }
   retrieveData();
})


}

renderInfo();

