import { updateComments } from './comments.js';

const bigPictureElement = document.querySelector('.big-picture');
const previewElement = bigPictureElement.querySelector('.big-picture__preview');
const descriptionElement = previewElement.querySelector('.social__caption');
const imageElement = previewElement.querySelector('.big-picture__img img');
const likesElement = previewElement.querySelector('.likes-count');
const cancelElement = previewElement.querySelector('.big-picture__cancel');

const closeModal = () => {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onKeydown);
};

function onKeydown (event) {
  if (event.key.toLowerCase().includes('esc')) {
    closeModal();
  }
}

cancelElement.addEventListener('click', () => {
  closeModal();
});

export const openBigPicture = (picture) => {
  imageElement.src = picture.url;
  imageElement.alt = picture.description;

  descriptionElement.textContent = picture.description;
  likesElement.textContent = picture.likes;

  updateComments(picture.comments);

  bigPictureElement.classList.remove('hidden');
  previewElement.scrollIntoView();
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onKeydown);
};
