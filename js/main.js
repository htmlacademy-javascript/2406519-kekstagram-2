import { generatePhotos } from './data';
import { renderPictures } from './render-pictures';
import './upload-form.js';

const picturesElement = document.querySelector('.pictures');

renderPictures(generatePhotos(25), picturesElement);
