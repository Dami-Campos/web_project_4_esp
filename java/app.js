let open = 
document.querySelector("#open");
const close = 
document.querySelector("#close");
const popup = 
document.querySelector("#popup");

function showPopup() {
document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    }
    
open.addEventListener("click", showPopup); 
close.addEventListener("click", closePopup);


