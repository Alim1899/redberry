'use strict'
const renderInfo = function(){
    //Constants for input fields
const name = document.querySelector('.name');
const lastname = document.querySelector('.lastname');
const img = document.querySelector('.imageInput');
const about = document.querySelector('.quote');
const email = document.querySelector('.email');
const number = document.querySelector('.number');

// Constants for rendered cv
const fullname = document.querySelector('.fullName');
const aboutCV = document.querySelector('.resumeDetails');
const emailCV = document.querySelector('.resumeEmail');
const numberCV = document.querySelector('.resumeNumber');
let imgArr = [];



document.addEventListener('input',function(){
    localStorage.setItem('name',name.value);
    localStorage.setItem('lastname',lastname.value);
    localStorage.setItem('about',about.value);
    localStorage.setItem('email',email.value);
    localStorage.setItem('number',number.value);

    let nameArr = [localStorage.getItem('name'), localStorage.getItem('lastname')];
     fullname.textContent = nameArr.join(' ');
     aboutCV.textContent = localStorage.getItem('about')
     emailCV.textContent = localStorage.getItem('email')
     numberCV.textContent = localStorage.getItem('number')
})


}

renderInfo();

//img.addEventListener('change',function(){
//     const imgFile = img.files;
//    imgArr.push[imgFile[0]];
//    console.log(imgFile + 'this' + imgArr);
// })
