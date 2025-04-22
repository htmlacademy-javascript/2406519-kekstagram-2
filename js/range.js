import '../vendor/nouislider/nouislider.js';

const createOption = (max) => ({
  range: {
    min: 0,
    max
  },
  start: max
});

export const useRange = (rangeElement, applyRange) => {
  const value = 0;

  const valueElement = rangeElement.querySelector('.effect-level__value');
  const sliderElement = rangeElement.querySelector('.effect-level__slider');

  const slider = noUiSlider.create(sliderElement, {
    connect: 'lower',
    ...createOption(100)
  });

  return {
    update(max) {
      sliderElement.noUiSlider.updateOption(createOption(max));
    }
  };
};
