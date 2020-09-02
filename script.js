// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var length = prompt(
    "How long would you like your password to be? (max length 128 characters)"
  );
  var lowerCase = confirm("Would you like to include lowercase letters?");
  var upperCase = confirm("Would you like to include uppercase letters?");
  var numbers = confirm("Would you like to include numbers?");
  var chars = confirm("Would you like to include characters?");
  var characters = ["!@#$%^&*()"];
  //var item = characters[Math.floor(Math.random() * characters.length)];
  //console.log(item);
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  var numbs = "1234567890";
  // TODO: gen a real password
  return "Still working..";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
