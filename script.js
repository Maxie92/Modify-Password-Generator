//User input variables
var enter
var confirmUpperCase
var confirmLowerCase
var confirmNumbers
var confirmSpecialCharaters

//choices based on if statement
var choices

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
  enter = parseInt(prompt('You must choose between 8 and 128'))
} else {
  confirmUpperCase = confirm('Would you like to include Upper Case letters?');
  confirmLowerCase = confirm('Would you like to include Lower Case letters?')
  confirmNumbers = confirm('Would you like to include Numbers?')
  confirmSpecialCharaters = confirm('Would you like to include Special Characters?')
};

//If user doesn't choose any of the options
if (!confirmUpperCase && !confirmLowerCase && !confirmNumbers && !confirmSpecialCharaters) {
  choices = alert('Some options must be selected!')
}
//Different options for user choice.
//If all four options are selected.
else if (confirmUpperCase && confirmLowerCase && confirmNumbers && confirmSpecialCharaters) {
  choices = upperCase.concat(lowerCase, numbers, specialCharacters);
}
//If three options are selected.
else if (confirmUpperCase && confirmLowerCase && confirmNumbers) {
  choices = upperCase.concat(lowerCase, numbers);
}
else if (confirmUpperCase && confirmLowerCase && confirmSpecialCharaters) {
  choices = upperCase.concat(lowerCase, specialCharacters);
}
else if (confirmUpperCase && confirmNumbers && confirmSpecialCharaters) {
  choices = upperCase.concat(numbers, specialCharacters);
}
else if (confirmLowerCase && confirmNumbers && confirmSpecialCharaters) {
  choices = lowerCase.concat(numbers, specialCharacters);
}
//If two options are selected.
else if (confirmUpperCase && confirmLowerCase) {
  choices = upperCase.concat(lowerCase);
}
else if (confirmUpperCase && confirmNumbers) {
  choices = upperCase.concat(numbers);
}
else if (confirmUpperCase && confirmSpecialCharaters) {
  choices = upperCase.concat(specialCharacters);
}
else if (confirmLowerCase && confirmNumbers) {
  choices = lowerCase.concat(numbers);
}
else if (confirmLowerCase && confirmSpecialCharaters) {
  choices = lowerCase.concat(specialCharacters);
}
else if (confirmNumbers && confirmSpecialCharaters) {
  choices = numbers.concat(specialCharacters);
}

//If one option is selected.
else if (confirmUpperCase) {
  choices = upperCase;
}
else if (confirmLowerCase) {
  choices = lowerCase;
}
else if (confirmNumbers) {
  choices = numbers;
}
else if (confirmSpecialCharaters) {
  choices = specialCharacters;
}

for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.generateBtn(pickChoices);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
