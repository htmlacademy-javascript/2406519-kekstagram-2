import { LOREM } from './texts.js';

const DEFAULT_MAX_LENGTH = 100;

export const getRandomIntInclusive = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

export const getRandomArrayItem = (item) => item[getRandomIntInclusive(0, item.length - 1)];

export const getRandomArrayItems = (item, min = 0, max = item.length) => {
  const length = getRandomIntInclusive(min, max);
  return Array.from({ length }, () => getRandomArrayItem(item));
};

export const generateTextFragment = (maxLength = DEFAULT_MAX_LENGTH, text = LOREM) => {
  const start = getRandomIntInclusive(0, text.length);
  const end = start + getRandomIntInclusive(0, maxLength);

  return text.slice(start, end);
};

export const getTextItems = (min = 0, max, text = LOREM) => {
  const items = text.split('. ');
  return getRandomArrayItems(items, min, max || items.length);
};
