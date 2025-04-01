import { generatePhotos } from './data';
import { renderPictures } from './render-pictures';

const picturesElement = document.querySelector('.pictures');

renderPictures(generatePhotos(25), picturesElement);
