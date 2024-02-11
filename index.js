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
//         alert("why isn't this working....lol...");
//     });
// }

