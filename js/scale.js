const SCALE_STEP = 0.25;

export const useScale = (scaleElement, applyScale) => {
  let scale = 1;

  const smallerElement = scaleElement.querySelector('.scale__control--smaller');
  const biggerElement = scaleElement.querySelector('.scale__control--bigger');
  const valueElement = scaleElement.querySelector('.scale__control--value');

  const setValue = (value = 1) => {
    scale = value;
    valueElement.value = `${scale * 100}%`;
    applyScale(scale);
  };

  smallerElement.addEventListener('click', () => {
    setValue(Math.max(scale - SCALE_STEP, SCALE_STEP));
  });
  biggerElement.addEventListener('click', () => {
    setValue(Math.min(scale + SCALE_STEP, 1));
  });

  // Устанавливаем первичный масштаб
  setValue();

  return setValue;
};
