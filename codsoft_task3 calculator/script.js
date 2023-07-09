document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById('display');
    let buttons = document.querySelectorAll('.buttons button');
    let clearButton = document.getElementById('clear');
    let equalsButton = document.getElementById('equals');

    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        if (button.innerText === '=') {
          calculate();
        } else if (button.innerText === 'C') {
          clearDisplay();
        } else {
          display.value += button.innerText;
        }
      });
    });
  
    function calculate() {
      try {
        let result = eval(display.value);
        display.value = result;
      } catch (error) {
        display.value = 'Error';
      }
    }
  
    function clearDisplay() {
      display.value = '';
    }
  });
  