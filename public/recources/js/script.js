document.getElementById('name').addEventListener("keyup", () => {
    document.getElementById('name').classList.remove('border', 'border-danger')
    console.log('yassine ')
});

/* add student */
let studentsArrList = [];
let studentNumber = 1;

let resultListArr = [];

let addStudent = document.getElementById('addStudent');

addStudent.onclick = function () {

    let studentName = document.getElementById('name');
    let studentSubject = document.getElementById('subject');
    /* check if student name null */
    if (studentName.value === "") {
        return studentName.classList.add('border', 'border-danger');
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


function randomSelect() {

    let rand = Math.floor(Math.random() * studentsArrList.length);

    let student = studentsArrList[rand]

    removeStudent (student)
    pushToResultList (student)
    refreshResultList ()
    refreshStudentsList ()
}

function removeStudent(student) {

    studentsArrList.splice(studentsArrList.indexOf(student), 1);
    console.log(studentsArrList)
}

function pushToResultList(student) {
    resultListArr.push(student)

}

function refreshResultList () {
    let sortList = null
    resultListArr.forEach(student => {
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

    document.getElementById('resultList').innerHTML = sortList
}