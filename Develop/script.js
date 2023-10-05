// Assignment code here




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  var window = windowPrompts();
  var passwordText = document.querySelector("#password")
  if(window) {
  var Password = generatePassword();
  passwordText.value = Password;
  } else {
    passwordText.value = '';
  }
}


var characterLength = 8;
function generatePassword() {
 
  var password = '';
  for(var i = 0; i < characterLength; ++i) {
    var randomIndex = Math.floor(Math.random() * choices.length); 
    password = password + choices[randomIndex]; 
  }
  return password;
}
 
var choices = [];  
var uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialchar = ['!', 'S', '&', '^', '?', '+' ];
 


function windowPrompts() {
  choices = [];
  characterLength = parseInt(prompt(' How many characters would you like? (8 - 128 characters'));
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert('Character length must be between 8 and 128');
    return false
  }
  
  if (confirm(' Would you like numbers in your password?')) {
    choices = choices.concat(numbers);
  }
   if(confirm(' Would you like upppercase letters in your password?')) {
    choices = choices.concat(uppers);
  }
 if (confirm(' Would you like lowercase letters in your password?')) {
    choices = choices.concat(lowercase);
 if (confirm(' Would you like special characters in your password?')) {
    choices = choices.concat(specialchar);
  } 
  return true
  
}
}

  // return "Generate password will go here!";






// Add event listener to generate button



// create a window prompt
// prompt asks for qualities of passwords to include
// number of characters, capital letters, numbers,
// special characters
// define variables at top of js 
// 

// function windowprompts(){
// characterLength = parseIn