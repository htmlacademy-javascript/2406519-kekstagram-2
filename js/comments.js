const wrapperElement = document.querySelector('.social');
const commentsElement = wrapperElement.querySelector('.social__comments');
const commentsLoaderElement = wrapperElement.querySelector('.comments-loader');
const commentsShownCountElement = wrapperElement.querySelector('.social__comment-Shown-count');
const commentsTotalCountElement = wrapperElement.querySelector('.social__comment-total-count');

const COMMENTS_PER_PAGE = 5;
let shownCommentsCount = 0;
let comments = [];

const getCommentTemplate = ({ avatar, message, name }) => `
<img
  class="social__picture"
  src="${avatar}"
  alt="${name}"
  width="35"
  height="35"
>
<p class="social__text">${message}</p>
`;

const addComments = () => {
  const fragment = document.createDocumentFragment();
  const newCount = shownCommentsCount + COMMENTS_PER_PAGE;
  const slicedComments = comments.slice(shownCommentsCount, newCount);

  slicedComments.forEach((comment) => {
    const itemElement = document.createElement('li');
    itemElement.classList.add('social__comment');
    itemElement.innerHTML = getCommentTemplate(comment);
    fragment.append(itemElement);
  });

  commentsElement.append(fragment);

  shownCommentsCount = Math.min(newCount, comments.length);
  commentsShownCountElement.textContent = shownCommentsCount;
};

commentsLoaderElement.addEventListener('click', () => {
  addComments();
  if (shownCommentsCount >= comments.length) {
    commentsLoaderElement.classList.add('hidden');
  }
});

export const updateComments = (newComments) => {
  shownCommentsCount = 0;
  comments = newComments;

  commentsTotalCountElement.textContent = comments.length;

  commentsElement.innerHTML = '';
  addComments();

  if (shownCommentsCount < comments.length) {
    commentsLoaderElement.classList.remove('hidden');
  } else {
    commentsLoaderElement.classList.add('hidden');
  }
};
