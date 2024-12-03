let passwordLength = 8;


let isUppercase = false;
let isNumbers = false;
let isSymbols = false;

const passwordRangeInputEl = document.getElementById("passwordLengthInput");
const passwordLengthValueEl = document.getElementById("passwordLengthValue");
const generateButtonEl = document.getElementById("generateButton");
const passwordEl = document.getElementById("password");



const generatePassword = (passLength) =>{
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = isUppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    const numbers = isNumbers ? "0123456789" : "";
    const symbols = isSymbols ? "!@#$%^&*()_+-<>?\/|~`:;" : "";

    const passwordChar = lowerCaseLetters + upperCaseLetters + numbers + symbols;
    let password = "";

    for(let i=0;i<passLength;i++){
        const charIndex = Math.floor(Math.random() * passwordChar.length);
        password += passwordChar[charIndex];
    }
    return password;
};

passwordRangeInputEl.addEventListener("input",(e)=>{
    passwordLength = +e.target.value;
    passwordLengthValueEl.innerText = passwordLength;
});

generateButtonEl.addEventListener("click",()=>{

    const uppercaseCheckEl = document.getElementById("uppercase");
    const numbersCheckEl = document.getElementById("numbers");
    const symbolsCheckEl = document.getElementById("symbols");


    isUppercase = uppercaseCheckEl.checked;
    isNumbers = numbersCheckEl.checked;
    isSymbols = symbolsCheckEl.checked;


   
    const password =generatePassword(passwordLength);
    passwordEl.innerHTML = password;
    console.log("password",password);
});

passwordEl.addEventListener("click",(e)=>{
    navigator.clipboard.writeText(passwordEl.innerText).then(()=>{
        alert("Copied to clipboard");
    }).catch((err)=>{
        alert("Could not copy");
    });
});
