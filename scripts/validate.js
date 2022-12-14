const checkInputValidity = function(input, config) {
    const error = document.querySelector(`#${input.id}-error`);

    if(input.validity.valid) {
        error.textContent = '';
        error.classList.remove(config.errorClass);
        input.classList.remove(config.inputErrorClass);
    } else {
        error.textContent = input.validationMessage;
        error.classList.add(config.errorClass);
        input.classList.add(config.inputErrorClass);
    }

};

const toggleButton = function(inputs, button, config) {
    const isFormValid = inputs.every(input => input.validity.valid);

    if(isFormValid) {
        button.classList.remove(config.inactiveButtonClass);
        button.disabled = '';
    } else {
        button.classList.add(config.inactiveButtonClass);
        button.disabled = 'disabled';
    }
};

const enableValidation = function (config) {

    const { formSelector, inputSelector, submitButtonSelector, ...restConfig } = config;

    const forms = [...document.querySelectorAll(formSelector)];

    forms.forEach(function (form){
        const inputs = [...form.querySelectorAll(inputSelector)];

        const button = form.querySelector(submitButtonSelector);

        form.addEventListener('submit', function (event) {
            event.preventDefault();
        });

        inputs.forEach(function(input) {
            input.addEventListener('input', function() {
                checkInputValidity(input, restConfig);
                toggleButton(inputs, button, restConfig);
            })
        })
    })
};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  });
