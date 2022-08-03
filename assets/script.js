var generateBtn = document.querySelector("#generate");

var confirmLower = "abcdefghijklmnopqrstuvwxyz";
var confirmUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var optionsNumber = "8-126";
var ConfirmSymbols = "!@#$%^&*_-+=";
var confirmLength = [
	"confirmLength",
	"confirmUpper",
	"confirmlower",
	"confirmUpper",
	"confirmSymbol",
];
console.log(confirmLength);

var password = "randomPassword";
// TODO: add code to generate the password here
function pwd() {
	var confirmLength = prompt(
		"How many characters would you like your password to contain?"
	);

	while (confirmNumber > 7 || confirmNumber > 127) {
		alert("Password length must be between 8 and 126");
		var confirmNumber = prompt(
			"How many characters would you like your password to contain?"
		);
	}
	var confirmLowerC = confirm("would you like to add lowercase letters");

	var confirmUpperC = confirm("would you like to add uppercase letters");
	var confirmSymbolsC = confirm("would you like to add special symbols");

	let passwordinputs = "";
	if (confirmLowerC === true) {
		console.log("The user wants to add lower case");
		passwordinputs = passwordinputs.concat(confirmLower);
	}
	if (confirmLowerC === false) {
		console.log("The user does not want to add lower case");
	}
	if (confirmUpperC === true) {
		console.log("The user wants to add uppercase");
		passwordinputs = passwordinputs.concat(confirmUpper);
	}
	if (confirmUpperC === false) {
		console.log("The user does not want to add uppercase case");
	}
	if (confirmSymbolsC === true) {
		console.log("The user wants to add symbols");
		passwordinputs = passwordinputs.concat(ConfirmSymbols);
	}
	if (confirmSymbolsC === false) {
		console.log("The user does not want to add symbols");
	}
	console.log(passwordinputs);
	generatePassword(confirmLength, passwordinputs);
}

var generatePassword = (confirmlength, passwordinputs) => {
	let password = "";
	for (let i = 0; i < confirmlength; i++) {
		password += passwordinputs.charAt(
			Math.floor(Math.random() * passwordinputs.length)
		);
	}
	{
		document.getElementById("password").value = password;
	}
	console.log(generate);
	return password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", pwd);
