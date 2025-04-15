const bigPictureElement = document.querySelector('.big-picture');
const previewElement = bigPictureElement.querySelector('.big-picture__preview');
const descriptionElement = previewElement.querySelector('.social__caption');
const imageElement = previewElement.querySelector('.big-picture__img img');
const likesElement = previewElement.querySelector('.likes-count');
const commentsElement = previewElement.querySelector('.social__comments');
const commentsCountElement = previewElement.querySelector('.social__comment-count');
const commentsTotalCountElement = previewElement.querySelector('.social__comment-total-count');
const commentsLoaderElement = previewElement.querySelector('.comments-loader');
const cancelElement = previewElement.querySelector('.big-picture__cancel');

// TODO откроем позже
commentsCountElement.classList.add('hidden');
commentsLoaderElement.classList.add('hidden');

const getCommentTemplate = ({ avatar, message, name }) => `
<li class="social__comment">
  <img
    class="social__picture"
    src="${avatar}"
    alt="${name}"
    width="35"
    height="35"
  >
  <p class="social__text">${message}</p>
</li>
`;

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
  commentsTotalCountElement.textContent = picture.comments.length;

  commentsElement.innerHTML = picture.comments.map(getCommentTemplate).join('');

  bigPictureElement.classList.remove('hidden');
  previewElement.scrollIntoView();
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onKeydown);
};
