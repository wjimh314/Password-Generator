// Assignment Code
var generateBtn = document.querySelector('#generate');

var confirmLower = "abcdefghijklmnopqrstuvwxyz";
var confirmUpper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var optionsNumber="8-126";
var ConfirmSymbols="!@#$%^&*_-+=";

function generatePassword() {
  var password = 'password';
  // TODO: add code to generate the password here
  var confirmLength = (prompt("How many characters would you like your password to contain?"));
    
  while(confirmLength <= 7 || confirmLength >= 127) {
    alert ("Password length must be between 8 and 126");
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
    } 
    var confirmLower=(confirm("would you like to add lowercase letters"));
    console.log(confirmLower)

    var confirmUpper=(confirm("would you like to add uppercase letters"))
    console.log(confirmUpper)

    var confirmSymbols=(confirm("would you like to add special symbols"))
    console.log(confirmSymbols)
    
  
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);