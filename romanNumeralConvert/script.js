const numberInput = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const outputDiv = document.getElementById('output');

const formatError = () => {
    outputDiv.classList.remove('hidden');
    outputDiv.classList.add('alert');
}

convertButton.addEventListener('click', () => {
    if (numberInput.value === "" || isNaN(numberInput.value)) {
        formatError();
        outputDiv.textContent = 'Please enter a valid number.';
        return;
    } else {
        const number = parseInt(numberInput.value);
        if (number > 3999) {

            formatError();
            outputDiv.textContent = 'Please enter a number less than or equal to 3999.';
            
            return;
        } else if (number < 1) {
            formatError();
            outputDiv.textContent = 'Please enter a number greater than or equal to 1.';
            
            return; 
        } else {
        const romanNumeral = convertToRoman(number);

        outputDiv.classList.remove('alert');
        outputDiv.classList.remove('hidden');      
        outputDiv.textContent = romanNumeral;
        
        return;
    }
    }
});

const convertToRomanTest = (num) => "XXX";

const convertToRoman = (num) => {
  const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  const numerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

  if (num === 0) {
    return ""; 
  } if (num === 1) {
    return "I";
  }
   else {
    const firstNumIndex = numerals.findIndex((numeral) => num >= numeral);
    const numeral = numerals[firstNumIndex];
    const quotient = Math.floor(num / numeral);
    const remainder = num % numeral;
    return romanNumerals[firstNumIndex].repeat(quotient) + convertToRoman(remainder);
  }
} 
