const openProfile = 
document.querySelector("#openProfile");
const closeProfile = 
document.querySelector("#closeProfile");
const popupProfile = 
document.querySelector("#popupProfile");
const nameInputProfile = 
document.querySelector("#nameProfile");
const jobInputProfile = 
document.querySelector("#jobProfile");

function showPopupProfile() {
document.getElementById("popupProfile").style.display = "block";
}

function closePopupProfile() {
    document.getElementById("popupProfile").style.display = "none";
    }
    
openProfile.addEventListener("click", showPopupProfile); 
closeProfile.addEventListener("click", closePopupProfile);

let formProfile = document.querySelector("#formProfile")

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    let nameInput = document.querySelector("#nameProfile")
    let jobInput = document.querySelector("#jobProfile")

    document.querySelector('.profile__name').textContent = nameInput.value;
    document.querySelector(".profile__explorador").textContent = jobInput.value;
    closePopupProfile();
}

formProfile.addEventListener('submit', handleProfileFormSubmit);



const openImage = 
document.querySelector("#openImage");
const closeImage = 
document.querySelector("#closeImage");
const popupImage = 
document.querySelector("#popupImage");
const titleInput = 
document.querySelector("#titleImage");
const imageInput = 
document.querySelector("#image");

function showPopupImage() {
document.getElementById("popupImage").style.display = "block";
}

function closePopupImage() {
    document.getElementById("popupImage").style.display = "none";
    }
    
openImage.addEventListener("click", showPopupImage); 
closeImage.addEventListener("click", closePopupImage);

let formImage = document.querySelector("#formImage")

function handleImageFormSubmit(evt) {
    evt.preventDefault();
    let titleInput = document.querySelector("#titleImage")
    let imageInput = document.querySelector("#image")

    document.querySelector('.element__name').textContent = titleInput.value;
    document.querySelector(".element__image").src = imageInput.value;
    closePopupImage();
}

formImage.addEventListener('submit', handleImageFormSubmit);



function elementLikeFunction (evt);{
evt.preventDefault();
let elementLike = document.querySelector("#elementLike")
document.querySelector(".element__like").src = /images/vector_like_hover.png;
}
elementLike.addEventListener("click", elementLikeFunction);

