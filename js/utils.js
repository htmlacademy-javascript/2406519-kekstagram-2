import { LOREM } from './texts.js';

const DEFAULT_MAX_LENGTH = 100;

export const getRandomIntInclusive = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

export const getRandomArrayItem = (items) => items[getRandomIntInclusive(0, items.length - 1)];

export const getRandomArrayItems = (items, min = 0, max = items.length) => {
  const length = getRandomIntInclusive(min, max);
  return Array.from({ length }, () => getRandomArrayItem(items));
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

// Строка является полиндромом
export const isPalindrome = (string = '') => {
  const newString = string.replaceAll(' ', '').toLowerCase();
  const reverseString = newString.split('').reverse().join('');
  return reverseString === newString;
};

// Строка в пределах максимальной длины?
export const isLengthUnderLimit = (string, maxLength) => string.length <= maxLength;

export const getOnlyNumbers = (str) => Number(
  [...str].filter((item) => !isNaN(parseInt(item, 10))).join('') || NaN
);
