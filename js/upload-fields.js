import '../vendor/pristine/pristine.min.js';

const HASHTAGS_LIMIT = 5;
const HASHTAGS_MAXLENGTH = 20;

export const useUploadFields = (formElement) => {
  const textElement = formElement.querySelector('.text');
  const hashtagsElement = textElement.querySelector('.text__hashtags');

  let hashtags = [];
  let hashtagsSet = new Set();

  const pristine = new Pristine(formElement, {
    classTo: 'img-upload__field-wrapper',
    errorClass: 'img-upload__field-wrapper--error',
    errorTextParent: 'img-upload__field-wrapper',
  }, false);

  pristine.addValidator(
    hashtagsElement,
    (value) => !value || hashtags.every((hashtag) => !hashtag || hashtag.startsWith('#')),
    'Хэштег начинается с символа # (решётка).'
  );

  pristine.addValidator(
    hashtagsElement,
    (value) => !value || hashtags.every((hashtag) => {
      const string = hashtag.replace(/^#/, '');
      return !string || /^[a-za-яё\w]+$/i.test(string);
    }),
    'Строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.'
  );

  pristine.addValidator(
    hashtagsElement,
    (value) => !value || hashtags.every((hashtag) => hashtag !== '#'),
    'Хештег не может состоять только из одной решётки.'
  );

  pristine.addValidator(
    hashtagsElement,
    (value) => !value || hashtags.every((hashtag) => hashtag.length <= HASHTAGS_MAXLENGTH),
    `Максимальная длина одного хэштега ${HASHTAGS_MAXLENGTH} символов, включая решётку.`
  );

  pristine.addValidator(
    hashtagsElement,
    () => hashtags.length === hashtagsSet.size,
    'Один и тот же хэштег не может быть использован дважды.'
  );

  pristine.addValidator(
    hashtagsElement,
    () => hashtags.length <= HASHTAGS_LIMIT,
    `Нельзя указать больше ${HASHTAGS_LIMIT} хэштегов.`
  );

  textElement.addEventListener('keydown', (event) => {
    event.stopPropagation();
  });

  hashtagsElement.addEventListener('input', () => {
    hashtags = hashtagsElement.value.trimEnd().split(' ').filter(Boolean).map((hashtag) => hashtag.toLocaleLowerCase());
    hashtagsSet = new Set(hashtags);
    pristine.validate(hashtagsElement);
  });

  return {
    resetValidator() {
      pristine.reset();
    },
    validate() {
      return pristine.validate();
    },
  };
};
