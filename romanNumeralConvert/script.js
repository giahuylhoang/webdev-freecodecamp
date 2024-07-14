

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
//     <link
//       href="https://fonts.googleapis.com/css2?family=Castoro+Titling&display=swap"
//       rel="stylesheet"
//     />
//     <link rel="stylesheet" type="text/css" href="styles.css" />
//     <link
//       rel="icon"
//       type="image/png"
//       href="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
//     />
//     <title>Roman Numeral Converter</title>
//   </head>
//   <body>
//     <main>
//       <img
//         class="freecodecamp-logo"
//         src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg"
//         alt="freeCodeCamp Logo"
//       />
//       <h1>Roman Numeral Converter</h1>
//       <form id="form" class="form">
//         <fieldset>
//           <label for="number">Enter a Number:</label><br />
//           <input type="number" id="number" required />
//           <button type="button" id="convert-btn">Convert</button>
//         </fieldset>
//       </form>
//       <div id="output" class="output hidden"></div>
//     </main>
//     <script src="script.js"></script>
//   </body>
// </html>



const numberInput = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const outputDiv = document.getElementById('output');

const returnError = () => {
    outputDiv.classList.remove('hidden');
    outputDiv.textContent = 'Please enter a valid number';
}

convertButton.addEventListener('click', () => {
    if (numberInput.value === "" || isNaN(numberInput.value)) {
        returnError();
        return;
    } else {
        const number = parseInt(numberInput.value);
        if (number < 1 || number > 3999) {

            outputDiv.classList.remove('hidden');
            outputDiv.classList.add('alert');
            outputDiv.textContent = 'Please enter a number less than or equal to 3999.';
            
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


const findStartIndex = (number) => {

}
const convertToRoman = (num) => {
  const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  const numerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

  if (num === 0) {
    return ""; 
  } if (num === 1) {
    return "I";
  }
   else {
    firstNumIndex = numerals.findIndex((numeral) => num >= numeral);
    const numeral = numerals[firstNumIndex];
    quotient = Math.floor(num / numeral);
    remainder = num % numeral;
    return romanNumerals[firstNumIndex].repeat(quotient) + convertToRoman(remainder);
  }
} 

