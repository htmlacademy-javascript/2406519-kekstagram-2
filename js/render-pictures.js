const pictureTemplate = document.querySelector('#picture').content;

export const renderPicture = (picture) => {
  const photoElement = pictureTemplate.cloneNode(true);
  const imageElement = photoElement.querySelector('.picture__img');
  const likesElement = photoElement.querySelector('.picture__likes');
  const commentsElement = photoElement.querySelector('.picture__comments');

  imageElement.src = picture.url;
  imageElement.alt = picture.description;

  likesElement.textContent = picture.likes;
  commentsElement.textContent = picture.comments.length;

  return photoElement;
};

export const renderPictures = (pictures, element) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    fragment.append(renderPicture(picture));
  });

  element.append(fragment);
};
