// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // prompt
  var length = prompt("between 8 and 128 characters")
  var includeLowercase = confirm("should your password have lowercase letters")
  var Uppercase = confirm("Should your password have Uppercase letters")
  var Numbers = confirm("Should your password include numbers")
  var Specialcharacters = confirm("Should your password have special characters")

  // validate
  if (length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return;
  }

  if (! includeLowercase && !Uppercase && !Numbers && !Specialcharacters){
    alert("At least one character type must be selected.");
    return;
  }
  
 



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

