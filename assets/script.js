//setting variables for user input/ answers to criteria
var submit;
var hasNumbers;
var hasLetters;
var hasCapLetters;
var hasSpecial;
var choices;

//password variables; numbers, lowercase & uppercase, and special characters

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=',
 '{', '[', '}', ']', '|', '/', '\:', '\;', '?', ',', '.'];

 var convert = [];

//function to get uppercase, and declaring a variable for converting

var toUpper = function (x) {
  return x.toUpperCase();
}

var capLetters = letters.map(toUpper);

//creating events upon users click of button

var genBtn = document.getElementById('generate');

genBtn.addEventListener('click', function () {
  genPwd = generatePassword();
  document.getElementById('password') = genPwd;
});

function generatePassword(){
  submit = parseInt(prompt('To define length of password, enter amount between 8 and 128?'));


if (!submit) {
  alert('A value must be entered to set this restriction');
} else if (submit < 8 || submit > 128) {
  submit = parseInt(prompt('A number between 8 and 128 must be entered to use this restriction'));
} else { 
  hasNumbers = confirm('Do you want numbers in the password?');
  hasLetters = confirm('Do you want lowercase letters in the password?');
  hasCapLetters = confirm('Do you want capatalized letters in the password?');
  hasSpecial = confirm('Do you want special characters in the password?');
};

//if statements 

//No criteria chosen !=not

if (!hasNumbers && !hasLetters && !hasCapLetters && !hasSpecial) {
  choices = alert('At least one restriction must be chosen!');
}

//all feilds selected

else if (hasNumbers && hasLetters && hasCapLetters && hasSpecial) {
  choices = letters.concat(numbers, special, capLetters);
}

//3 options selected

else if (hasNumbers, hasSpecial, hasLetters) {
  choices = letters.concat(specials, numbers);
}

else if (hasNumbers, hasSpecial, hasCapLetters) {
  choices = numbers.concat(numbers, specials);
}

else if (hasNumbers, hasLetters, hasCapLetters) {
  choices = letters.concat(numbers, capLetters);
}

else if (hasLetters, hasCapLetters, hasSpecial) {
  choices = letters.concat(capLetters, specials);
}

//2 options selected

else if (hasLetters, hasCapLetters) {
  choices = letters.concat(capLetters);
}

else if (hasLetters, hasNumbers) {
  choices = letters.concat(numbers);
}

else if (hasLetters, hasSpecial) {
  choices = letters.concat(specials);
}

else if (hasCapLetters, hasNumbers) {
  choices = capLetters.concat(numbers);
}

else if (hasCapLetters, hasSpecial) {
  choices = special.concat(capLetters);
}

else if (hasSpecial, hasNumbers) {
  choices = specials.concat(numbers);
}

//only 1 selected

else if (hasCapLetters) {
  choices = convert.concat(capatilize);
}

else if (hasLetters) {
  choices = letters;
}

else if (hasNumbers) {
  choices = numbers;
}

else if (hasSpecial) {
  choices = specials
};

//place holder for length

var password = [];


//random selection of variables

for (var i=0; i < submit; i++){
  var selection = choices[Math.floor(Math.random()*choices.length)];
  password.push(selection);
}

var genPwd = password.join('')
UserInput(genPwd);
return genPwd;
}
function UserInput(genPwd) {

document.getElementById('password').textContent = genPwd;

}