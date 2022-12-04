const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const addPopupElement = document.querySelector('.add-popup');
const addPopupCloseButtonElement = addPopupElement.querySelector('.add-popup__close-button');
const addPopupOpenButtonElement = document.querySelector('.profile__add-button');
// Находим форму в DOM
let formElement = document.querySelector('.popup__content');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_description');
// Находим поля имени и описания
let name = document.querySelector('.profile__name');
let description = document.querySelector('.profile__description');
// Присваиваем значениям полей формы содержимое полей имени



const openPopup = function() {
  popupElement.classList.add('popup_is-opened');
  nameInput.value = name.textContent;
  jobInput.value = description.textContent;
}

const openAddPopup = function() {
  addPopupElement.classList.add('popup_is-opened');

}

const closePopup = function() {
  popupElement.classList.remove('popup_is-opened');
}

const closeAddPopup = function() {
  addPopupElement.classList.remove('popup_is-opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  let nameInputValue = nameInput.value;
  let jobInputValue = jobInput.value;
  name.textContent = nameInputValue;
  description.textContent = jobInputValue;
  closePopup();
}


formElement.addEventListener('submit', formSubmitHandler);

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
addPopupOpenButtonElement.addEventListener('click', openAddPopup);
addPopupCloseButtonElement.addEventListener('click', closeAddPopup);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    about: 'на фото изображены два холма, один с покрыт зеленой растительностью, другой имеет каменистое покрытие'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    about: 'на фото изображена река в заснеженном лесу'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    about: 'на фото изображена многоэтажка в спальном районе города Иваново'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    about: 'на фото изображена равнина камчатки и гора с заснеженной вершиной'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    about: 'на фото изображено железнодорожное полотно проходящее среди леса'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    about: 'на фото изображен гористый берег замерзщего озера Байкал'
  }
];

// Место всех карточек

//const cardCollectElement = document.querySelector('.elements');

// Шаблон карточки

//const cardTemplate = document.querySelector('.card').content.querySelector('.elements__element');


// Создание карточек при загрузке страницы

//initialCards.forEach(function(item) {
//  const cardElement = cardTemplate.cloneNode(true);
//  const nameCardElement = cardElement.querySelector('.elements__info').querySelector('.elements__element-name');
//  nameCardElement.textContent = item.name
//  const imageCardElement = cardElement.querySelector('.elements__image');
//  imageCardElement.src = item.link;
//  imageCardElement.alt = item.about;
//  cardCollectElement.prepend(cardElement);
//});

// Создание карточки пользователем

//const addNewCard = function(evt) {
//  evt.preventDefault();
//  const cardElement = cardTemplate.cloneNode(true);
//  cardElement.querySelector('.elements__info').querySelector('.elements__element-name').textContent = document.forms.addPlace.place.value
//  cardElement.querySelector('.elements__image').src = document.forms.addPlace.link.value
//  cardCollectElement.prepend(cardElement);
//  closeAddPopup();
//}

// Обработчик события отправки формы при создании карточки

//document.querySelector('.add-popup__content').addEventListener('submit', addNewCard);




const CardnameInput = document.forms.addPlace.place;
const CardlinkInput = document.forms.addPlace.link;

// Место всех карточек

const cardCollectElement = document.querySelector('.elements');

// Шаблон

const cardTemplate = document.querySelector('.card').content.querySelector('.elements__element');

// Генерация карточки

const generateCard = function (item) {
  const newCard = cardTemplate.cloneNode(true);

  const nameCardElement = newCard.querySelector('.elements__info').querySelector('.elements__element-name');
  nameCardElement.textContent = item.name;
  const imageCardElement = newCard.querySelector('.elements__image');
  imageCardElement.src = item.link;
  imageCardElement.alt = item.about;

  const likeButtonElement = newCard.querySelector('.elements__like-button');
  likeButtonElement.addEventListener('click', function() {
    likeButtonElement.classList.toggle('elements__like-button_active')
  });

  const deleteButtonElement = newCard.querySelector('.elements__delete-button');
  deleteButtonElement.addEventListener('click', function() {
    deleteButtonElement.closest('.elements__element').remove()
  });

  return newCard;

}

// Обработчик события отправки формы кнопкой создать

const handleSubmitAddNewCard = function(evt) {
  evt.preventDefault();
  renderCard({name: CardnameInput.value, link: CardlinkInput.value})
  CardnameInput.value = '';
  CardlinkInput.value = '';
  closeAddPopup();
}


// Добавление карточки

const renderCard = function (item) {
    cardCollectElement.prepend(generateCard(item));
}

// Рендер всех карточек

initialCards.forEach(function(item) {
  renderCard(item);
});

document.querySelector('.add-popup__content').addEventListener('submit', handleSubmitAddNewCard);
