window.alert("this part we use a loop in js and commint a nother fail ");


let pass = prompt("Do you wont to create a password", "yes or no");
let news=prompt("Would you like to subscribe to our newsletter to get the latest news?", "yes or no");
let color = prompt("Would you like to contact us?", "yes or no");
let enfor = ["yes","yes","yes"];

pass = pass.toUpperCase();
news = news.toUpperCase();
color = color.toUpperCase();


for (let i = 0; i < 3; i++)
{

    switch (i) {

        case (0):
            {
                if (pass != "YES" || pass != "NO" || pass != "Y" || pass != "N" || pass !== "YES OR NO") {
                    pass = "invalid";
                }
                else if (news != "YES" || news != "NO" || news != "Y" || news != "N" || news !== "YES OR NO") {
                    news = "invalid";
                }

                else (color != "YES" || color != "NO" || color != "Y" || color != "N" || color !== "YES OR NO") {
                    color = "invalid";
                }

            }
        
        
        case (1):
            {
                enfor = [pass, news, color];

            }
        case (i == 2):
            {
                document.write(`<div>`);
                document.write(`<p>"the array inpout is : "</p>`);
                
                document.write(`</div>`);
            }
        document.write(`<p>${enfor[ ]} </p>`);
    }
}

let rate = window.prompt("Can you rate my site 1-5 star", "Number");

if (Number < 5)
{
    rate = window.prompt("Can you rate my site 1-5 star", "Number");
    
}
else
{
  if (rate == 5) { document.write("IM HAPPY BECOUSE MY WEB SITE YOU LIKE *****"); window.alert("Thanks for your time"); }
   else if (rate == 4) { document.write("IM HAPPY BECOUSE MY WEB SITE YOU LIKE ****"); window.alert("Thanks for your time");    }
      else if (rate == 3) { document.write("IM HAPPY   ***"); window.alert("Thanks for your time");    }
            else if (rate == 2) { document.write("I'm sorry that you don't like my site, I'll fix ite **"); window.alert("Thanks for your time");    }
                else if (rate == 1) { document.write("I'm sorry that you don't like my site, I'll fix it*"); window.alert("Thanks for your time");    }



}




