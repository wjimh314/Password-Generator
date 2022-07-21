// Assignment Code
var generateBtn = document.querySelector('#generate');

var confirmLower = "abcdefghijklmnopqrstuvwxyz";
var options= upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var options = number="8-126";
var options = symbol="!@#$%^&*_-+=";

function generatePassword() {
  var password = 'password';
  // TODO: add code to generate the password here
  var confirmLength = (prompt("How many characters would you like your password to contain?"));
    
  while(confirmLength <= 7 || confirmLength >= 127) {
    alert ("Password length must be between 8 and 126");
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
    } 
    var confirmLower=(confirm("would you like to add lowercase letters"));
  
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