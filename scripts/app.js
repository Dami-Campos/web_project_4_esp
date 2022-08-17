let open = 
document.querySelector("#open");
let close = 
document.querySelector("#close");
let popup = 
document.querySelector("#popup");
let nameInput = 
document.querySelector("#name");
let jobInput = 
document.querySelector("#job");

function showPopup() {
document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    }
    
open.addEventListener("click", showPopup); 
close.addEventListener("click", closePopup);


// Busquemos el formulario en el DOM
let formElement = document.querySelector("#form")

// Lo siguiente es el manipulador (handler) de entrega de formularios, aunque
// no se enviará en ningún sitio todavía

// Observa que el nombre de la función comienza con un verbo
// y describe exactamente lo que hace la función
function handleProfileFormSubmit(evt) {
    // Esta línea impide que el navegador
    // entregue el formulario en su forma predeterminada.
    evt.preventDefault();
    // Una vez hecho esto, podemos definir nuestra propia forma de entregar el formulario.
    // Lo explicaremos todo con más detalle después.

    // Busquemos los campos del formulario en el DOM
    let nameInput = document.querySelector("#name")
    let jobInput = document.querySelector("#job")

    // Obtén los valores de cada campo desde la propiedad de valor correspondiente
    

    // Selecciona los elementos donde se introducirán los valores de los campos

    // Inserta nuevos valores utilizando el textContent
    // propiedad del método querySelector()
    document.querySelector('.profile__name').textContent = nameInput.value;
    document.querySelector(".profile__explorador").textContent = jobInput.value;
    closePopup();
}

// Conecta el manipulador (handler) al formulario:
// se observará el evento de entrega
formElement.addEventListener('submit', handleProfileFormSubmit);