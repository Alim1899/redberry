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

// // Selections for rendered cv
// const fullname = document.querySelector('.fullName');
// const aboutCV = document.querySelector('.resumeDetails');
// const emailCV = document.querySelector('.resumeEmail');
// const numberCV = document.querySelector('.resumeNumber');
// const imgCV = document.querySelector('.resumeImg');
// const positionCV = document.querySelector('.positionCV')
// const jobDesc = document.querySelector('.descriptionCV');
// const jobtDate = document.querySelector('.startEnd');
// const university = document.querySelector('.universityCV');
// const eduEnd = document.querySelector('.eduEnd');
// const eduDesc = document.querySelector('.eduDescriptionCV');
// //retrieving data from localSTorage
// const retrieveData = function(){  
  
//   const retrieveInfo = function(){
// //Retrieving name and lastname, then creating fullname
// fullname.textContent = 
// (localStorage.getItem('name') ?localStorage.getItem('name'):'')
// + ' ' + 
// (localStorage.getItem('lastname')?localStorage.getItem('lastname'):(''));

// //Retrieve image
// if(localStorage.getItem('src')) {
// imgCV.classList.remove('hidden');
// imgCV.src=localStorage.getItem('src');
// }

// //Show/hide about me section
// if(localStorage.getItem('about')) document.querySelector('.aboutMeCv').classList.remove('hidden');
// aboutCV.textContent = localStorage.getItem('about'); 

// //Fontawesome icons
//     const emailIcon = '<i class="fa-solid fa-at"></i>';
//     const dialIcon = '<i class="fa-solid fa-phone"></i>';

// if(localStorage.getItem('email')) emailCV.innerHTML = emailIcon + ' ' + localStorage.getItem('email');
// else emailCV.textContent ='';

// if(localStorage.getItem('number')) numberCV.innerHTML = dialIcon + ' ' + localStorage.getItem('number');
// else numberCV.textContent = '';

//   }  
//   retrieveInfo();   
// const retrieveExperience = function(){
//   if(localStorage.getItem('position')||
//   localStorage.getItem('employer')||
//   localStorage.getItem('jobDescription')  
//   ){
//     document.querySelector('.experienceCV').classList.remove('hide')
//   }
//   if(localStorage.getItem('position')&&
//   localStorage.getItem('employer')){
//     positionCV.textContent = localStorage.getItem('position')
//     + ', ' +localStorage.getItem('employer') ;
//   }
//   if(localStorage.getItem('jobDescription'))
//    jobDesc.textContent = localStorage.getItem('jobDescription');

//    if(localStorage.getItem("start")&&
//    localStorage.getItem("start")
//    )jobtDate.textContent = localStorage.getItem('start') +
//    " - " + localStorage.getItem('end');
// }
// retrieveExperience();

// const retrieveEducation = function(){
//   document.querySelector('.educationCV')
// if(localStorage.getItem('university')) {
//   if(!localStorage.getItem('degree')){
//       university.textContent = localStorage.getItem('university');
//   }
//   if(localStorage.getItem('degree')){
//     university.textContent = localStorage.getItem('university')
//     + ", " + localStorage.getItem("degree");
// }
// }
// if(localStorage.getItem("eduEnd")) eduEnd.textContent = localStorage.getItem('eduEnd');
// if(localStorage.getItem("eduDescription")) eduDesc.textContent = localStorage.getItem("eduDescription");

// }
// retrieveEducation();

// }
// retrieveData();

// //Enable/disable nextPage button
// const btnEnabler = function(){
//   const checkInfo = function(){
//     if(
//         name.checkValidity() &&
//         lastname.checkValidity() &&
//         email.checkValidity() &&
//         number.checkValidity()
//     ){
//       submit.style.cursor = "pointer";
//       submit.disabled = false;
//     }else{
//       submit.disabled = true;
//     }

//   }
//   const checkExperience = function(){
//     if(
//       position.checkValidity()&&
//       employer.checkValidity()&&
//       startDate.checkValidity()&&
//       endDate.checkValidity()&&
//       JobDescription.checkValidity()
//     ){
//       submit.style.cursor = "pointer";
//       submit.disabled = false;
//     }else{
//       submit.style.cursor = "not-allowed";
//       submit.disabled = true;
//     }
//   }
//   const checkEducation = function(){
// if(uni.checkValidity()&&
// uniDegree.checkValidity()&&
// aboutEdu.checkValidity()
// ){
//   submit.style.cursor = "pointer";
//   submit.disabled = false;
// }else{
//   submit.style.cursor = "not-allowed";
//       submit.disabled = true;
// }
//   }

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
//             localStorage.setItem(e.target.id,e.target.value)
//         }
//         if(e.target.id==='image'){
//           console.log(e.target.value.name);
//           localStorage.setItem('image',e.target.value);
//              if (img.files && img.files[0]){
//             if(img.files[0].size>=2000000){
//                 alert('გთხოვთ შეარჩიოთ უფრო მცირე ზომის ფოტო (მაქს:2მბ)');
//                 return;
//             }
//         var reader = new FileReader();
//         reader.onload = function (e) { 
         
//             localStorage.setItem('src',e.target.result);
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
//   localStorage.setItem(e.target.id, e.target.value);
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
//     localStorage.setItem(e.target.id, e.target.value);
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
//     localStorage.clear();
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
//      localStorage.clear();
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



// // const degree = document.querySelector('.degree');
// //  fetch( 'https://resume.redberryinternship.ge/api/degrees')
// // .then(response=>response.json()
// // .then(data=>{data.forEach(el =>degree.insertAdjacentHTML("afterbegin",`
// //   <option class="options">${el.title}</options>`) )
// // }))



// // console.log(localStorage);
// // if(document.location.hash === "#resume"){
// //   const formData = localStorage;
// // console.log(formData);
// // }


// // fetch('https://resume.redberryinternship.ge/api/cvs', {
// //     method: 'POST',
// //     headers: {
// //         'Accept': 'application/json',
// //         'Content-Type': 'application/json'
// //     },
// //     body: JSON.stringify({ "name": localStorage.getItem('name'),
// //     "surname":localStorage.getItem('lastname'),
// //      "email":localStorage.getItem('email'),
// //      "phone_number":localStorage.getItem('number'),
// //      "experiences":[
// //       {
// //               "position":localStorage.getItem('position'),
// //               "employer":localStorage.getItem('employer'),
// //               "start_date":localStorage.getItem('start'),
// //               "due_date":localStorage.getItem('end'),
// //               "description":localStorage.getItem('jobDescription')
// //       }
// //      ],
// //      "educations":[
// //       {
// //         "institute":localStorage.getItem('university'),
// //         "degree":localStorage.getItem('degree'),
// //         "due_date":localStorage.getItem('eduEnd'),
// //         "descpription":localStorage.getItem('eduDescription')
// //       }
// //      ],
// //      "image":localStorage.getItem('image'),
// //      "about_me":localStorage.getItem('about')

// //     })
// // })
// // .then(response => response.json())
// // .then(response => console.log(JSON.stringify(response)))




//Checking inputted fields validation



const fieldColor = function(field){
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

let counter = 0;
const firstPage = document.querySelector('.firstPage');
const info = document.querySelector('.inputDetails');
const experience = document.querySelector('.experience');
const education = document.querySelector('.education');
const dataSaver = function(e){
  fieldColor(e.target);
  if(e.target.checkValidity()){
      sessionStorage.setItem(e.target.id,e.target.value);
    if(!e.target.checkValidity()){
      sessionStorage.removeItem(e.target.id)
}
  }
}
  document.addEventListener('input',function(e){
      dataSaver(e);  
})
window.addEventListener('load',function(){      
})
////Navigation
const navigate = function(){
 const next = document.querySelector('.submit');
 const back = document.querySelector('.backward');
 const reset = document.querySelector('.back');
 const start = document.querySelector('.addResume');

 start.addEventListener('click',function(){ 
  back.style.visibility = "hidden";
  counter=1;
  firstPage.classList.add('hide');
  info.classList.remove('hide');
  console.log(counter);
})
 
 reset.addEventListener('click',function(){
  counter=0;
  firstPage.classList.remove('hide');
  console.log(counter);
 })
  next.addEventListener('click',function(){
    if(counter!==3) counter++;
    renderer();
    back.style.visibility = "visible";
    if(counter===3){
      
      next.textContent = "დასრულება";
      return;
    }
    console.log(counter);
       if(counter===0||counter===1)back.style.visibility = "hidden";
  })
  back.addEventListener('click',function(){
    next.textContent = "შემდეგი";
   if(counter!==0) counter--;
   if(counter===0||counter===1)back.style.visibility = "hidden";
   console.log(counter);
    console.log(counter);
    next.textContent = "შემდეგი";
  })
   
}

navigate();









































//Stay same page when reload
// const stayPage = function(pageNumber){
//   console.log(counter); 
//        counter++;
//     firstPage.classList.add('hide');
//     info.classList.remove('hide');
// console.log(counter);
// }