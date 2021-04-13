import { dataCourses } from './dataCourses.js';
import { dataStudent } from './dataStudent.js';
var coursesTbody = document.getElementById('courses');
var studentsTbody = document.getElementById('students');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
var totalCreditElm = document.getElementById("total-credits");
btnfilterByName.onclick = function () { return applyFilterByName(); };
btnfilterByName.onclick = function () { return applyFilterByCredits(); };
renderCoursesInTable(dataCourses);
renderStudesInTable(dataStudent[0]);
totalCreditElm.innerHTML = "" + getTotalCredits(dataCourses);
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n    \n                            <td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function renderStudesInTable(student) {
    console.log('Desplegando estudiantes');
    var trElement = document.createElement("tr");
    var trElementa = document.createElement("tr");
    var trElementb = document.createElement("tr");
    var trElementc = document.createElement("tr");
    var trElementd = document.createElement("tr");
    trElement.innerHTML = "\n      <tr class=\"list-group-item\">\n      <td>" + "codigo" + "</td>\n      <td>" + student.cod + "</td>\n    \n      </tr>\n\n      ";
    studentsTbody.appendChild(trElement);
    trElementa.innerHTML = "\n         <tr class=\"list-group-item\">\n         <td>" + "cedula" + "</td>\n         <td>" + student.cedula + "</td>\n       \n         </tr>\n   \n         ";
    studentsTbody.appendChild(trElementa);
    trElementb.innerHTML = "\n         <tr class=\"list-group-item\">\n         <td>" + "edad" + "</td>\n         <td>" + student.edad + "</td>\n       \n         </tr>\n   \n         ";
    studentsTbody.appendChild(trElementb);
    trElementc.innerHTML = "\n         <tr class=\"card-body text-success\">\n         <td>" + "direccion" + "</td>\n         <td>" + student.direccion + "</td>\n       \n         </tr>\n   \n         ";
    studentsTbody.appendChild(trElementc);
    trElementd.innerHTML = "\n         <tr class=\"list-group-item\">\n         <td>" + "telefono" + "</td>\n         <td>" + student.tel + "</td>\n       \n         </tr>\n   \n         ";
    studentsTbody.appendChild(trElementd);
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function applyFilterByCredits() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByCredits(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function searchCourseByCredits(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.credits < parseInt(nameKey);
    });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
