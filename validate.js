const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');
const greetingMessage = document.getElementById('greetingMessage');
let registeredEmail = '';
let registeredpass = '';
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signUpName').value.trim().toUpperCase();
    const email = document.getElementById('signUpEmail').value.trim();
    const password = document.getElementById('signUpPassword').value.trim();
    registeredEmail = email;
    registeredpass = password;
    if (name && email && password) {
        container.classList.remove("active");
        alert('Registered successfully');
        greetingMessage.textContent = `Hello, ${name}!`;
    } else {
        alert('Please fill in all fields');
    }
});

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signInEmail').value.trim();
    const password = document.getElementById('signInPassword').value.trim();
    
    if (email && password) {
        if(registeredEmail === email && registeredpass == password ){
            alert('Logged in successfully'); 
            window.location.href = 'home.html';  
        }
        else{
            alert('Either Email Does not exists or Incorrect Password')
        }
    } else {
        alert('Please fill in all fields');
    }
});
