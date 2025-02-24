import { COMMENTS, NAMES } from './texts.js';
import { getRandomIntInclusive, getRandomArrayItems, getRandomArrayItem, getTextItems } from './utils.js';

const DEFAULT_PHOTO_QUANTITY = 25;

let PhotoId = 0;
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
  PhotoId++;
  const commentsLength = getRandomIntInclusive(0, 30);

  return {
    id: PhotoId,
    url: `photos/${PhotoId}.jpg`,
    description: `${getTextItems(1, 3).join('. ')}.`,
    likes: getRandomIntInclusive(15, 200),
    comments: Array.from({ length: commentsLength }, generatePhotoComment)
  };
};

const generatePhotos = (length = DEFAULT_PHOTO_QUANTITY) => Array.from({ length }, generatePhoto);

// for (let i = 0; i < 25; i++) {
//   console.log(generatePhoto());
// }

// eslint-disable-next-line no-console
console.log(generatePhotos());
