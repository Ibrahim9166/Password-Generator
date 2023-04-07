// Assignment Code
var generateBtn = document.querySelector("#generate");




  // Generate Password Function
function generatePassword() {

  // prompt
  var length = prompt(" Your password should be between 8 and 128 characters. Pick a number between 8-128.")
  var includeLowercase = confirm("Should your password have lowercase letters. Click ok for yes or cancel for no.")
  var Uppercase = confirm("Should your password have Uppercase letters. Click ok for yes or cancel for no.")
  var Numbers = confirm("Should your password include numbers. Click ok for yes or cancel for no.")
  var Specialcharacters = confirm("Should your password have special characters. Click ok for yes or cancel for no")

  // validate
  if (length < 8 || length > 128) {
    alert("You did not pick a number between 8 and 128 TRY AGAIN");
    return;
  }

  if (! includeLowercase && !Uppercase && !Numbers && !Specialcharacters){
    alert("At least one character type must be selected.");
    return;
  }

  //define wwhat characters to use
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var specialchar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  var charSet = "";
  if (includeLowercase) {
    charSet += lowercase;
  }
  if (Uppercase){
    charSet += uppercase;
  }
  if (Numbers){
    charSet += numeric;
  }
  if (Specialcharacters){
    charSet += specialchar;
  }

  // generate
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }
  return password;
}

  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

