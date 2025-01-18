const isPalindrome = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();

  let concatenation = '';
  for (let index = string.length - 1; index >= 0; index--) {
    concatenation += string[index];
  }

  return string === concatenation;
};


const isPalindromeRevers = (string = '') => {
  const newString = string.replaceAll(' ', '').toLowerCase();
  const reverseString = newString.split('').reverse().join('');
  return reverseString === newString;
};


// Строка является палиндромом
isPalindrome('топот'); // true
isPalindromeRevers('топот'); // true

// Несмотря на разный регистр, тоже палиндром
isPalindrome('ДовОд'); // true
isPalindromeRevers('ДовОд'); // true

// Это не палиндром
isPalindrome('Кекс'); // false
isPalindromeRevers('Кекс'); // false

// Это палиндром
isPalindrome('Лёша на полке клопа нашёл '); // true
isPalindromeRevers('Лёша на полке клопа нашёл '); // true
