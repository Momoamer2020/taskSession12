const vales =
{
lowerCase:'abcdefghijklmnopqrsyuvwxyz',
upperCase:'ABCDEFGHIJKLMNOPQRSTUVWXWZ',
numbers:'0123456789',
symbols:'!@#$%^&*()_+[]<>?/|-'
};

//get password length
let passwordLengthField = document.getElementById('length');

//get length from range input and put it in the span
passwordLengthField.addEventListener('input',function(){
    document.getElementById('length-value').textContent = passwordLengthField.value 
   
})

let outputField = document.getElementById('password');
let generateButton = document.getElementById('generate');

generateButton.addEventListener('click', function(){
    outputField.value= generatePassword();
})

function generatePassword() {
    let uppercase = document.getElementById('uppercase');
    let lowercase = document.getElementById('lowercase');
    let numbers = document.getElementById('numbers');
    let symbols = document.getElementById('symbols');
    let chars ='';

    if(lowercase.checked){
        chars += vales['lowerCase'];
        console.log(chars)
    }
    if(uppercase.checked){
        chars += vales['upperCase'];
    }
    if(numbers.checked){
        chars += vales['numbers'];
    }
    if(symbols.checked){
        chars += vales['symbols'];
    }

    let passwordLength= + passwordLengthField.value;
    let password='';

    for(let i= 1 ; i<=passwordLength ;i++)
    {
        let randomNumber =Math.floor( Math.random() * chars.length );
        let randomChar = chars[randomNumber]

        password += randomChar;
    }

    return password;
}

let copy = document.querySelector('.copy')
copy.addEventListener('click', function(){
    navigator.clipboard.writeText(outputField.value)
    alert('password copied')
})
