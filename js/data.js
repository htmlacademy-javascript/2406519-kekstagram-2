import { COMMENTS, NAMES } from './texts.js';
import { getRandomIntInclusive, getRandomArrayItems, getRandomArrayItem, getTextItems } from './utils.js';

const DEFAULT_PHOTOS_QUANTITY = 25;

let photoId = 0;
let commentId = 0;

const generatePhotoComment = () => {
  commentId++;

  return {
    id: commentId,
    avatar: `img/avatar-${getRandomIntInclusive(1, 6)}.svg`,
    message: getRandomArrayItems(COMMENTS, 1, 2).join(' '),
    name: getRandomArrayItem(NAMES),
  };
};

const generatePhoto = () => {
  photoId++;
  const commentsLength = getRandomIntInclusive(0, 30);

  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: `${getTextItems(1, 3).join('. ')}.`,
    likes: getRandomIntInclusive(15, 200),
    comments: Array.from({ length: commentsLength }, generatePhotoComment)
  };
};

export const generatePhotos = (length = DEFAULT_PHOTOS_QUANTITY) => Array.from({ length }, generatePhoto);
