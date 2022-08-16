
function Employee(empId,fullName,department,level,imgUrl){
    this.employeeId = empId;
    this.employeeFullName = fullName;
    this.employeeDepartment = department;
    this.employeelevel = level;
    this.employeeImg = imgUrl
    

    this.salary =  () =>
    {
        switch (this.employeelevel) {
            case "Junior":
                return  parseFloat(Math.random() * (1000 - 500 + 1) + 500).toFixed(2)

            case "Mid-Senior":
                return parseFloat(Math.random() * (1500 - 1000 + 1) + 1000).toFixed(2)
            case "Senior":
                return parseFloat(Math.random() * (2000 - 1500 + 1) + 1500).toFixed(2)
        }
    }
}





let main = document.getElementById("main")

let table = document.createElement("table")
table.setAttribute("border",1 + "px")

main.append(table)

let thead = document.createElement("thead")




let th1 = document.createElement("th")
th1.textContent = "Employee Id"
thead.append(th1)

let th2 = document.createElement("th")
th2.textContent = "Full Name"
thead.append(th2)

let th3 = document.createElement("th")
th3.textContent = "Department"
thead.append(th3)

let th4 = document.createElement("th")
th4.textContent = "Level"
thead.append(th4)

let th5 = document.createElement("th")
th5.textContent = "Salary"
thead.append(th5)

table.prepend(thead)




let submit = document.getElementById("submit")

let id = document.getElementById("emp_id")
let full_name = document.getElementById("full_name")
let imgUrl = document.getElementById("img_url")

let department = document.getElementById("departments")
let level = document.getElementById("levels")


submit.addEventListener("click", (e) => {
e.preventDefault()

let emp = new Employee(id.value,full_name.value,department.value,level.value,imgUrl.value)
render(id.value,full_name.value,department.value,level.value,emp.salary())
id.value = ""
full_name.value = ""
department.value = department[0].value
level.value = level[0].value
imgUrl.value = ""
})





function render(...rows)
{
let tr = document.createElement("tr")
let persons = []
for (let row of rows) {
let td = document.createElement("td")
td.textContent = row
tr.append(td)
persons.push(row)
}
table.append(tr)

setLocalStorage(persons)
}

var count = 0;
function setLocalStorage (...persons){
    for (let i = 0; i < persons.length; i++) {
        localStorage.setItem(`persons ${count}`,JSON.stringify(persons))
        count ++;
    }
}







// <div class="blurred-box">
          
  //document.getElementsByClassName(user-name)={document.write}
    
  

//         <div class="user-login-box">
//             <span class="user-icon"></span>
//             <div class="user-name">Gilfoyle</div>
//             <input class="user-password" type="text" />
//         </div>
    
//     </div>