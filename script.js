// Assignment code here
const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}
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
function getRandomSymbol(){
  const symbol = "!@#$%^&*(){}[]=<>/,.|~?";
  return symbol[Math.floor(Math.random()*symbol.length)];
}

function passwordCrai(){
var length = window.prompt(" How many characters would you like your password? Choose between 8 and 128. ");
while (length < 8 || length > 128 ){
  window.alert(" You need to have a valid answer. ")
  return passwordCrai()
}
var lower =confirm(" Will this contain Lowercase letters? ");
if ( lower === true){
 getRandomLower()
 console.log(getRandomLower());
}


};
passwordCrai();

const myPassword = window.prompt("my password");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
