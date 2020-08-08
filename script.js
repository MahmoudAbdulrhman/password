// Assignment code here
var enter;
var	lower;
var	symbol;
var number;
var upper; 
var space = [];
var choices;

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
  return symbol[Math.floor(Math.random()*symbol.enter)];
}











function generatePassword(){
var enter = parseInt(prompt(" How many characters would you like your password? Choose between 8 and 128. "));
if (!enter) {
  alert(" This need a value")
   } else if  (enter < 8 || enter > 128 || enter == null ){
  enter = parseInt(prompt(" You must choose a # between 8 and 128. "))
  return generatePassword()
} else {
  upper = confirm(" You want it to contain a UpperCase letters? ");
  lower = confirm(" You want it to lowerCase letters? ");
  number = confirm(" You want it to Number letters? ");
  symbol = confirm(" You want it to Symbol letters? ");
  
}
};


    


   

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
