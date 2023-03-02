'use strict'

// const renderInfo = function(){
//     //Selections for input fields
//     //Info
// const name = document.querySelector('.name');
// const lastname = document.querySelector('.lastname');
// const img = document.querySelector('.imageInput');
// const email = document.querySelector('.email');
// const number = document.querySelector('.number');
// const submit = document.querySelector('.submit');
// //Experience
// const position = document.querySelector('.position');
// const employer = document.querySelector('.employer');
// const startDate = document.querySelector('.startt');
// const endDate = document.querySelector('.end');
// const JobDescription = document.querySelector('.jobDescription');
// //Education
// const uni = document.querySelector('.university');
// const uniDegree = document.querySelector('.degree');
// const eduEndDate = document.querySelector('.eduDate');
// const aboutEdu = document.querySelector('.eduDescription');

//   if(document.location.hash ==="#info") checkInfo();
//   if(document.location.hash ==="#experience") checkExperience();
//   if(document.location.hash ==="#education") checkEducation();

// }

// //Checking inputted fields validation
// const validation = function(field){
//     //Restriction for space character in number input field
//     //Vlidate number
//     if(field.id==='number'){
//         if(field.value.match(/\s/g)){
//       field.value=field.value.replace(/\s/g,'');      
// }
//     }
//     //validate job description
//     if(field.id === "jobDescription"){
//       if(!field.checkValidity()){
//         field.style.border = '2px solid #EF5050'
//       }
//       if(field.checkValidity()){
//         field.style.border = '2px solid #98E37E'
//       }
//       return;
//     }
//    //validate dates
//     if(field.id ==="start"||field.id==="end" || field.id==="eduEnd"){
//       field.style.border = '2px solid #98E37E'
//       const date = new Date(field.value)
//       if(date.getFullYear()<=1970){ 
//         field.style.border = '2px solid #EF5050'
//       }
//       return;
//     }
    
//     //Validate degrees
//     if(field.id ==="degree"){
//       field.style.border = '2px solid #98E37E'
//       return;
//     }


//     //validate fields with show/hide icon
//     const show = document.querySelector(`.show-${field.id}`);
//     const hide = document.querySelector(`.hide-${field.id}`);
//     if(field.checkValidity()){       
//     if(show==null){
//         field.style.border = '2px solid #98E37E'
//     }
//     if(field.id==='image'
//        ||field.id==='about'
//        ||field.id==='start'
//        ||field.id==="end"
//        ||field.id==="jobDescription"
//        ||field.id==="eduEnd"
//        ||field.id==="eduDescription"
//        ||field.id==="degree"
//       )
//        return;
//      show.classList.remove('hidden');
//      hide.classList.add('hidden');
//         field.style.border = '2px solid #98E37E'
//     }else{
//         show.classList.add('hidden');
//         hide.classList.remove('hidden');
//         field.style.border = '2px solid #EF5050'
//     }

// }

// //Sending data to seesionStorage
// /////Information form
// document.querySelector('.inputDetails').addEventListener('input',function(e){ 
// validation(e.target);
//         if(e.target.checkValidity()){
          
//              if(e.target.id!=='image'){
//             sessionStorage.setItem(e.target.id,e.target.value)
//         }
//         if(e.target.id==='image'){
//           console.log(e.target.value.name);
//           sessionStorage.setItem('image',e.target.value);
//              if (img.files && img.files[0]){
//             if(img.files[0].size>=2000000){
//                 alert('გთხოვთ შეარჩიოთ უფრო მცირე ზომის ფოტო (მაქს:2მბ)');
//                 return;
//             }
//         var reader = new FileReader();
//         reader.onload = function (e) { 
         
//             sessionStorage.setItem('src',e.target.result);
//             retrieveData();
//         }
//         reader.readAsDataURL(img.files[0]);
//     }
//         }
//         }
//         btnEnabler();
        
//    retrieveData();
// })
// /////Experience form
// document.querySelector('.experience').addEventListener('input',function(e){
//   submit.style.cursor = "not-allowed";
//         submit.disabled = true;
//          btnEnabler();
// validation(e.target);
// retrieveData();
// if(e.target.checkValidity()){
//   sessionStorage.setItem(e.target.id, e.target.value);
// }
// })
// ////Education form
// document.querySelector('.education').addEventListener('input',function(e){
//   submit.style.cursor = "not-allowed";
//         submit.disabled = true;
//   validation(e.target);
//   if(e.target.value !="null"){
//   document.querySelector('.educationCV').classList.remove('hide');
//   }
  
//   if(e.target.checkValidity()){
//     sessionStorage.setItem(e.target.id, e.target.value);
//   }
//  btnEnabler();
//   retrieveData();
// })
// }

// //renderInfo();

// const pagesNavigation = function(){

// const submit =  document.querySelector('.submit');
// //Next page button 
// submit.addEventListener('click',function(e){

//   ////Render Resume
//   if(document.location.hash === '#education'){
//     document.querySelector('.submit').addEventListener('click',function(){
//       document.location.hash = "#resume";
//       document.querySelector('.inputDetails').style.display = "none";
//       document.querySelector('.experience').style.display = "none";
//       document.querySelector('.education').style.display = "none";
//       document.querySelector('.infoHead').style.display="none";
      
//       document.querySelector('.resume').style.marginTop="0px";
//       document.querySelector('.resume').style.marginLeft="550px";
//       document.querySelector('.succes').classList.remove('hidden');
//       document.querySelector(".remove").addEventListener('click',function(){
//         document.querySelector('.succes').classList.add('hidden');
        
//       })
//     })
  
    
//   }
//     //Selections for navigation
//     const div1 = document.querySelector('.inputDetails');
//     const info = document.querySelector('.infoHead');
//     const page = document.querySelector('.infoSpan');
// document.querySelector('.backWard').style.visibility = "visible";
//     //Creating new elements, because losing chained span
//     // Page 2/3
//     const span = document.createElement("span");
//     const text = document.createTextNode('2/3');
//     span.appendChild(text);
//     span.classList.add('infoSpan');
//     // Page 3/3
//     const span1 = document.createElement("span");
//     const text1 = document.createTextNode('3/3');
//     span1.appendChild(text1);
//     span1.classList.add('infoSpan');

//     if(page.textContent === '1/3'){
//       submit.disabled = true;
//       submit.style.cursor = "not-allowed";
//         document.location.hash = '#experience';
//         document.querySelector('.backWard').style.visibility = "visible";
//         div1.classList.add('hidden');
//         info.textContent = 'გამოცდილება';
//         document.querySelector('.experience').classList.remove('hide');

//         info.appendChild(span);
//     }
//     if(page.textContent === '2/3'){
//       submit.disabled = true;
//       submit.style.cursor = "not-allowed";

//         document.location.hash = '#education';
//         div1.classList.add('hidden');
//         info.textContent = 'განათლება';
//         info.appendChild(span1);
//         document.querySelector('.submit').textContent = "დასრულება";
//         document.querySelector('.experience').classList.add('hide');
//         document.querySelector('.education').classList.remove('hide');
//     }
   
// })


// }





// // Event for start filling fields
// const buttonFunctions = function(){
// //Selections for navigate
// const addResume = document.querySelector('.addResume');
// const backWard = document.querySelector('.backWard');
// const back = document.querySelector('.back');

// // Event listener for returning main page and reset data
// back.addEventListener('click',function(){
    
//     document.querySelector('.firstPage').classList.remove('hide');
//     document.location.hash = '#firstPage';
//     document.querySelector('.info').classList.add('hide');
//     sessionStorage.clear();
//     location.reload();
//     document.querySelector('.backWard').style.visibility = "hidden";
// })



//   addResume.addEventListener('click',function(e){
//     document.querySelector('.education').classList.add('hide');
//     document.querySelector('.experience').classList.add('hide');
//     document.querySelector('.backWard').classList.add('hidden');
// document.querySelector('.info').classList.remove('hide');
//  document.querySelector('.firstPage').classList.add('hide');
// })
// // Event for return first page and clear storage
// backWard.addEventListener('click',function(e){
//     e.preventDefault();
//     document.querySelector('.education').classList.add('hide');

//     const info = document.querySelector('.infoHead');
//     const page = document.querySelector('.infoSpan');
//     if(page.textContent === "1/3"){
//         document.location.hash = '#info';
//         document.querySelector('.submit').textContent = "შემდეგი";
//     document.querySelector('.backWard').style.visibility = "hidden";
//     }
//     if(page.textContent === '2/3'){
//         document.querySelector('.experience').classList.add('hide');

//         document.location.hash = '#info';
//     const span = document.createElement("span");
//     const text = document.createTextNode('1/3');
//     span.appendChild(text);
//     span.classList.add('infoSpan');
//     info.textContent='პირადი ინფო';
//     info.appendChild(span);
//     document.querySelector('.submit').textContent = "შემდეგი";

//     document.querySelector('.inputDetails').classList.remove('hidden');
//     document.querySelector('.backWard').style.visibility = "hidden";
//     }
//     if(page.textContent === '3/3'){
//         document.querySelector('.experience').classList.remove('hide');

//         const span = document.createElement("span");
//         const text = document.createTextNode('2/3');
//         document.location.hash = '#experience';
//         span.appendChild(text);
//         document.querySelector('.submit').textContent = "შემდეგი";

//         span.classList.add('infoSpan');
//         info.textContent='გამოცდილება';
//         info.appendChild(span);
//         }
    
// })
// //Event for stay in same page when refreshi
// window.addEventListener('load',function(e){
//     e.preventDefault();
//     if(document.location.hash === "#info"){
//         document.querySelector('.experience').classList.add('hide');
//         document.querySelector('.education').classList.add('hide');

//         this.document.querySelector(".backWard").style.visibility = "hidden";
//         document.querySelector('.firstPage').classList.add('hide');
//         document.querySelector('.info').classList.remove('hide');
//     }
//     if(document.location.hash === "#experience"){
//         document.querySelector('.education').classList.add('hide');
//         document.querySelector('.inputDetails').classList.add('hidden');
//         document.querySelector(".backWard").style.visibility = "visible";
//         document.querySelector('.firstPage').classList.add('hide');
//         document.querySelector('.info').classList.remove('hide');
//         const info = document.querySelector('.infoHead');
//         const span = document.createElement("span");
//         const text = document.createTextNode('2/3');
//         document.location.hash = '#experience';
//         span.appendChild(text);
//         span.classList.add('infoSpan');
//         info.textContent='გამოცდილება';
//         info.appendChild(span);
//         document.querySelector('.experience').classList.remove('hide');

//     }
//     if(document.location.hash === "#education"){
//         document.querySelector('.inputDetails').classList.add('hidden');
//         document.querySelector(".backWard").style.visibility = "visible";
//         document.querySelector('.firstPage').classList.add('hide');
//         document.querySelector('.info').classList.remove('hide');
//         const info = document.querySelector('.infoHead');
//         const span = document.createElement("span");
//         const text = document.createTextNode('3/3');
//         document.location.hash = '#education';
//         span.appendChild(text);
//         span.classList.add('infoSpan');
//         info.textContent='განათლება';
//         info.appendChild(span);
//         document.querySelector('.experience').classList.add('hide');
//         document.querySelector('.submit').textContent = "დასრულება";
//     }
//     if(document.location.hash ==="#resume"){
//      document.location.hash = "#firstpage";
//      sessionStorage.clear();
//      location.reload();
//     }




//    /////////////////////////////////////////////
//    //Adding new experience and new education
//     const addExperience = document.querySelector('.addExperience');
//     const form2 = document.querySelector('.experience');
//     const addEducation  = document.querySelector('.addEducation');
//     const form3 = document.querySelector('.education');
//     addEducation.addEventListener('click',function(e){
//         e.preventDefault();
//         form3.insertAdjacentHTML('afterbegin',` <div class="uniLabel">
//         <h2 class="dateHead">
//                 სასწავლებელი
//               </h2>
//               <input class="university" minlength="2"  required>
//               <h6 class="message" style="font-weight: lighter">
//                 მინიმუმ 2 სიმბოლო
//               </h6>
//       </div>
//       <div class="degreeLabel">
//         <div class="degrees">
//           <h2 class="dateHead">
//             ხარისხი
//           </h2>
//           <input class="degree"  required>
          
//         </div>
//         <div class="eduDate">
//           <h2 class="dateHead">
//             დასრულების რიცხვი
//           </h2>
//           <input class="date" type="date"  required>
//         </div>
//       </div>

//       <div class="edu">
//         <h2 class="dateHead">აღწერა</h2>
//         <textarea class="eduDescription"  placeholder="განათლების აღწერა"></textarea>
//       </div>

//       <hr class="underLine">`)
//     })
//     addExperience.addEventListener('click',function(e){
//         e.preventDefault();
//         form2.insertAdjacentHTML('afterbegin',`<div class="positionLabel">
            
//         <h2 class="positionHead">თანამდებობა</h2>
//         <input id="position" class="position" minlength="2" placeholder="დეველოპერი, დიზაინერი, ა.შ" required>
//         <i style="margin-top: 14px;" class="fa-solid fa-circle-check show-position hidden"></i>
//         <i class="fa-solid fa-triangle-exclamation hide-position hidden"></i>
//         <h6 class="message" style="font-weight: lighter">
//           მინიმუმ 2 სიმბოლო
//         </h6>
//       </div>

//       <div for="employer" class="employerLabel">
//         <h2 class="employerHead">დამსაქმებელი</h2>
//         <input id="employer" class="employer" minlength="2" placeholder="დამსაქმებელი" required>
//         <i style="margin-top: 13px;" class="fa-solid fa-circle-check show-employer hidden"></i>
//         <i class="fa-solid fa-triangle-exclamation hide-employer hidden"></i>
//         <h6 class="message" style="font-weight: lighter">
//           მინიმუმ 2 სიმბოლო
//         </h6>
//       </div>

//       <div class="dateLabel">
//         <div class="date1">
//           <h2 class="dateHead">
//             დაწყების რიცხვი
//           </h2>
//           <input class="start" id="start" type="date required">
//         </div>
        
        
//           <div class="date2">
//             <h2 class="dateHead">
//               დასრულების რიცხვი
//             </h2>
//             <input class="end" id="end" type="date required">
//           </div>
//       </div>
//       <div class="job">
//         <h2 class="dateHead">აღწერა</h2>
//         <textarea class="jobDescription" id="jobDescription" placeholder="როლი თანამდებობაზე და ზოგადი აღწერა required"></textarea>
//       </div>
//       <hr class="underLine">`)
//     })

// })


// }
// //buttonFunctions();



// //pagesNavigation();

// //renderInfo();

// // console.log(sessionStorage);
// // if(document.location.hash === "#resume"){
// //   const formData = sessionStorage;
// // console.log(formData);
// // }


// // fetch('https://resume.redberryinternship.ge/api/cvs', {
// //     method: 'POST',
// //     headers: {
// //         'Accept': 'application/json',
// //         'Content-Type': 'application/json'
// //     },
// //     body: JSON.stringify({ "name": sessionStorage.getItem('name'),
// //     "surname":sessionStorage.getItem('lastname'),
// //      "email":sessionStorage.getItem('email'),
// //      "phone_number":sessionStorage.getItem('number'),
// //      "experiences":[
// //       {
// //               "position":sessionStorage.getItem('position'),
// //               "employer":sessionStorage.getItem('employer'),
// //               "start_date":sessionStorage.getItem('start'),
// //               "due_date":sessionStorage.getItem('end'),
// //               "description":sessionStorage.getItem('jobDescription')
// //       }
// //      ],
// //      "educations":[
// //       {
// //         "institute":sessionStorage.getItem('university'),
// //         "degree":sessionStorage.getItem('degree'),
// //         "due_date":sessionStorage.getItem('eduEnd'),
// //         "descpription":sessionStorage.getItem('eduDescription')
// //       }
// //      ],
// //      "image":sessionStorage.getItem('image'),
// //      "about_me":sessionStorage.getItem('about')

// //     })
// // })
// // .then(response => response.json())
// // .then(response => console.log(JSON.stringify(response)))



//Stay same page when reload
// const catchReload = function(){
//   window.addEventListener('load',function(){
//   if(sessionStorage.getItem('counter')==0)render(0);
//   if(sessionStorage.getItem('counter')==1)render(1);
//   if(sessionStorage.getItem('counter')==2){
//     render(2)};
//     this.sessionStorage.setItem('counter',2);

// } 
// )
// }
//catchReload();



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
  // &&sessionStorage.getItem(src)&&
  // sessionStorage.getItem(email)&&
  // sessionStorage.getItem(number)
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
      // &&sessionStorage.getItem('employer')&&
      // sessionStorage.getItem('start')&&
      // sessionStorage.getItem('end')&&
      // sessionStorage.getItem('jobDescription')
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
// &&sessionStorage.getItem('degree')&&
// sessionStorage.getItem('eduEnd')
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


document.addEventListener('change',function(){
 
  if(document.querySelector('.pageHead').textContent==="განათლება"){
  document.querySelector('.submit').addEventListener('click',function(){
    console.log('ესაა');
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


