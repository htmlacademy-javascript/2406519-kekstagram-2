import { debounce, shuffle } from './utils';
import { renderPictures } from './render-pictures';

const picturesElement = document.querySelector('.pictures');

const containerElement = document.querySelector('.img-filters');
const filtersElement = containerElement.querySelector('.img-filters__form');
const filterElements = filtersElement.querySelectorAll('.img-filters__button');

const RANDOM_LIMIT = 10;

const getPhotosByFilter = (photos, filterName) => {
  if (filterName === 'random') {
    const clonedPhotos = [...photos];
    shuffle(clonedPhotos);
    return clonedPhotos.slice(0, RANDOM_LIMIT);
  }

  if (filterName === 'discussed') {
    return [...photos].sort((onePhoto, anotherPhoto) => anotherPhoto.comments.length - onePhoto.comments.length);
  }

  return photos;
};

const setFilter = (activeElement, photos) => {
  filterElements.forEach((filterElement) => {
    if (filterElement === activeElement) {
      const data = getPhotosByFilter(photos, filterElement.id.replace('filter-', ''));

      picturesElement.querySelectorAll('.picture').forEach((element) => element.remove());
      renderPictures(data, picturesElement);

      filterElement.classList.add('img-filters__button--active');
    } else {
      filterElement.classList.remove('img-filters__button--active');
    }
  });
};

export const initFilters = (photos) => {
  // Начальная отрисовка с дефолтным фильтром
  renderPictures(photos, picturesElement);

  filterElements.forEach((filterElement) => {
    filterElement.addEventListener('click', debounce(({ currentTarget }) => {
      setFilter(currentTarget, photos);
    }));
  });

  containerElement.classList.remove('img-filters--inactive');
};
