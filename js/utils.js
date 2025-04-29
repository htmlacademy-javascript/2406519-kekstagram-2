const DEFAULT_TIMER_DELAY = 500;

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
export const debounce = (callback, timeoutDelay = DEFAULT_TIMER_DELAY) => {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл "поставить таймаут - удалить таймаут" будет выполнятся,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
};
