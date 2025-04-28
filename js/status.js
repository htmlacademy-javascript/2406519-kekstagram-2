const TIME_TO_SHOW = 5000;

const templates = {
  dataError: document.querySelector('#data-error').content,
  error: document.querySelector('#error').content,
  success: document.querySelector('#success').content,
};

export const showStatus = (mode) => {
  const element = templates[mode].cloneNode(true).querySelector('section');
  const buttonElement = element.querySelector('button');

  const close = () => {
    element.remove();
    document.removeEventListener('keydown', onKeydown);
  };

  function onKeydown (event) {
    if (event.key.toLowerCase().includes('esc')) {
      close();
    }
  }

  if (buttonElement) {
    document.addEventListener('keydown', onKeydown);

    element.addEventListener('click', ({ target }) => {
      const tagName = target.tagName.toLowerCase();

      if (tagName === 'section' || tagName === 'button') {
        close();
      }
    });
  } else {
    setTimeout(close, TIME_TO_SHOW);
  }

  document.body.append(element);
};
