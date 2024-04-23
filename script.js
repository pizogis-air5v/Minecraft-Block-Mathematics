function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;
  let result;

  switch (operator) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 === 0) {
        result = 'Cannot divide by zero';
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = 'Invalid operator';
  }

  document.getElementById('result').innerText = `Result: ${result}`;
}
