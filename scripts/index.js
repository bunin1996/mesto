const popupEditeProfile = document.querySelector('.popup');

const closeButtonPopupEditeProfile = popupEditeProfile.querySelector('.popup__close-button');

const openButtonPopupEditeProfile = document.querySelector('.profile__edit-button');



const popupAddCard = document.querySelector('.popup_type_add-popup');

const closeButtonPopupAddCard = popupAddCard.querySelector('.popup__close-button_type_add-popup');

const openButtonPopupAddCard = document.querySelector('.profile__add-button');



const popupZoomCardImage = document.querySelector('.popup-image');

const closeButtonPopupZoomCardImage = document.querySelector('.popup-image__close-button');



// Находим форму в DOM

const formEditeProfile = document.querySelector('.popup__content');

// Находим поля формы в DOM

let userNameFormInput = formEditeProfile.querySelector('.popup__input_type_name');

let userDescriptionFormInput = formEditeProfile.querySelector('.popup__input_type_description');

// Находим поля имени и описания

let userName = document.querySelector('.profile__name');

let userDescription = document.querySelector('.profile__description');

// Присваиваем значениям полей формы содержимое полей имени












const openPopup = function() {
  popupEditeProfile.classList.add('popup_is-opened');
  userNameFormInput.value = userName.textContent;
  userDescriptionFormInput.value = userDescription.textContent;
}

const openAddPopup = function() {
  popupAddCard.classList.add('popup_is-opened');

}

const openImagePopup = function() {
  popupZoomCardImage.classList.add('popup_is-opened');

}

const closePopup = function() {
  popupEditeProfile.classList.remove('popup_is-opened');
}

const closeAddPopup = function() {
  popupAddCard.classList.remove('popup_is-opened');
}

const closeImagePopup = function() {
  popupZoomCardImage.classList.remove('popup_is-opened');

}

function SubmitEditeProfileForm (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  userName.textContent = userNameFormInput.value;
  userDescription.textContent = userDescriptionFormInput.value;
  closePopup();
}


formEditeProfile.addEventListener('submit', SubmitEditeProfileForm);

openButtonPopupEditeProfile.addEventListener('click', openPopup);

closeButtonPopupEditeProfile.addEventListener('click', closePopup);

openButtonPopupAddCard.addEventListener('click', openAddPopup);

closeButtonPopupAddCard.addEventListener('click', closeAddPopup);

closeButtonPopupZoomCardImage.addEventListener('click', closeImagePopup);

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


const cardNameFormInput = document.forms.addPlace.place;

const cardLinkFormInput = document.forms.addPlace.link;

const imagePopupZoomCardImage = document.querySelector('.popup-image__image');

const signaturePopupZoomCardImage = document.querySelector('.popup-image__signature');

// Место всех карточек

const cardCollectElement = document.querySelector('.elements');

// Шаблон

const cardTemplate = document.querySelector('.card').content.querySelector('.elements__element');

// Генерация карточки

const generateCard = function (item) {
  const newCard = cardTemplate.cloneNode(true);

  const nameNewCard = newCard.querySelector('.elements__info').querySelector('.elements__element-name');
  nameNewCard.textContent = item.name;
  const imageNewCard = newCard.querySelector('.elements__image');
  imageNewCard.src = item.link;
  imageNewCard.alt = item.about;

  const likeButtonNewCard = newCard.querySelector('.elements__like-button');
  likeButtonNewCard.addEventListener('click', function() {
    likeButtonNewCard.classList.toggle('elements__like-button_active')
  });

  const deleteButtonNewCard = newCard.querySelector('.elements__delete-button');
  deleteButtonNewCard.addEventListener('click', function() {
    deleteButtonNewCard.closest('.elements__element').remove()
  });

  imageNewCard.addEventListener('click', function() {
    imagePopupZoomCardImage.src = imageNewCard.src
    imagePopupZoomCardImage.alt = imageNewCard.alt
    signaturePopupZoomCardImage.textContent = nameNewCard.textContent
        openImagePopup();
  });

  return newCard;

}

// Обработчик события отправки формы кнопкой создать

const SubmitAddCardForm = function(evt) {
  evt.preventDefault();
  renderCard({name: cardNameFormInput.value, link: cardLinkFormInput.value})
  cardNameFormInput.value = '';
  cardLinkFormInput.value = '';
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

const formAddCard = document.querySelector('.popup__content_type_add-popup');

formAddCard.addEventListener('submit', SubmitAddCardForm);
