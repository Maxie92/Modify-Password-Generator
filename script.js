//User input variables
var enter
var confirmUpperCase
var confirmLowerCase
var confirmNumbers
var confirmSpecialCharaters

//Array of options for computer to use when creating the password
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '/', ']', '^', '_', '{', '|', '}', '`', '~']

// Assignment Code
var generateBtn = document.querySelector("#generate");
enter = parseInt(prompt('Between 8 and 128, how long would you like your password to be?'));
if (!enter) {
  alert('This needs a value');
} else if (enter < 8 || enter > 128) {
  enter = parseInt(promt('You must choose between 8 and 128'))
} else {
  confirmUpperCase = confirm('Would you like to include Upper Case letters?');
  confirmLowerCase = confirm('Would you like to include Lower Case letters?')
  confirmNumbers = confirm('Would you like to include Numbers?')
  confirmSpecialCharaters = confirm('Would you like to include Special Characters?')
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
