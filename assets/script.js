// Assignment Code
var generateBtn = document.querySelector('#generate');

var confirmLower = "abcdefghijklmnopqrstuvwxyz";
var confirmUpper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var optionsNumber="8-126";
var ConfirmSymbols="!@#$%^&*_-+=";
var confirmLength, confirmLength, confirmUpper, confirmSymbol;
function generatePassword() {
   var password = 'randomPassword';
  // TODO: add code to generate the password here
  var confirmLength = (prompt("How many characters would you like your password to contain?"));
    
  while(confirmNumber <= 7 || confirmNumber >= 127) {
    alert ("Password length must be between 8 and 126");
    var confirmNumber= (prompt("How many characters would you like your password to contain?"));
    } 
    var confirmLower=(confirm("would you like to add lowercase letters"));
    console.log(confirmLower)

    var confirmUpper=(confirm("would you like to add uppercase letters"))
    console.log(confirmUpper)

    var confirmSymbols=(confirm("would you like to add special symbols"))
    console.log(confirmSymbols)
    
    var passwordinputs=[]
    if(confirmLower===true) {console.log("The user wants to add lower case")}
    if(confirmLower===false) {console.log("The user does not want to add lower case")}
    if(confirmUpper===true) {console.log("The user wants to add uppercase")}
    if(confirmUpper===false) {console.log("The user does not want to add uppercase case")}
    if(confirmSymbols===true) {console.log("The user wants to add symbols")}
    if(confirmSymbols===false) {console.log("The user does not want to add symbols")}
    
    
    
    
    return password;
    
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)