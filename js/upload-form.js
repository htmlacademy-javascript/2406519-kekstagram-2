import { useModal } from './modal.js';
import { useUploadFields } from './upload-fields.js';
import { useScale } from './scale.js';
import { useRange } from './range.js';
import { postData } from './api.js';

const formElement = document.querySelector('.img-upload__form');
const fileInputElement = formElement.querySelector('.img-upload__input');
const modalElement = formElement.querySelector('.img-upload__overlay');
const scaleElement = modalElement.querySelector('.img-upload__scale');
const previewElement = modalElement.querySelector('.img-upload__preview img');
const rangeElement = modalElement.querySelector('.img-upload__effect-level');
const submitElement = modalElement.querySelectorAll('.img-upload__submit');

const previewSmallElements = modalElement.querySelectorAll('.effects__preview');
const radioElements = modalElement.querySelectorAll('.effects__radio');

const defaultPreview = previewElement.src;

const effectOptions = {
  chrome: {
    getCssFilter(value) {
      return `grayscale(${value})`;
    },
    max: 1,
  },
  sepia: {
    getCssFilter(value) {
      return `sepia(${value})`;
    },
    max: 1,
  },
  marvin: {
    getCssFilter(value) {
      return `invert(${value}%)`;
    },
    max: 100,
    step: 1
  },
  phobos: {
    getCssFilter(value) {
      return `blur(${value}px)`;
    },
    max: 3,
  },
  heat: {
    getCssFilter(value) {
      return `brightness(${value})`;
    },
    min: 1,
    max: 3,
  }
};

const { resetValidator, validate } = useUploadFields(formElement);

const setPreviewImages = (src) => {
  previewElement.src = src;
  previewSmallElements.forEach((element) => {
    element.style.backgroundImage = `url(${src})`;
  });
};

const resetForm = () => {
  formElement.reset();
  resetValidator();
  previewElement.style = '';
  setPreviewImages(defaultPreview);
};
const { closeModal, openModal } = useModal(modalElement, resetForm);

useScale(scaleElement, (scale = 1) => {
  previewElement.style.transform = `scale(${scale})`;
});

const slider = useRange(rangeElement, (value) => {
  const { getCssFilter } = effectOptions[formElement.effect.value] || {};
  previewElement.style.filter = getCssFilter ? getCssFilter(value) : 'none';
});

fileInputElement.addEventListener('change', () => {
  setPreviewImages(URL.createObjectURL(fileInputElement.files[0]));

  // Передаём начальное состояние
  slider.update();

  openModal();
});

radioElements.forEach((radioElement) => {
  radioElement.addEventListener('change', () => {
    slider.update(effectOptions[radioElement.value]);
  });
});

formElement.addEventListener('submit', async (event) => {
  event.preventDefault();

  const valid = validate();
  if (valid) {
    submitElement.disabled = true;

    try {
      await postData(new FormData(formElement));
      closeModal();
    } catch {
      // Do nothing
    }

    submitElement.disabled = false;
  }
});
