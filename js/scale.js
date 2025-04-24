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
    setValue(Math.max(scale - 0.25, 0.25));
  });
  biggerElement.addEventListener('click', () => {
    setValue(Math.min(scale + 0.25, 1));
  });

  // Устанавливаем первичный масштаб
  setValue();
};
