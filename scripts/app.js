const openProfile = 
document.querySelector("#openProfile");
const closeProfile = 
document.querySelector("#closeProfile");
const popupProfile = 
document.querySelector("#popupProfile");
const nameInputProfile = 
document.querySelector("#form-profile");
const jobInputProfile = 
document.querySelector("#form-job");


function showPopupProfile() {
document.getElementById("popupProfile").style.display = "block";
}

function closePopupProfile() {
    document.getElementById("popupProfile").style.display = "none";
    };
  

    document.querySelector('.popupprofile__formcontainer').addEventListener('click', (event) => {
      if(event.target === event.target.closest('.popupprofile__formcontainer')){
          closePopupProfile();
      }
    });
    
    document.querySelector('.popupimage__formcontainer').addEventListener('click', (event) => {
      if(event.target === event.target.closest('.popupimage__formcontainer')){
        closePopupImage();
      }
    });


openProfile.addEventListener("click", showPopupProfile); 
closeProfile.addEventListener("click", closePopupProfile);



document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    closePopupProfile()
    closePopupImage();
  }; 
});

let formProfile = document.querySelector(".form");

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    let nameInput = document.querySelector(".popupprofile__name")
    let jobInput = document.querySelector(".popupprofile__job")
    document.querySelector('.profile__name').textContent = nameInput.value;
    document.querySelector(".profile__explorador").textContent = jobInput.value;
    closePopupProfile();
    formName.reset();
}

formProfile.addEventListener('submit', handleProfileFormSubmit);



const openImage = 
document.querySelector("#openImage");
const closeImage = 
document.querySelector("#closeImage");
const popupImage = 
document.querySelector("#popupImage");
const titleInput = 
document.querySelector("#form-title");
const imageInput = 
document.querySelector("#form-link");

function showPopupImage() {
document.getElementById("popupImage").style.display = "block";
}

function closePopupImage() {
    document.getElementById("popupImage").style.display = "none";
    }
    

openImage.addEventListener("click", showPopupImage); 
closeImage.addEventListener("click", closePopupImage);


let initialCards = [
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


const formImage = document.forms.register_image;
const title = formImage.elements.title;
const image = formImage.elements.link;


function handleImageFormSubmit(evt) {
evt.preventDefault();
const newCard = createCard({name: title.value, link: image.value});
formImage.reset();
cardsContainer.prepend(newCard);
closePopupImage();
};
formImage.addEventListener('submit', handleImageFormSubmit);



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



const openPopup = document.querySelectorAll(".element__image"); 
const closePopupp = document.querySelector(".popup__close-button"); 
const popupElement = document.querySelector(".popup");

openPopup.forEach(image => {
    image.addEventListener("click", (event) => {
        const parent = event.target.closest('.element'); 
       
          if(parent){
            const image = parent.querySelector('.element__image');
            const name = parent.querySelector('.element__name');
            popupElement.querySelector(".popup__size-image").src = image.src;
            popupElement.querySelector(".popup__footer").textContent = name.textContent;
            popupElement.style.display = 'block'; 
        }
        function closePopup () {
          popupElement.style.display= "none"; 
          }
          
          closePopupp.addEventListener("click", closePopup);
    })
        
});


const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.remove("popupimage__save");
    buttonElement.classList.remove("popupprofile__save");
    buttonElement.classList.add("button_inactive");
  } else {
    buttonElement.classList.add("popupimage__save");
    buttonElement.classList.add("popupprofile__save");
    buttonElement.classList.remove("button_inactive");
  }
};


const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  const buttonElement = formElement.querySelector(".form__submit");
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};


 function enableValidation () {
  const formElement = Array.from(document.querySelectorAll(".form"));
  formElement.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => {
          evt.preventDefault();
      });
      setEventListeners(formElement);
  });
};

  enableValidation();