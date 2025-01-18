// 1 способ:
const isNumbers = (string) => {
  let result = '';
  string = string.toString();

  for (let i = 0; i <= string.length - 1; i++) {
    if (Number.isNaN(parseInt(string[i], 10)) === false) {
      result += string[i];
    }
  }
  return result === '' ? NaN : Number(result);
};

isNumbers('2023 год'); // 2023
isNumbers('ECMAScript 2022'); // 2022
isNumbers('1 кефир, 0.5 батона'); // 105
isNumbers('агент 007'); // 7
isNumbers('а я томат'); // NaN

// 2 способ:
const isOnlyNumbers = (str) => Number(
  [...str].filter((item) => !isNaN(parseInt(item, 10))).join('') || NaN);

isOnlyNumbers('2023 год'); // 2023
isOnlyNumbers('ECMAScript 2022'); // 2022
isOnlyNumbers('1 кефир, 0.5 батона'); // 105
isOnlyNumbers('агент 007'); // 7
isOnlyNumbers('а я томат'); // NaN
