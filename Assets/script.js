// Button Event Listener
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  // Variable List
  var passResult = "";
  var upChr;
  var lowChr;
  var num;
  var specChr;
  var passLength;

  // Function for password length validation
  var passLength = parseInt(prompt("Please select the amount of character your password require \n Limit on Password characters are 8 and 128."));

  if (passLength < 8 || passLength > 128) {
    alert("Error: You have selected under or over the 8-128 character limit.");
    passLength = prompt("Please retry selecting the amount of characters your password require \n Limit on Password characters are 8 and 128.");
    return false;
  }

  if (isNaN(passLength)) {
    alert("Error: Please select a correct amount.");
    passLength = prompt("Please retry selecting the amount of characters your password require \n Limit on Password characters are 8 and 128.");
    return false;
  }

  else (alert("Password length is" + " " + passLength + " " + "characters."));

  // Confirmation of variables with prompts

  lowChr = confirm("Should your password include lowercase alphabet characters?");
  if (lowChr == true) {
    var lowChr = true;
  }
  else if (lowChr == false) {
    var lowChr = false;
  }

  upChr = confirm("Should your password include uppercase alphabet characters?");
  if (upChr == true) {
    var upChr = true;
  }
  else if (upChr == false) {
    var upChr = false;
  }

  num = confirm("Should your password include numerical characters?");
  if (num == true) {
    var num = true;
  }
  else if (num == false) {
    var num = false;
  }

  specChr = confirm("Should your password include special characters?");
  if (specChr == true) {
    var specChr = true;
  }
  else if (specChr == false) {
    var specChr = false;
  }

  while (lowChr === false && upChr === false && num === false && specChr === false) {
    alert("Error: Character criteria not selected. Please restart!")
    return false;
  }


  //Password Generator
  var passResult = "";
  const lowArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const upArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
  const numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const specArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ";", "'", ":", "<", ">", "?", "/"];

  function randomLow() {
    if (lowChr === true) {
      return lowArray[Math.floor(Math.random() * lowArray.length)];
    }
  }

  function randomUp() {
    if (upChr === true) {
      return upArray[Math.floor(Math.random() * upArray.length)];
    }
  }

  function randomNum() {
    if (num === true) {
      return numArray[Math.floor(Math.random() * numArray.length)];
    }
  }

  function randomSpec() {
    if (specChr === true) {
      return specArray[Math.floor(Math.random() * specArray.length)];
    }
  }

  for (var i = 0; i < passLength; i++) {

    if (lowChr === true) {
      var randomL = randomLow()
    }
    else {
      randomL = ""
    }
    if (upChr === true) {
      var randomU = randomUp()
    }
    else {
      randomU = ""
    }
    if (num === true) {
      var randomN = randomNum()
    }
    else {
      randomN = ""
    }
    if (specChr === true) {
      var randomS = randomSpec()
    }
    else {
      randomS = ""
    }

    var passResult = passResult + randomL + randomU + randomN + randomS;
  }
  var passFinalResult = passResult.substring(0, passLength);

  var passwordText = document.querySelector("#password");
  passwordText.textContent = passFinalResult;
}
