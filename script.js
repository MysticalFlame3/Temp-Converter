function myfun() {
  // Get the input value and selected units
  var inputValue = parseFloat(document.querySelector('input[name="search"]').value);
  var fromUnit = document.querySelector('select:nth-of-type(1)').value;
  var toUnit = document.querySelector('select:nth-of-type(2)').value;

  // Check if the input value is a valid number
  if (isNaN(inputValue)) {
      alert("Please enter a valid number for temperature conversion.");
      return;
  }

  // Perform temperature conversion
  var result;
  switch (fromUnit) {
      case 'Celcius':
          switch (toUnit) {
              case 'Farenheit':
                  result = (inputValue * 9/5) + 32;
                  break;
              case 'Kelvin':
                  result = inputValue + 273.15;
                  break;
              default:
                  result = inputValue;
          }
          break;
      case 'Farenheit':
          switch (toUnit) {
              case 'Celcius':
                  result = (inputValue - 32) * 5/9;
                  break;
              case 'Kelvin':
                  result = (inputValue - 32) * 5/9 + 273.15;
                  break;
              default:
                  result = inputValue;
          }
          break;
      case 'Kelvin':
          switch (toUnit) {
              case 'Celcius':
                  result = inputValue - 273.15;
                  break;
              case 'Farenheit':
                  result = (inputValue - 273.15) * 9/5 + 32;
                  break;
              default:
                  result = inputValue;
          }
          break;
      default:
          result = inputValue;
  }

  var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = inputValue + ' ' + fromUnit + ' is equal to ' + result.toFixed(2) + ' ' + toUnit;
}