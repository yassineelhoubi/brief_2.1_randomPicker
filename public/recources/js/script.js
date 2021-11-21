let cyrcle = document.querySelector(".cyrcle");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 2000);

btn.onclick = async function () {
    console.log(number)
    cyrcle.style.transform = "rotate(" + number + "deg)";
    number = Math.ceil(Math.random() * 2000);

}

/* add student */
let studentsArrList = []
let studentNumber = 1

let addStudent = document.getElementById('addStudent');

addStudent.onclick = function () {

    let studentName =  document.getElementById('name');
    let studentSubject = document.getElementById('subject');
    /* check if student name null */
    if (studentName.value === ""){
        return ;
    }
    /* Creates the object and push it to the studentsArrList */
    obj = {
        studentNumber: studentNumber,
        name: studentName.value,
        subject: studentSubject.value
    }
    studentsArrList.push(obj)

    /* increment the number of student */
    studentNumber++

    /* refresh the students list */

    refreshStudentsList()

    /* reset input */
    studentName.value = ""
    studentSubject.value = ""

}

function refreshStudentsList() {    
    let sortList = null
    studentsArrList.forEach(student => {
        if (sortList == null) {
            sortList = `
            <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                          <div class="fw-bold"><span class="me-2 fw-normal">${student.studentNumber}.</span>${student.name}</div>
                          <div class="ms-4">${student.subject}</div>
                        </div>
                        <span class="badge btn btn-danger rounded-pill">delete</span>
                      </li>
            `
        } else {
            sortList += `
             <li class="list-group-item d-flex justify-content-between align-items-start">
                         <div class="ms-2 me-auto">
                           <div class="fw-bold"><span class="me-2 fw-normal">${student.studentNumber}.</span>${student.name}</div>
                           <div class="ms-4">${student.subject}</div>
                         </div>
                         <span class="badge btn bg-danger rounded-pill">delete</span>
                       </li>
             `

        }

    })

    document.getElementById('StudentsList').innerHTML = sortList

}