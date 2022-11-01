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
  

  // habilitar la validación llamando a enableValidation()
// pasar todas las configuraciones en la llamada

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "popup__input_type_error",
});
  
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
