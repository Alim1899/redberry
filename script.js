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

const retrieveData = function(){
    let nameArr = localStorage.getItem('user').split(',');
    console.log(nameArr);
    fullname.textContent = nameArr[0]
    aboutCV.textContent = nameArr[1]
    emailCV.textContent = nameArr[2];
    numberCV.textContent = nameArr[3];
}
retrieveData()


document.addEventListener('input',function(){
    const accountDetails = [];
    accountDetails.push(name.value + ' ' + lastname.value)
    accountDetails.push(about.value)
    accountDetails.push(email.value)
    accountDetails.push(number.value)
    console.log(accountDetails);
    localStorage.setItem('user',[...accountDetails]);
    // localStorage.setItem('lastname',lastname.value);
    // localStorage.setItem('about',about.value);
    // localStorage.setItem('email',email.value);
    // localStorage.setItem('number',number.value);

   retrieveData();
})


}

renderInfo();

//img.addEventListener('change',function(){
//     const imgFile = img.files;
//    imgArr.push[imgFile[0]];
//    console.log(imgFile + 'this' + imgArr);
// })
