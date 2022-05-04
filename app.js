const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const button = document.getElementById("button");
const passwordTextArr = Array.from(document.getElementsByClassName('passwordtext'));

button.addEventListener("click", () => {
    console.log(passwordTextArr)
    let passwords = [];
    let characters = alpha;
    incNumbers.checked ? (characters += numbers) : "";
    incSymbols.checked ? (characters += symbols) : "";

    for(let i = 0; i < 4; i++) {
        passwords.push(generatePassword(length.value, characters));
        passwordTextArr[i].value = passwords[i];
    }
});

passwordTextArr.forEach(element => {
    element.addEventListener("click", () => {
        element.select();
        document.execCommand("copy");
        alert("Password Copied");
      }); 
});

const generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  };