const isPalindrome = (string = '') => {
  const newString = string.replaceAll(' ', '').toLowerCase();
  const reverseString = newString.split('').reverse().join('');
  return reverseString === newString;
};

// Строка является палиндромом
isPalindrome('топот'); // true

// Несмотря на разный регистр, тоже палиндром
isPalindrome('ДовОд'); // true

// Это не палиндром
isPalindrome('Кекс'); // false

// Это палиндром
isPalindrome('Лёша на полке клопа нашёл '); // true
