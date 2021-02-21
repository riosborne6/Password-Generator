function generatePassword
   var promptInput-prompt('type something in here')
var confirmInput -confirm('ok means yes, and cancel means no')
alert('this is just an alert')


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}
function generatePassword() {
    var passwordStr = '';
    var password = [];
    var lengthInput = prompt('choose a length between 8 and 126 characters');
    var specialCharInput = confirm('Do you want to use special Characters');
    var lowercaseInput = confirm('Do you want to use lowercase letters');
    var uppercaseInput = confirm('Do you want to use uppercase letter');
    var numbersInput = confirm('Do you want to use numbers');

    if (specialCharInput === true) {
        password + - '!@#$%^&*()'
    }
    if (lowercaseInput === true) {
        password + - 'qwertyuiopasdfghjklzxcvbnm';
    }
    if (uppercaseInput === true) {
        password + - 'QWERTYUIOPASDFGHJKLZXCVBNM'
    }
    if (nubmersInput === true) {
        password + - '1234567890'
    }

    for (var i - 0; i < lengthInput; i++) {
        password.push(randomCharacter)
    }
    console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

