// Assignment code here
document.querySelector("#generate").addEventListener("click", writePassword);
//Generator functions
function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
// Symbol arry
  var symbol = ("!@#$%^&*()_+~`|}{[]\:;?><,./-=");

// Variable Declaration 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to be? . Choose between 8 and 128"));

  // Loop if answer is outside the parameters 
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

      // Repeat back how many charactes the user will have  
      alert(`Your password will have ${confirmLength} characters`);

    // Determine parameters of password 
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include SYMBOLS ?");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include NUMBERS ?");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include LOWERCASE characters ?");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include UPPERCASE characters ?");
      // Loop if answer is outside the parameters 
    while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
      alert("You must choose at least one parameter");
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include SYMBOLS ?");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include NUMBERS ?");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include LOWERCASE characters ?");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include UPPERCASE characters ?");   
    } ;

    // Assign an action to the password parameters NEED TO FIX THIS
  var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(symbol)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(getRandomNumber())
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(getRandomLower())
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(getRandomUpper())
    }

      console.log(passwordCharacters);

// Empty string to be filled based on for loop selecting random characters from the array
var randomPassword = ""
      
  for (var i = 0; i < confirmLength;i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
  };
    
// Get references to the #generate element
 var generateBtn = document.querySelector("#generate");

 // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
