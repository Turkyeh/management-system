 //Q1: Evaluate each of the following Javascript expressions and show the value
// 1. ‐9*3
console.log( -9*3);//-27
//  2. “value is “+50 
console.log("value is "+50 );//value is 50 //string

//  3. 17 % 5 
console.log(17 % 5 );//2

//  4. 5 % 17 
console.log( 5 % 17);//5 the Min number

//  5. 5/10 
console.log(5/10 );//0.5 

//  6. (4==4)
console.log(4==4);//true 

//   7. (4 !=5) 
console.log(4 !=5);//true

//   8. (7 <=8) 
console.log(7 <=8); //true

//9. Math.ceil(x) ‐ Math.floor(x)
//console.log(Math.ceil(x) - Math.floor(x));// undefined becouse x not defined


// Q2 : Read a number (using prompt) and display it using alert

let reder1 = prompt("pleaze Enter a number");
alert(`${reder1}`);

//Q3 : Read in two numbers and display them in ascending order.
let reder2 = prompt("pleaze Enter a number");
let reder3= prompt("pleaze Enter a number");

if (reder2 < reder3) { alert(`${reder3}  ${reder2} `) } else { alert(`${reder2}  ${reder3}`); }

//Q4: Read in two numbers and display the larger
reder2 > reder3 ? alert(`${reder2}`) : alert(`${reder3}`);//Ternaly if


//Q5: Read two numbers and display their sum.  What problem did you encounter?
let sum = Number(reder2) + Number(reder3);
alert(`the sum of reder2+ reder 3 is= ${sum}`);


// Q7: If you have a “num” variable,  Your task is to print:

// - ONE, if it is equal to 1 .
// - TWO, if it is equal to 2.
// - THREE, if it is equal to 3 .
// - FOUR, if it is equal to 4.
// - FIVE, if it is equal to 5.
// - SIX, if it is equal to 6 .
// - SEVEN, if it is equal to 7.
// - EIGHT, if it is equal to 8.
// - NINE, if it is equal to 9.
// - PLEASE TRY AGAIN, if there is none of the above.

let Num = prompt("giv me a number plz");

switch (Num) {
    
    case 1:
    { console.log("it is a one");
        break;}
    case 2:
        {console.log("it is a Two");
        break;}
    case 3:
        {console.log("it is a Three");
        break;}
    case 4:
    { console.log("it is a Four");
        break;}
    case 5:
    { console.log("it is a Five");
        break;}
    case 6:
    { console.log("it is a sex");
        break;}
    case 7:
    { console.log("it is a seven");
        break;}
    case 8:
    { console.log("it is a eight");
        break;}
    case 9:
    { console.log("it is a nine");
        break;}  
    default:

    {console.log("PLEASE TRY AGAIN, if there is none of the above");

        break;}
}
//Q7: Use a loop to display the numbers 0 through 5, each in a separate alert window.


let single = [];

for (let j = 0; j <= 5; j++)// separate alert window.

{
    window.alert(`${j}`);
    
    }

//Q8: Use a loop to display the numbers 0 through 5 in a single alert window
for (let j = 0; j <= 5; j++)// separate alert window.

{
    single[j] = j;
    
    }

    window.alert(`${single} `);
    
 //Q9: Use a loop to display the numbers in the range 0…20 that are multiples of 3.

let mult=[];
for (let j = 0; j <= 20; j++)// separate alert window.
{ 
    if(j%3==0) 
    {
       // mult=mult.push(`${j}`); 
        window.alert( "  is multiple of 3"+ " "+ j );
    }

}

//Q10: Prompt the user for a number in the range 0…100.  If the number is out of range, 
//display an error message and prompt again until a valid number is entered.Assume the user enters a number each time


let n = prompt("Please enter a number in the range 0…100");
while (n<0 || n>100)
{
 alert(n +" is out of range. Try again.");
 n = prompt("Please enter a number in the range 0…100");
4
}
// Solution 2: Put the test inside the loop.
while (true)
{
 let n = prompt("Please enter a number in the range 0…100");
 if (n>=0 && n<=100) break;
 alert(n +" is out of range. Try again.");
} 

 //Q11: Repeat previous exercise, but this time allow for the possibility that the user enters 
 //something that is not a number.Hint: the built in function isNaN(x) returns true if x is 
 //not a number.It returns false if x is a number.Sort of backwards, but that's what's available.


let mon = prompt("Please enter a number in the range 0…100");
while (isNaN(mon) || mon<0 || mon>100)
{
 alert(mon +" is out of range or not a number. Try again.");
 mon = prompt("Please enter a number in the range 0…100");
}
// Solution 2: put the test inside the loop.
while (true)
{
 let ne = prompt("Please enter a number in the range 0…100");
 if (!isNaN(ne) && ne>=0 && ne<=100) break;
 alert(ne +" is out of range or not a number. Try again.");
}
   
//Q12: Prompt for an integer, then display the sum of the integers from 0 through the number
//entered.For example, if you enter 10, then display 55 which is the 
//sum of   0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
let max = 1*prompt ("Please enter an integer.");
let sume = 0;
for (var i=0; i<=max; i++)
5
 sume = sume + i; // Add i to the running sum.
alert("The sum of 0 through " + max + " is " + sume);

//Q13: Prompt for an integer, then display the average of the integers from 0 through the number entered.  For example, if you enter 10, then display 5
//which is the average of(0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10) / 11.
let maxx = 1*prompt ("Please enter an integer.");
let summ = 0;
for (let i=0; i<=maxx; i++)
 summ = summ + i; // Add i to the running sum.
alert("The average of 0 through "+maxx+" is "+(summ/(maxx+1))); 