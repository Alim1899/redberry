'use strict'

const renderInfo = function(){
    //Selections for input fields
const name = document.querySelector('.name');
const lastname = document.querySelector('.lastname');
const img = document.querySelector('.imageInput');
const about = document.querySelector('.quote');
const email = document.querySelector('.email');
const number = document.querySelector('.number');
const submit = document.querySelector('.submit');



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

//Enable/disable nextPage button
const btnEnabler = function(){
    submit.style.cursor = 'pointer';
    submit.disabled = false;
    // if(
    //     name.checkValidity() &&
    //     lastname.checkValidity() &&
    //     email.checkValidity() &&
    //     number.checkValidity()
    // ){
    //   submit.style.cursor = 'pointer';
    // }
}

//Checking inputted fields validation
const validation = function(field){
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
    if(field.id==='image' || field.id==='about')return;
        
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

validation(e.target);
btnEnabler();



    const inputChecker = function(){
        if(e.target.checkValidity()){
             if(e.target.id!=='image'){
            sessionStorage.setItem(e.target.id,e.target.value)
        }
        if(e.target.id==='image'){

             if (img.files && img.files[0]){
            if(img.files[0].size>=2000000){
                alert('გთხოვთ შეარჩიოთ უფრო მცირე ზომის ფოტო (მაქს:2მბ)');
                return;
            }
        var reader = new FileReader();
        reader.onload = function (e) { 
            sessionStorage.setItem('src',e.target.result);
            retrieveData();
        }
        reader.readAsDataURL(img.files[0]);
    }
        }
        }
       
        
    }
    inputChecker();

   
   retrieveData();
})


//Events for submit button


}

renderInfo();

const pagesNavigation = function(){

const submit =  document.querySelector('.submit');
//Next page button 
submit.addEventListener('click',function(e){
    //Selections for navigation
    const div1 = document.querySelector('.inputDetails');
    const info = document.querySelector('.infoHead');
    const page = document.querySelector('.infoSpan');
document.querySelector('.backWard').style.visibility = "visible";
    //Creating new elements, because losing chained span
    // Page 2/3
    const span = document.createElement("span");
    const text = document.createTextNode('2/3');
    span.appendChild(text);
    span.classList.add('infoSpan');
    // Page 3/3
    const span1 = document.createElement("span");
    const text1 = document.createTextNode('3/3');
    span1.appendChild(text1);
    span1.classList.add('infoSpan');

    if(page.textContent === '1/3'){
        document.location.hash = '#experience';
        document.querySelector('.backWard').style.visibility = "visible";
        div1.classList.add('hidden');
        info.textContent = 'გამოცდილება';

        info.appendChild(span);
    }
    if(page.textContent === '2/3'){
        document.location.hash = '#education';
        div1.classList.add('hidden');
        info.textContent = 'განათლება';
        info.appendChild(span1);
        document.querySelector('.submit').textContent = "დასრულება";

    }
})


}




const navigation = function(){
    //Selections for navigate
const addResume = document.querySelector('.addResume');
const backWard = document.querySelector('.backWard');
const back = document.querySelector('.back');


// Event listener for returning main page and reset data
back.addEventListener('click',function(){
    
    document.querySelector('.firstPage').classList.remove('hide');
    document.location.hash = '#firstPage';
    document.querySelector('.info').classList.add('hide');
    sessionStorage.clear();
    location.reload();
    document.querySelector('.backWard').style.visibility = "hidden";
})

// Event for start filling fields
addResume.addEventListener('click',function(e){
    document.querySelector('.backWard').classList.add('hidden');
document.querySelector('.info').classList.remove('hide');
 document.querySelector('.firstPage').classList.add('hide');
})
// Event for return first page and clear storage
backWard.addEventListener('click',function(e){
    e.preventDefault();
    const info = document.querySelector('.infoHead');
    const page = document.querySelector('.infoSpan');
    if(page.textContent === "1/3"){
        document.location.hash = '#info';
        document.querySelector('.submit').textContent = "შემდეგი";
    document.querySelector('.backWard').style.visibility = "hidden";

    }
    if(page.textContent === '2/3'){
        document.location.hash = '#info';
    const span = document.createElement("span");
    const text = document.createTextNode('1/3');
    span.appendChild(text);
    span.classList.add('infoSpan');
    info.textContent='პირადი ინფო';
    info.appendChild(span);
    document.querySelector('.submit').textContent = "შემდეგი";

    document.querySelector('.inputDetails').classList.remove('hidden');
    document.querySelector('.backWard').style.visibility = "hidden";
    }
    if(page.textContent === '3/3'){
        const span = document.createElement("span");
        const text = document.createTextNode('2/3');
        document.location.hash = '#experience';
        span.appendChild(text);
        document.querySelector('.submit').textContent = "შემდეგი";

        span.classList.add('infoSpan');
        info.textContent='გამოცდილება';
        info.appendChild(span);
        }
    
})








//Event for stay in same page when refreshi
window.addEventListener('load',function(e){
    e.preventDefault();
    if(document.location.hash === "#info"){
        this.document.querySelector(".backWard").style.visibility = "hidden";
        document.querySelector('.firstPage').classList.add('hide');
        document.querySelector('.info').classList.remove('hide');
    }
    if(document.location.hash === "#experience"){
        document.querySelector('.inputDetails').classList.add('hidden');
        document.querySelector(".backWard").style.visibility = "visible";
        document.querySelector('.firstPage').classList.add('hide');
        document.querySelector('.info').classList.remove('hide');
        const info = document.querySelector('.infoHead');
        const span = document.createElement("span");
        const text = document.createTextNode('2/3');
        document.location.hash = '#experience';
        span.appendChild(text);
        span.classList.add('infoSpan');
        info.textContent='გამოცდილება';
        info.appendChild(span);
    }
    if(document.location.hash === "#education"){
        document.querySelector('.inputDetails').classList.add('hidden');
        document.querySelector(".backWard").style.visibility = "visible";
        document.querySelector('.firstPage').classList.add('hide');
        document.querySelector('.info').classList.remove('hide');
        const info = document.querySelector('.infoHead');
        const span = document.createElement("span");
        const text = document.createTextNode('3/3');
        document.location.hash = '#education';
        span.appendChild(text);
        span.classList.add('infoSpan');
        info.textContent='განათლება';
        info.appendChild(span);
        document.querySelector('.submit').textContent = "დასრულება";

    }
})




pagesNavigation();
}
renderInfo();

navigation();


