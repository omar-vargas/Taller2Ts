import { Course } from './course.js';

import { dataCourses } from './dataCourses.js';

import { Student } from './student.js';

import { dataStudent } from './dataStudent.js';

let coursesTbody: HTMLElement = document.getElementById('courses')!;
let studentsTbody : HTMLElement = document.getElementById('students')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;

const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;




btnfilterByName.onclick = () => applyFilterByName();
btnfilterByName.onclick = ()  => applyFilterByCredits();
renderCoursesInTable(dataCourses);
renderStudesInTable(dataStudent[0]);

totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`


function renderCoursesInTable(courses: Course[]): void {
  console.log('Desplegando cursos');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `
    
                            <td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
   
  });
}
 


function renderStudesInTable(student : Student): void {
    console.log('Desplegando estudiantes');
    
      let trElement = document.createElement("tr");
      let trElementa = document.createElement("tr");
      let trElementb = document.createElement("tr");
      let trElementc = document.createElement("tr");
      let trElementd = document.createElement("tr");
      trElement.innerHTML = `
      <tr class="list-group-item">
      <td>${"codigo"}</td>
      <td>${student.cod}</td>
    
      </tr>

      `;
                             
         studentsTbody.appendChild(trElement);   
         
         trElementa.innerHTML = `
         <tr class="list-group-item">
         <td>${"cedula"}</td>
         <td>${student.cedula}</td>
       
         </tr>
   
         `;    
    
         studentsTbody.appendChild(trElementa);   


         trElementb.innerHTML = `
         <tr class="list-group-item">
         <td>${"edad"}</td>
         <td>${student.edad}</td>
       
         </tr>
   
         `;    
    
         studentsTbody.appendChild(trElementb);   

 
         
         trElementc.innerHTML = `
         <tr class="card-body text-success">
         <td>${"direccion"}</td>
         <td>${student.direccion}</td>
       
         </tr>
   
         `;    
    
         studentsTbody.appendChild(trElementc);   
         

         trElementd.innerHTML = `
         <tr class="list-group-item">
         <td>${"telefono"}</td>
         <td>${student.tel}</td>
       
         </tr>
   
         `;    
    
         studentsTbody.appendChild(trElementd);  

  }



 

function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}


function applyFilterByCredits() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByCredits(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}




function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter( c => 
    c.name.match(nameKey));
}

function searchCourseByCredits(nameKey: string, courses: Course[]) {

  return nameKey === '' ? dataCourses : courses.filter( c => 
    c.credits <= parseInt(nameKey));
}



function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}