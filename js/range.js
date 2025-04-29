import '../vendor/nouislider/nouislider.js';
import { round } from './utils.js';

const DEFAULT_STEP = 0.1;
const DEFAULT_DECIMALS = 1;
const DEFAULT_MAX = 1;

const createOptions = (max, min, step) => ({
  range: {
    min,
    max
  },
  start: max,
  step
});

export const useRange = (rangeElement, applyRange) => {
  let decimals = DEFAULT_DECIMALS;

  const valueElement = rangeElement.querySelector('.effect-level__value');
  const sliderElement = rangeElement.querySelector('.effect-level__slider');

  noUiSlider.create(sliderElement, {
    ...createOptions(DEFAULT_MAX, 0, DEFAULT_STEP),
    connect: 'lower'
  });

  sliderElement.noUiSlider.on('update', (rawValue) => {
    const value = round(rawValue, decimals);
    valueElement.value = value;
    applyRange(value);
  });

  return {
    update({ max, min = 0, step = DEFAULT_STEP} = {}) {
      if (max) {
        decimals = step === DEFAULT_STEP ? DEFAULT_DECIMALS : 0;

        sliderElement.noUiSlider.updateOptions(createOptions(max, min, step));
        rangeElement.hidden = false;
      } else {
        rangeElement.hidden = true;
        valueElement.value = '';
        applyRange(0);
      }
    }
  };
};
