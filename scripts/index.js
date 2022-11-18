const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
// Находим форму в DOM
let formElement = document.querySelector('.popup__content');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#description');
// Находим поля имени и описания
let name = document.querySelector('.profile__name');
let description = document.querySelector('.profile__description');
// Присваиваем значениям полей формы содержимое полей имени
nameInput.value = name.textContent;
jobInput.value = description.textContent;


const openPopup = function() {
  popupElement.classList.add('popup_is-opened');
}

const closePopup = function() {
  popupElement.classList.remove('popup_is-opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  let nameInputValue = nameInput.value;
  let jobInputValue = jobInput.value;
  let name = document.querySelector('.profile__name');
  let description = document.querySelector('.profile__description');
  name.textContent = nameInputValue;
  description.textContent = jobInputValue;
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

