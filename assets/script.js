// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  //ALL YOUR CODE GOES HERE!!!
  //code GOES hErE
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
