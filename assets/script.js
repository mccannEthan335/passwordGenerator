//setting variables for user input/ answers to criteria
var submit
var numbers
var characters
var capLetters
var specials
var choices

//password variables; numbers, lowercase & uppercase, and special characters

num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=',
 '{', '[', '}', ']', '|', '/', '\:', '\;', '?', ',', '.'];

//function to get uppercase, and declaring a variable for converting

var toUpper = function (letter) {
  return letter.toUpperCase();
}

var capatilize = letters.map(toUpper);

//creating events upon users click of button

var genBtn = document.getElementById('generate');

genBtn.addEventListener('click', function () {
  genPwd = generatePassword();
  document.getElementById('password').innerText = genPwd;
});

function generatePassword(){
  submit = parseInt(prompt('To define length of password, enter amount between 8 and 128?'))
}

if (!submit) {
  alert('A value must be entered to set this restriction')
} else if (submit < 8 || submit > 128) {
  submit = parseInt(prompt('A number between 8 and 128 must be entered to use this restriction'));
};

