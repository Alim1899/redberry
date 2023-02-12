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
const positionCV = document.querySelector('.positionCV')
const jobDesc = document.querySelector('.descriptionCV');
const jobtDate = document.querySelector('.startEnd');
//retrieving data from localSTorage
const retrieveData = function(){  
  
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
    if(field.id ==="start"||field.id==="end"){
      field.style.border = '2px solid #98E37E'
      const date = new Date(field.value)
      if(date.getFullYear()<=1970){
        field.style.border = '2px solid #EF5050'
      }
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
       ||field.id==="jobDescription")
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

//Sending data to seesionStorage
/////First form
document.querySelector('.inputDetails').addEventListener('input',function(e){ 
validation(e.target);
btnEnabler();
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
   retrieveData();
})
/////Second form
document.querySelector('.experience').addEventListener('input',function(e){
validation(e.target);
btnEnabler();
retrieveData();
if(e.target.checkValidity()){
  sessionStorage.setItem(e.target.id, e.target.value);
}
})

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
        document.querySelector('.experience').classList.remove('hide');

        info.appendChild(span);
    }
    if(page.textContent === '2/3'){
        document.location.hash = '#education';
        div1.classList.add('hidden');
        info.textContent = 'განათლება';
        info.appendChild(span1);
        document.querySelector('.submit').textContent = "დასრულება";
        document.querySelector('.experience').classList.add('hide');
        document.querySelector('.education').classList.remove('hide');

    }
})


}





// Event for start filling fields
const buttonFunctions = function(){
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



  addResume.addEventListener('click',function(e){
    document.querySelector('.education').classList.add('hide');
    document.querySelector('.experience').classList.add('hide');
    document.querySelector('.backWard').classList.add('hidden');
document.querySelector('.info').classList.remove('hide');
 document.querySelector('.firstPage').classList.add('hide');
})
// Event for return first page and clear storage
backWard.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector('.education').classList.add('hide');

    const info = document.querySelector('.infoHead');
    const page = document.querySelector('.infoSpan');
    if(page.textContent === "1/3"){
        document.location.hash = '#info';
        document.querySelector('.submit').textContent = "შემდეგი";
    document.querySelector('.backWard').style.visibility = "hidden";
    }
    if(page.textContent === '2/3'){
        document.querySelector('.experience').classList.add('hide');

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
        document.querySelector('.experience').classList.remove('hide');

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
        document.querySelector('.experience').classList.add('hide');
        document.querySelector('.education').classList.add('hide');

        this.document.querySelector(".backWard").style.visibility = "hidden";
        document.querySelector('.firstPage').classList.add('hide');
        document.querySelector('.info').classList.remove('hide');
    }
    if(document.location.hash === "#experience"){
        document.querySelector('.education').classList.add('hide');
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
        document.querySelector('.experience').classList.remove('hide');

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
        document.querySelector('.experience').classList.add('hide');
        document.querySelector('.submit').textContent = "დასრულება";
    }




   /////////////////////////////////////////////
   //Adding new experience and new education
    const addExperience = document.querySelector('.addExperience');
    const form2 = document.querySelector('.experience');
    const addEducation  = document.querySelector('.addEducation');
    const form3 = document.querySelector('.education');
    addEducation.addEventListener('click',function(e){
        e.preventDefault();
        form3.insertAdjacentHTML('afterbegin',` <div class="uniLabel">
        <h2 class="dateHead">
                სასწავლებელი
              </h2>
              <input class="university" minlength="2"  required>
              <h6 class="message" style="font-weight: lighter">
                მინიმუმ 2 სიმბოლო
              </h6>
      </div>
      <div class="degreeLabel">
        <div class="degrees">
          <h2 class="dateHead">
            ხარისხი
          </h2>
          <input class="degree"  required>
          
        </div>
        <div class="eduDate">
          <h2 class="dateHead">
            დასრულების რიცხვი
          </h2>
          <input class="date" type="date"  required>
        </div>
      </div>

      <div class="edu">
        <h2 class="dateHead">აღწერა</h2>
        <textarea class="eduDescription"  placeholder="განათლების აღწერა"></textarea>
      </div>

      <hr class="underLine">`)
    })
    addExperience.addEventListener('click',function(e){
        e.preventDefault();
        form2.insertAdjacentHTML('afterbegin',`<div class="positionLabel">
            
        <h2 class="positionHead">თანამდებობა</h2>
        <input id="position" class="position" minlength="2" placeholder="დეველოპერი, დიზაინერი, ა.შ" required>
        <i style="margin-top: 14px;" class="fa-solid fa-circle-check show-position hidden"></i>
        <i class="fa-solid fa-triangle-exclamation hide-position hidden"></i>
        <h6 class="message" style="font-weight: lighter">
          მინიმუმ 2 სიმბოლო
        </h6>
      </div>

      <div for="employer" class="employerLabel">
        <h2 class="employerHead">დამსაქმებელი</h2>
        <input id="employer" class="employer" minlength="2" placeholder="დამსაქმებელი" required>
        <i style="margin-top: 13px;" class="fa-solid fa-circle-check show-employer hidden"></i>
        <i class="fa-solid fa-triangle-exclamation hide-employer hidden"></i>
        <h6 class="message" style="font-weight: lighter">
          მინიმუმ 2 სიმბოლო
        </h6>
      </div>

      <div class="dateLabel">
        <div class="date1">
          <h2 class="dateHead">
            დაწყების რიცხვი
          </h2>
          <input class="start" id="start" type="date required">
        </div>
        
        
          <div class="date2">
            <h2 class="dateHead">
              დასრულების რიცხვი
            </h2>
            <input class="end" id="end" type="date required">
          </div>
      </div>
      <div class="job">
        <h2 class="dateHead">აღწერა</h2>
        <textarea class="jobDescription" id="jobDescription" placeholder="როლი თანამდებობაზე და ზოგადი აღწერა required"></textarea>
      </div>
      <hr class="underLine">`)
    })

})
}
buttonFunctions();



pagesNavigation();

renderInfo();



const degree = document.querySelector('.degree');
 fetch( 'https://resume.redberryinternship.ge/api/degrees')
.then(response=>response.json()
.then(data=>{data.forEach(el =>degree.insertAdjacentHTML("afterbegin",`
  <option class="options">${el.title}</options>`) )
}))
