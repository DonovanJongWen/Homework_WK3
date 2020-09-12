// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  promptChoices();

// Array List
let caseArray=[];
let upChr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
let lowChr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let num = ["1","2","3","4","5","6","7","8","9","0"];
let specChr = ["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];

// Variable List
var passResult = "";
var genUpChr;
var genLowChr;
var genNum;
var genSpecChr;
var passLength;

// Function for password length validation
function promptChoices() {
  passLength = parseInt(prompt("Please select the amount of character your password require \n Limit on Password characters are 8 and 128."));

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

  genLowChr = confirm("Should your password include lowercase alphabet characters?");
  if (genLowChr == true){
    var genLowChr = true;
  }
  else if (genLowChr == false){
    var genLowChr = false;
  }

  genUpChr = confirm("Should your password include uppercase alphabet characters?");
  if (genUpChr == true){
    var genUpChr = true;
  }
  else if (genUpChr == false){
    var genUpChr = false;
  }

  genNum = confirm("Should your password include numerical characters?");
  if (genNum == true){
    var genNum = true;
  }
  else if (genNum == false){
    var genNum = false;
  }

  genSpecChr = confirm("Should your password include special characters?");
  if (genSpecChr == true){
    var genSpecChr = true;
  }
  else if (genSpecChr == false){
    var genSpecChr = false;
  }

  while (genLowChr === false && genUpChr === false && genNum === false && genSpecChr === false) {
    alert("Error: Character criteria not selected. Please restart!")
    return false;
  }
}

// Array Grouping
if(genLowChr == true){
  caseArray.push(lowChr);

}
if(genUpChr == true){
  caseArray.push(upChr);

}
if(genNum == true){
  caseArray.push(num);

}
if(genSpecChr == true){
  caseArray.push(specChr);

}

//Password length loop
for(var i=0; i < passLength; i++){

  var randomArrayNum;
  var selectedCharArray;
  let randomCharNum;
  let randomChar;

  randomArrayNum = parseInt(Math.floor(Math.random()*caseArray.length));
  selectedCharArray = caseArray[randomArrayNum];
  randomCharNum = Math.floor(Math.random()*selectedCharArray.length);

  randomChar = selectedCharArray[randomCharNum];

  passResult += randomChar;
}

document.getElementById("password").innerHTML = passResult;

}
