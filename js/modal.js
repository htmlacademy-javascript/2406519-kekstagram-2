export const useModal = (modalElement, onClose) => {
  const cancelElement = modalElement.querySelector('.cancel');

  const openModal = () => {
    modalElement.classList.remove('hidden');
    document.body.classList.add('modal-open');

    document.addEventListener('keydown', onKeydown);
  };

  const closeModal = () => {
    if (document.body.querySelector('[data-overmodal]')) {
      return;
    }

    modalElement.classList.add('hidden');
    document.body.classList.remove('modal-open');

    document.removeEventListener('keydown', onKeydown);

    if (onClose) {
      onClose();
    }
  };

  function onKeydown (event) {
    if (event.key.toLowerCase().includes('esc')) {
      closeModal();
    }
  }

  cancelElement.addEventListener('click', () => {
    closeModal();
  });

  return { openModal, closeModal };
};
