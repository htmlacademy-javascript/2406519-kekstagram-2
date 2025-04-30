const COMMENTS_PER_PAGE = 5;

const wrapperElement = document.querySelector('.social');
const commentsElement = wrapperElement.querySelector('.social__comments');
const commentsLoaderElement = wrapperElement.querySelector('.comments-loader');
const commentsShownCountElement = wrapperElement.querySelector('.social__comment-shown-count');
const commentsTotalCountElement = wrapperElement.querySelector('.social__comment-total-count');

const commentSampleElement = commentsElement.querySelector('.social__comment');

let shownCommentsCount = 0;
let comments = [];

const addComments = () => {
  const fragment = document.createDocumentFragment();
  const newCount = shownCommentsCount + COMMENTS_PER_PAGE;
  const slicedComments = comments.slice(shownCommentsCount, newCount);

  slicedComments.forEach(({ avatar, message, name }) => {
    const itemElement = commentSampleElement.cloneNode(true);
    const imageElement = itemElement.querySelector('img');
    imageElement.src = avatar;
    imageElement.alt = name;

    const messageElement = itemElement.querySelector('p');
    messageElement.textContent = message;

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
