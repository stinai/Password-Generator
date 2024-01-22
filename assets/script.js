var lowAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChar = ["!","$","*","+","-","/","<",">","?","_"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

var passLength = "";

function generatePassword() {
  console.log("Button pressed!");
  passLength = prompt("How many characters would you like your password to contain?");
  
// 1. Prompt password criteria
  
//  a. Prompt asking the password Length 8 < 128
  if (passLength <= 7 || passLength >= 129) {
    passLength = prompt("Try Again. Please enter a number between 8 and 128.");
  }
  alert("Your password will have " + passLength + " characters.");
//  b. Different prompts asking for lowercase, uppercase, numbers or special characers.
var showLowAlphabet = confirm("Click OK if you would like to include lowercase characters.");
var showUpAlphabet = confirm("Click OK if you would like to include uppercase characters.");
var showSpecialChar = confirm("Click OK if you would like to include special characters.");
var showNumbers = confirm("Click OK if you would like to include numeric characters.");


// 2. Validate the input. Ensure everything above.

if (showLowAlphabet === false && showUpAlphabet === false && showSpecialChar === false && showNumbers === false) {
  alert("You must include at least one lowercase, uppercase, special or numeric character!");
  showLowAlphabet = confirm("Click OK if you would like to include lowercase characters.");
  showUpAlphabet = confirm("Click OK if you would like to include uppercase characters.");
  showSpecialChar = confirm("Click OK if you would like to include special characters.");
  showNumbers = confirm("Click OK if you would like to include numeric characters.");
}

// 3. Generate password based on criteria.
var generatedPassword = [];

if (showLowAlphabet) {
  generatedPassword = generatedPassword.concat(lowAlphabet);
}

if (showUpAlphabet) {
  generatedPassword = generatedPassword.concat(upAlphabet);
}

if (showSpecialChar) {
  generatedPassword = generatedPassword.concat(specialChar);
}

if (showNumbers) {
  generatedPassword = generatedPassword.concat(numbers);
}

// 4. Display generated password on the page.
var passwordRand = ""


  for (var i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * generatedPassword.length)
    passwordRand += generatedPassword[randomIndex];
  }


  return passwordRand;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);