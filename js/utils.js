import { LOREM } from './texts.js';

const DEFAULT_MAX_LENGTH = 100;

/** Тасование массива */
export const shuffle = (items) => {
  for (let i = items.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [items[i], items[randomIndex]] = [items[randomIndex], items[i]];
  }
};

/** Округление */
export const round = (
  /** Число, подлежащее округлению */
  value,

  /** Знаков после запятой (округление до соотв. разряда) */
  decimals = 0,

  /** 'ceil' | 'floor' | 'round' */
  method = 'round',
) => {
  const coefficient = 10 ** decimals;

  return Math[method](parseFloat(value) * coefficient) / coefficient;
};

/**
 * Устранение дребезга
 *
 * https://www.freecodecamp.org/news/javascript-debounce-example
 */
export const debounce = (callback, timeoutDelay = 500) => {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    if (!timeoutId) {
      callback.apply(this, rest);
    }

    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      timeoutId = undefined;
    }, timeoutDelay);
  };
};

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
