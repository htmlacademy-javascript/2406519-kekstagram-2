const isPalindromeRevers = (string = '') => {
  const newString = string.replaceAll(' ', '').toLowerCase();
  const reverseString = newString.split('').reverse().join('');
  return reverseString === newString;
};


// Строка является палиндромом
isPalindromeRevers('топот'); // true

// Несмотря на разный регистр, тоже палиндром
isPalindromeRevers('ДовОд'); // true

// Это не палиндром
isPalindromeRevers('Кекс'); // false

// Это палиндром
isPalindromeRevers('Лёша на полке клопа нашёл '); // true
