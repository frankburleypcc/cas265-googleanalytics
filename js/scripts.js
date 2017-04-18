//This adds functionality to the li ID's for 12px, 16px, and 18px
$("#12font").on("click", 
    function() {
    localStorage.fontSize = $("body").css("font-size", "12px"); 
})
$("#16font").on("click", 
    function() {
    localStorage.fontSize = $("body").css("font-size", "16px"); 
})
$("#18font").on("click", 
    function() {
    localStorage.fontSize = $("body").css("font-size", "18px"); 
})

// This checks to see if the sessionStorage.firstName and sessionStorage.lastName objects exist and contain info. If so, then we will add some text after the current year ID. If not, then nothing happens.

if (sessionStorage.getItem("firstName") !== null && sessionStorage.getItem("lastName") !== null) {
    $("#currentYear").after(". Welcome, " + sessionStorage.firstName + " " + sessionStorage.lastName);
}


//This adds the current year to the footer
var thisYear = new Date().getFullYear();

$("#currentYear").html(thisYear);

//Goal is: Need to write functionality that what page the visitor is on. If that page matches  to one of the links in the nav, then we need to add a background color to the parent <li> tag

//Psuedo code

// Check which page we're on and turn it into a VARIABLE
var currentPage = window.location.href;
// 1. Put all links into the nav in an ARRAY  = $("nav ul li a")
// 2. Loop through each array item = .each
// 3 and CHECK IF the href value of that array item matches the page we're on. 

$("nav ul li a").each(
                      
function() {
    $(this);
    
    if (currentPage.indexOf($(this).attr("href")) !== -1)
        {
            $(this).parent().addClass("highlight");
            return false;
        }
}
);
//IF SO, then we add a class to the parent element of the array item and stop the code

//IF NOT then we keep going through the loop