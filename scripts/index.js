const popupEditeProfile = document.querySelector('.popup_edit-profile');

const buttonClosePopupEditeProfile = popupEditeProfile.querySelector('.popup__close-button');

const buttonOpenPopupEditeProfile = document.querySelector('.profile__edit-button');

const popupAddCard = document.querySelector('.popup_type_add-popup');

const buttonClosePopupAddCard = popupAddCard.querySelector('.popup__close-button_type_add-popup');

const buttonOpenPopupAddCard = document.querySelector('.profile__add-button');

const popupZoomCardImage = document.querySelector('.popup-image');

const buttonClosePopupZoomCardImage = document.querySelector('.popup-image__close-button');

const buttonCreatePopupAddCard = document.querySelector('.popup__button_add-card');

// Находим форму в DOM

const formEditeProfile = document.querySelector('.popup__content_type_edit-popup');

// Находим поля формы в DOM

const userNameFormInput = formEditeProfile.querySelector('.popup__input_type_name');

const userDescriptionFormInput = formEditeProfile.querySelector('.popup__input_type_description');

// Находим поля имени и описания

const userName = document.querySelector('.profile__name');

const userDescription = document.querySelector('.profile__description');

// Присваиваем значениям полей формы содержимое полей имени

// Общая функция открытия попапов

const openPopup = function(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keyup', closePopupByclickKey)
}

// Функция открытия попапа редактирования профиля

const openEditProfilePopup = function(popup) {
  openPopup(popup);
  userNameFormInput.value = userName.textContent;
  userDescriptionFormInput.value = userDescription.textContent;
}

// Общая функция закрытия попапов

const closePopup = function(popup) {
  document.removeEventListener('keyup', closePopupByclickKey);
  popup.classList.remove('popup_is-opened');
}

// Функция закрытия попапа по клику на оверлей

const closePopupByclickOnOverlay = function(popup) {
  if(event.target !== event.currentTarget) {
    return;
  }
  closePopup(popup);
};

// Функция закрытия попапа по нажатию кнопки Escape

const closePopupByclickKey = function(event) {
  if(event.key === 'Escape') {
    const openPopup = document.querySelector('.popup_is-opened');
    closePopup(openPopup);
  }
};

function submitEditProfileForm (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  userName.textContent = userNameFormInput.value;
  userDescription.textContent = userDescriptionFormInput.value;
  closePopup(popupEditeProfile);
}

formEditeProfile.addEventListener('submit', submitEditProfileForm);

buttonOpenPopupEditeProfile.addEventListener('click', function() {openEditProfilePopup(popupEditeProfile)});

buttonClosePopupEditeProfile.addEventListener('click', function() {closePopup(popupEditeProfile)});

buttonOpenPopupAddCard.addEventListener('click', function() {disableSubmitButton(buttonCreatePopupAddCard, validationConfig); openPopup(popupAddCard);});

buttonClosePopupAddCard.addEventListener('click', function() {closePopup(popupAddCard)});

buttonClosePopupZoomCardImage.addEventListener('click', function() {closePopup(popupZoomCardImage)});

popupEditeProfile.addEventListener('click', function() {closePopupByclickOnOverlay(popupEditeProfile)});

popupAddCard.addEventListener('click', function() {closePopupByclickOnOverlay(popupAddCard)});

popupZoomCardImage.addEventListener('click', function() {closePopupByclickOnOverlay(popupZoomCardImage)});

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
        openPopup(popupZoomCardImage);
  });

  return newCard;

}

// Обработчик события отправки формы кнопкой создать

const submitAddCardForm = function(evt) {
  evt.preventDefault();
  renderCard({name: cardNameFormInput.value, link: cardLinkFormInput.value})
  cardNameFormInput.value = '';
  cardLinkFormInput.value = '';
  closePopup(popupAddCard);
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

formAddCard.addEventListener('submit', submitAddCardForm);

