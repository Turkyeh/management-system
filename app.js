
alert("Please enter all the required spaces");

let username = prompt("Please enter your name");
let Age;
let gender;
// let FEMAlE="FEMAlE";
// let MAlE="MAlE";
let flag = 0;

console.log(typeof (username));

if (typeof (username) !==`String`)
{
        username = prompt("Please make sure to enter your name", "Turkyeh");

    for (i = 0; i < 3; i++) {

        if (typeof (username) ===`string`) {
            break;

        }
        else {
            username = prompt("Please make sure to enter your name", "Turkyeh");
        }
    }

}
else {
    Age = prompt("Please enter your age");
    if (typeof(Age)!== 'number' || Age <= 0) {
        Age = prompt("Please make sure to enter your age");
    }
}


gender = prompt("Please enter your gender", "male or female");

        if (gender.toUpperCase()!== "FEMAlE" || gender.toUpperCase() !== "MAlE" || typeof(gender)=='undefined')
        {
            gender = prompt("Please mack sure to enter your gener", "male or female");

        }
        else
        {
            if (gender.toUpperCase()== "FMALE")
            {
                
                flag =0;

            }
            else
            {
               flag = 1;

            }
            
        }
    


let message=  window.confirm( "Do you  wants to see the welcoming message.");
if (message ==true)
{
    if (MAlE) {
        document.write(`<h1>WELLCOME MESSAGE </h1>`);
        document.write(`<p>IM HAPPY TO SEE YOU IN MY PAGE </p>`);
        document.write(`<p>Wellcome MR ${username} ("-")</p>`);

    }
    
    else if (FEMAlE)
        {
        document.write(`<h1>WELLCOME MESSAGE </h1>`);
        document.write(`<p>IM HAPPY TO SEE YOU IN MY PAGE </p>`);
        document.write(`<p>Wellcome MS ${username} ("-")</p>`);



    }

}





let save=  window.confirm( "Do you  wants to save your information to help you when you caming agin.");















