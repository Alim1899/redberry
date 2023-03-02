'use strict'

//Constants for whole application
let counter = 0;
const firstPage = document.querySelector('.firstPage');
const info = document.querySelector('.inputDetails');
const experience = document.querySelector('.experience');
const education = document.querySelector('.education');

//Getting degrees from API
const degree = document.querySelector('.degree');
 fetch( 'https://resume.redberryinternship.ge/api/degrees')
.then(response=>response.json()
.then(data=>{data.forEach(el =>degree.insertAdjacentHTML("afterbegin",`
  <option class="options">${el.title}</options>`) )
}))


const retrieveData = function(){  
  // // Selections for rendered cv
const fullname = document.querySelector('.fullName');
const aboutCV = document.querySelector('.resumeDetails');
const emailCV = document.querySelector('.resumeEmail');
const numberCV = document.querySelector('.resumeNumber');
const imgCV = document.querySelector('.resumeImg');
const positionCV = document.querySelector('.positionCV')
const jobDesc = document.querySelector('.descriptionCV');
const jobtDate = document.querySelector('.startEnd');
const university = document.querySelector('.universityCV');
const eduEnd = document.querySelector('.eduEnd');
const eduDesc = document.querySelector('.eduDescriptionCV');
//retrieving data from sessionStorage
    const retrieveInfo = function(){
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
    retrieveInfo();   
  const retrieveExperience = function(){
    if(sessionStorage.getItem('position')||
    sessionStorage.getItem('employer')||
    sessionStorage.getItem('jobDescription')  
    ){
      document.querySelector('.experienceCV').classList.remove('hide')
    }
    if(sessionStorage.getItem('position')&&
    sessionStorage.getItem('employer')){
      positionCV.textContent = sessionStorage.getItem('position')
      + ', ' +sessionStorage.getItem('employer') ;
    }
    if(sessionStorage.getItem('jobDescription'))
     jobDesc.textContent = sessionStorage.getItem('jobDescription');
  
     if(sessionStorage.getItem("start")&&
     sessionStorage.getItem("start")
     )jobtDate.textContent = sessionStorage.getItem('start') +
     " - " + sessionStorage.getItem('end');
  }
  retrieveExperience();
  
  const retrieveEducation = function(){
    if(sessionStorage.getItem('university')||
    sessionStorage.getItem('degree')
    ) document.querySelector('.educationCV').classList.remove('hide');
  if(sessionStorage.getItem('university')) {
    if(!sessionStorage.getItem('degree')){
        university.textContent = sessionStorage.getItem('university');
    }
    if(sessionStorage.getItem('degree')){
      university.textContent = sessionStorage.getItem('university')
      + ", " + sessionStorage.getItem("degree");
  }
  }
  if(sessionStorage.getItem("eduEnd")) eduEnd.textContent = sessionStorage.getItem('eduEnd');
  if(sessionStorage.getItem("eduDescription")) eduDesc.textContent = sessionStorage.getItem("eduDescription");
  }
  retrieveEducation();
  }
//Render first page image
const observe = function(){
const img =  document.querySelectorAll('img[data-src]');

const loadimg = function(entries,observer){
  const [entry] = entries;
  
  entry.target.src = entry.target.dataset.src
  entry.target.addEventListener('load',function(){
    entry.target.classList.remove('lazy')
  })
};
const observer = new IntersectionObserver(loadimg,
  {
    root:null,
    treshold: 0
  })

  img.forEach(img=>observer.observe(img));
}
observe();
//Checking inputted fields validation
const fieldColor = function(field){
    //Restrict space character in number input field
    //Vlidate number
    if(field.id==='number'){
        if(field.value.match(/\s/g)){
      field.value=field.value.replace(/\s/g,'');      
}
    }
    //validate job description
    if(field.id === "jobDescription"){
      if(!field.checkValidity()){
        field.style.border = '2px solid #EF5050'
      }
      if(field.checkValidity()){
        field.style.border = '2px solid #98E37E'
      }
      return;
    }
   //validate dates
    if(field.id ==="start"||field.id==="end" || field.id==="eduEnd"){
      field.style.border = '2px solid #98E37E'
      const date = new Date(field.value)
      if(date.getFullYear()<=1970){ 
        field.style.border = '2px solid #EF5050'
      }
      return;
    }
    
    //Validate degrees
    if(field.id ==="degree"){
      field.style.border = '2px solid #98E37E'
      return;
    }


    //validate fields with show/hide icon
    const show = document.querySelector(`.show-${field.id}`);
    const hide = document.querySelector(`.hide-${field.id}`);
    if(field.checkValidity()){       
    if(show==null){
        field.style.border = '2px solid #98E37E'
    }
    if(field.id==='image'
       ||field.id==='about'
       ||field.id==='start'
       ||field.id==="end"
       ||field.id==="jobDescription"
       ||field.id==="eduEnd"
       ||field.id==="eduDescription"
       ||field.id==="degree"
      )
       return;
     show.classList.remove('hidden');
     hide.classList.add('hidden');
        field.style.border = '2px solid #98E37E'
    }else{
        show.classList.add('hidden');
        hide.classList.remove('hidden');
        field.style.border = '2px solid #EF5050'
    }

    
}
//Saving data in sessionStorage
const dataSaver = function(e){
  fieldColor(e.target);
  if(e.target.id!=='image'){
    if(e.target.checkValidity()){
      sessionStorage.setItem(e.target.id,e.target.value);
  }else{
    sessionStorage.removeItem(e.target.id);
  }
}
  if(e.target.id==='image'){
    const img = document.querySelector('.imageInput');
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
//redering pages according to counter variable
const render = function(page){
  const next = document.querySelector('.submit');
  const back = document.querySelector('.backward');
  const reset = document.querySelector('.back');
  const header = document.querySelector('.pageHead');
  const number = document.querySelector('.pageNumber');
  header.textContent = "პირადი ინფო";
  number.textContent = "1/3";
  if(page===0){
    reset.classList.remove('hidden');
     header.textContent = "პირადი ინფო";
     number.textContent = "1/3";
    firstPage.classList.add('hide');
    info.classList.remove('hide');
    education.classList.add('hide');
    experience.classList.add('hide');
  }
  if(page===1){
    reset.classList.remove('hidden');
    header.textContent = "გამოცდილება";
    number.textContent = "2/3";
    firstPage.classList.add('hide');
    info.classList.add('hide');
    education.classList.add('hide');
    experience.classList.remove('hide');
    back.classList.remove('hidden');
  }
  if(page===2){
    reset.classList.remove('hidden');
    header.textContent = "განათლება";
    number.textContent = "3/3";
    firstPage.classList.add('hide');
    info.classList.add('hide');
    education.classList.remove('hide');
    experience.classList.add('hide');
    next.disabled = false;
    next.textContent = "დასრულება";
    next.style.cursor = "not-allowed";
    next.disabled = true;
    back.classList.remove('hidden');
  }
}
//Changing counter variable and rendering pages
const buttons = function(){
  const next = document.querySelector('.submit');
  const back = document.querySelector('.backward');
  const reset = document.querySelector('.back');
  const add = document.querySelector('.addResume');
  reset.addEventListener('click',function(){
    reset.classList.add('hidden');
    counter = 0;
    sessionStorage.clear();
    window.location.reload();
    firstPage.classList.remove('hide');
    info.classList.add('hide');
    education.classList.add('hide');
    experience.classList.add('hide');
  })
  add.addEventListener('click',function(){
    sessionStorage.setItem('counter',counter);
    reset.classList.remove('hidden');
    firstPage.classList.add('hide');
    info.classList.remove('hide');
    education.classList.add('hide');
    experience.classList.add('hide');
  })
  next.addEventListener('click',function(){
    next.style.cursor = "not-allowed";
    next.disabled = true;
    if(counter<2) {
      counter++;
      sessionStorage.setItem('counter',counter);
    }
    render(counter);
  })
 
  
  back.addEventListener('click',function(){
    if(counter===2)next.textContent = "შემდეგი";
    next.style.cursor = "pointer";
    next.disabled = false;
    if(counter>0)    counter--;
    sessionStorage.setItem('counter',counter);
    if(counter===0) back.classList.add('hidden');
      render(counter);
  })
}
buttons();
  //Enable/disable nextPage button
const btnEnabler = function(){
  const next = document.querySelector('.submit');
  const back = document.querySelector('.backward');
  const checkInfo = function(){
  if(sessionStorage.getItem('name')&&
   sessionStorage.getItem('lastname')
  &&sessionStorage.getItem('src')&&
  sessionStorage.getItem('email')&&
  sessionStorage.getItem('number')
  ){
  next.style.cursor = "pointer";
  next.disabled = false;
  }else{
    next.style.cursor = "not-allowed";
  next.disabled = true;
  }
  }
  const checkExperience = function(){
    if(
      sessionStorage.getItem('position')
      &&sessionStorage.getItem('employer')&&
      sessionStorage.getItem('start')&&
      sessionStorage.getItem('end')&&
      sessionStorage.getItem('jobDescription')
    ){
      next.style.cursor = "pointer";
      next.disabled = false;
    }else{
      next.style.cursor = "not-allowed";
      next.disabled = true;
    }
  }
  const checkEducation = function(){
if(sessionStorage.getItem('university')
&&sessionStorage.getItem('degree')&&
sessionStorage.getItem('eduEnd')
){
  next.style.cursor = "pointer";
  next.disabled = false;
}else{
  next.style.cursor = "not-allowed";
      next.disabled = true;
}
  }
  if(counter===0)checkInfo();
  if(counter===1)checkExperience();
  if(counter===2)checkEducation();
}
document.addEventListener('input',function(e){
  dataSaver(e);  
  retrieveData();
  btnEnabler();
})
//Rendering resume
document.addEventListener('change',function(){
  if(document.querySelector('.pageHead').textContent==="განათლება"){
  document.querySelector('.submit').addEventListener('click',function(){
    info.classList.add('hide');
    firstPage.classList.add('hide');
    experience.classList.add('hide');
    education.classList.add('hide');
    document.querySelector('.succes').classList.remove('hidden');
    document.querySelector('.navigation').classList.add('hide');
    document.querySelector('.start').classList.add('hide');
    document.querySelector('.heading').classList.add('hide');
    document.querySelector('.infoHead').classList.add('hide');
    document.querySelector('.backward').classList.add('hide');
    document.querySelector('.submit').classList.add('hide');
    document.querySelector('.resume').style.marginLeft = "550px";
    document.querySelector('.resume').style.marginTop = "20px";
  })
}
window.addEventListener('load',function(){
  sessionStorage.clear();
  render(0);
});
})
//Remove succes message
const removeMessage = document.querySelector('.remove');
removeMessage.addEventListener('click',function(){
  const message = document.querySelector('.succes');
  message.classList.add('hide');
})


window.addEventListener('load',()=>{sessionStorage.clear()})