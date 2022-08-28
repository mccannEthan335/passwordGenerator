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

var capatilize = characters.map(toUpper);