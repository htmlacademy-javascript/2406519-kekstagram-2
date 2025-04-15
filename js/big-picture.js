import { updateComments } from './comments.js';
import { useModal } from './use-modal.js';

const bigPictureElement = document.querySelector('.big-picture');
const previewElement = bigPictureElement.querySelector('.big-picture__preview');
const descriptionElement = previewElement.querySelector('.social__caption');
const imageElement = previewElement.querySelector('.big-picture__img img');
const likesElement = previewElement.querySelector('.likes-count');

const openModal = useModal(bigPictureElement);

export const openBigPicture = (picture) => {
  imageElement.src = picture.url;
  imageElement.alt = picture.description;

  descriptionElement.textContent = picture.description;
  likesElement.textContent = picture.likes;

  updateComments(picture.comments);

  openModal();

  previewElement.scrollIntoView();
};
