const navBox = document.querySelector(".icon-dropdown-box");

let isClicked = true;

function showHide(){
    if (isClicked){
        navBox.style.display = "block";
        isClicked = false;
    }
    else{
        navBox. style.display = "none";
        isClicked = true;
    }
}


//test onclick more nav icon for showHide() function

// function showHide(){
//     document.querySelector("#dropdown-nav-icon")
//     .addEventListener("click", function () {
//         alert("why isn't this working......");
//     });
// }

//window prompt - retailers page

// window.prompt("wwww.jaguarusa.com wwants to know your location")
// add allow or block buttons 


// display and hide function for builders link on main navigation 

const buildersBox = document.querySelector(".builds-dropdown");
let buildersClicked = true;

function displayHide(){
    if (buildersClicked){
        buildersBox.style.display = "block";
        buildersClicked = false;
    }
    else{
        buildersBox.style.display ="none";
        buildersClicked = true;
    }
}
// hide function for builders link on main navigation - close button

const buildsNav = document.querySelector(".builds-dropdown");
let closeNavbutton = true;

function closeBuilders(){
    if (closeNavbutton){
        buildsNav.style.display ="none";
        closeNavbutton = true;
    }
}
