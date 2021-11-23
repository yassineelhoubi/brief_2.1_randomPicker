document.getElementById('name').addEventListener("keyup", () => {
    document.getElementById('name').classList.remove('border', 'border-danger')
    
});

/* add student */
let studentsArrList = [];
let studentNumber = 1;

let resultListArr = [];

let addStudent = document.getElementById('addStudent');
let pick = document.getElementById('pick')
/* piker */
pick.onclick = function () {
  let studentsArrListRand = randomSelect(studentsArrList)

  for (let i = 0; i < studentsArrListRand.length; i++) {

    (function (i, count) {
        setTimeout(() => {
            let rand = Math.floor(Math.random() * (studentsArrListRand.length))
            document.getElementById('variable_name').innerHTML = studentsArrListRand[rand].name
            if (count === studentsArrListRand.length - 1) {
               
                    removeStudent (studentsArrListRand[rand])
                    pushToResultList (studentsArrListRand[rand])
                    refreshResultList ()
                    refreshStudentsList ()
                
               

            }

        }, i)
    })
    (i*150 , i)
}
}

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


function randomSelect(array) {

  let arr = [...array]

  for (let i = arr.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1))
      let temp = arr[rand]

      arr[rand] = arr[i]
      arr[i] = temp
  }
  return arr;


    // let rand = Math.floor(Math.random() * studentsArrList.length);

    // let student = studentsArrList[rand]

    // removeStudent (student)
    // pushToResultList (student)
    // refreshResultList ()
    // refreshStudentsList ()
}

function removeStudent(student) {

    studentsArrList.splice(studentsArrList.indexOf(student), 1);
    
}
const datePicker = document.querySelector("#datePicker");
datePicker.min = new Date().toLocaleDateString("en-ca");

datePicker.value = new Date().toLocaleDateString("en-ca");

datePicker.addEventListener("change", () => {
  const day = new Date(datePicker.value).getUTCDay();
  if ([0].includes(day)) {

    ifSun = new Date(datePicker.value)
    ifSun.setDate(ifSun.getDate()+1)

    datePicker.value = ifSun.toLocaleDateString("en-ca")

    
    return false;
  } else if ([6].includes(day)) {
    ifSat = new Date(datePicker.value)
    ifSat.setDate(ifSat.getDate()+2)

    datePicker.value = ifSat.toLocaleDateString("en-ca")
  }
});
let nextDay = 0

function pushToResultList(student) {

  
    let day = new Date(datePicker.value);
    
    day.setDate(day.getDate() + nextDay);
    // console.log(day.setDate(day.getDate() + nextDay))//miliSecond
 

    let dd = String(day.getDate()).padStart(2, "0");
    let mm = String(day.getMonth() + 1).padStart(2, "0");
    let yyyy = day.getFullYear();

    let theDate = dd+"/"+mm+"/"+yyyy;
    let DayName = day.toString().split(' ')[0];
     
    console.log(DayName)
    if(DayName == "Sat"){
        nextDay += 2;
        pushToResultList(student)
    }
    else{
    nextDay++;

    student.date = theDate
    resultListArr.push(student)
    }
    

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
                        <span class="badge btn btn-danger rounded-pill">${student.date}</span>
                      </li>
            `
        } else {
            sortList += `
             <li class="list-group-item d-flex justify-content-between align-items-start">
                         <div class="ms-2 me-auto">
                           <div class="fw-bold"><span class="me-2 fw-normal">${student.studentNumber}.</span>${student.name}</div>
                           <div class="ms-4">${student.subject}</div>
                         </div>
                         <span class="badge btn bg-danger rounded-pill">${student.date}</span>
                       </li>
             `

        }

    })

    document.getElementById('resultList').innerHTML = sortList
}

const downloadCSV = () => {
  console.log(resultListArr)
  let csvContent =
    "data:text/csv;charset=utf-8," +
    resultListArr.map((e) => [...Array.from(e)].join(",")).join("\n");
  var encodedUri = encodeURI(csvContent);
  window.open(encodedUri);
};