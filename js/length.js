// function declaration
function getLengthDeclaration (string, maxLength) {
  return string.length <= maxLength;
}

// function  expression
const getLengthExpression = function(string, maxLength) {
  return string.length <= maxLength;
};

// arrow function  expression
const getLengthArrow = (string, maxLength) => (string.length <= maxLength);


// Строка короче 30 символов
getLengthDeclaration('В строке менее 30 символов', 30); // true
getLengthExpression('В строке менее 30 символов', 30); // true
getLengthArrow('В строке менее 30 символов', 30); // true

// Длина строки ровно 20 символов
getLengthDeclaration('В строке 20 символов', 20); // true
getLengthExpression('В строке 20 символов', 20); // true
getLengthArrow('В строке 20 символов', 20); // true

// Строка длиннее 10 символов
getLengthDeclaration('В этой строке менее, чем 10 символов', 10); // false
getLengthExpression('В этой строке менее, чем 10 символов', 10); // false
getLengthArrow('В этой строке менее, чем 10 символов', 10); // false
