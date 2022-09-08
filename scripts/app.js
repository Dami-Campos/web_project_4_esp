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

const initialCards = [
    {
      name: "Valle de Yosemite",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
      name: "Lago Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
      name: "Montañas Calvas",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
  ]; 


  function createCard(initialCards) {
    const elementTemplate = document.querySelector("#template").content;
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    element.querySelector(".element__image").src = initialCards.link;
    element.querySelector(".element__name").textContent = initialCards.name;
    return element;
  }

  const cardsContainer = document.querySelector('.elements');
  


initialCards.forEach((card) => {
  const cardElement = createCard(card);
  cardsContainer.prepend(cardElement);
});



const likes = document.querySelectorAll(".element__like");
const liked = document.querySelectorAll(".element__liked");


likes.forEach(function(like) {
like.addEventListener("click", (event) => {
event.target.classList.toggle("element__liked");
});
});





const trash = document.querySelectorAll(".element__trash"); 

trash.forEach(function(item) {
  item.addEventListener("click", (event) => {
  const listItem = event.target.closest(".element");
   listItem.remove();
  } );
 });

const openPopup = querySelectorAll(".element__images");
const closePopupp = querySelector(".popup__close-button");
const popupElement = querySelector(".popup");

openPopup.forEach(image =>{
image.addEventListener("click", () => {
document.getElementById("popupElement").style.display = "block";
popupElement.querySelector(".popup__size-image").src = openPopup.getAtributte("src");
})
});

