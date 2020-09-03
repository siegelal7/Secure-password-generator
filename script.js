// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  var characters = "!@#$%^&*()";
  var numbs = "1234567890";
  var confirmedSelections = "";
  do {
    var passwordLength = prompt(
      "How long would you like your password to be? (between 8 and 128 characters)"
    );
    passwordLength = parseInt(passwordLength);
  } while (passwordLength < 8 || passwordLength > 128);
  while (confirmedSelections == "") {
    var lowerCase = confirm("Would you like to include lowercase letters?");
    var upperCase = confirm("Would you like to include uppercase letters?");
    var numbers = confirm("Would you like to include numbers?");
    var chars = confirm("Would you like to include characters?");

    if (lowerCase === true) {
      confirmedSelections += lowerLetters;
    }
    if (upperCase === true) {
      confirmedSelections += upperLetters;
    }
    if (numbers === true) {
      confirmedSelections += numbs;
    }
    if (chars === true) {
      confirmedSelections += characters;
    }
    if (confirmedSelections == "") {
      alert("please choose at least 1 character type");
    }
  }
  var returnedValue = "";
  for (var i = 0, n = confirmedSelections.length; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * n);
    returnedValue += confirmedSelections.charAt(index);
  }
  if (returnedValue.length < 8) {
    alert("Please choose at least 12 characters");
  }

  return returnedValue;
}

// find length of new string-confirmedSelections
// make a new variable to use the Math.random() function on

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
