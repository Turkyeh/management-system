function Employee(_EmployeeID,_Full_Name ,Department, level , Image_URL){
    this.ID=_EmployeeID;
    this.Full_name=_Full_Name;
    this.Department = Department;

    this.Level=level;

    this.Image_URL=Image_URL;

    this.Salary=salaryCounting(level);

}

let employee1=new Employee(1000 , "Ghazi samer" , "Administration" , "Senior" );
let employee2=new Employee(1001 , "Lana Ali" , "Finance" , "Senior" );
let employee3=new Employee(1002 , "Tamara Ayoub" , "Marketing" , "Senior" );
let employee4=new Employee(1003 , "Safi Walid" , "Administration" , "Mid-Senior" );
let employee5=new Employee(1004 , "Omar Zaid" , "Development" , "Senior" );
let employee6=new Employee(1005 , "Rana Saleh" , "Development" , "Junior" );
let employee7=new Employee(1006 , "Hadi Ahmad" , "Finance" , "Mid-Senior" );
//Math.random() * (max - min) + min;
function salaryCounting(level){
let minSal;
let maxSal;
let salary;
    if(level == "Senior"){
minSal=1500;
maxSal=2000;
         salary =Math.floor(Math.random() * (maxSal - minSal) + minSal);
    }

    else  if(level == "Mid-Senior"){
        minSal=1000;
        maxSal=1500;
                 salary = Math.floor(Math.random() * (maxSal - minSal) + minSal);
            }
    else if(level == "Junior"){
        minSal=500;
        maxSal=1000;
                 salary = Math.floor(Math.random() * (maxSal - minSal) + minSal);
            }
return salary;
}
render();

function render(){
    console.log("Name : " + employee1.Full_name + " , Salary =" + employee1.Salary) ;
    console.log("Name : " + employee2.Full_name + " , Salary =" + employee2.Salary) ;
    console.log("Name : " + employee3.Full_name + " , Salary =" + employee3.Salary) ;
    console.log("Name : " + employee4.Full_name + " , Salary =" + employee4.Salary) ;
    console.log("Name : " + employee5.Full_name + " , Salary =" + employee5.Salary) ;
    console.log("Name : " + employee6.Full_name + " , Salary =" + employee6.Salary) ;
    console.log("Name : " + employee7.Full_name + " , Salary =" + employee7.Salary) ;
}

// document.write(`<div>`);
// document.write(`<button>show</button>`);
// document.write(`</div>`);


// function toggleTable(){

//     document.getElementById("myTable").classList.toggle("hidden");

// }