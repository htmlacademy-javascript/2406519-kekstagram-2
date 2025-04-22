import { useModal } from './modal.js';
import { useUploadFields } from './upload-fields.js';
import { useScale } from './scale.js';
import { useRange } from './range.js';

const formElement = document.querySelector('.img-upload__form');
const fileInputElement = formElement.querySelector('.img-upload__input');
const modalElement = formElement.querySelector('.img-upload__overlay');
const scaleElement = modalElement.querySelector('.img-upload__scale');
const previewElement = modalElement.querySelector('.img-upload__preview img');
const rangeElement = modalElement.querySelector('.img-upload__effect-level');
const radioElement = modalElement.querySelector('.effects__radio');

const { resetValidator, validate } = useUploadFields(formElement);

const onChangeFile = useModal(modalElement, () => {
  resetValidator();
});

useScale(scaleElement, (scale = 1) => {
  previewElement.style.transform = `scale(${scale})`;
});

useRange(rangeElement, () => {

});

fileInputElement.addEventListener('change', onChangeFile);

radioElement.forEach((radioElement) => {
  radioElement.addEventListener('change', () => {

  });
});

formElement.addEventListener('submit', (event) => {
  event.preventDefault();

  const valid = validate();
  if (valid) {
    formElement.submit();
  }
});
