let users = JSON.parse(localStorage.getItem('users')) || [];
const newUser = {}

const signupPage = document.getElementById('signup-page')
const emailSection = document.getElementById('email-div')
const firstNameSec = document.getElementById('firstname-div')
const passwordSec = document.getElementById('password-div')
const numberSec = document.getElementById('number-div')

const contineBtn = document.getElementById('continue1').addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('email-input').value;
  if (email) {
    newUser.email = email;
    console.log(newUser)
  }
  
  if ('email' in newUser) {
      emailSection.style.display = 'none';
      firstNameSec.style.display = 'flex'
  }
})

const contineBtn2 = document.getElementById('continue2').addEventListener('click', (e) => {
  e.preventDefault()
  const firstname = document.getElementById('fistname-input').value;
  if (firstname) {
    newUser.firstname = firstname;
    console.log(newUser)
  }

  if ('firstname' in newUser) {
    firstNameSec.style.display = 'none'
    passwordSec.style.display = 'flex'
  }
})

const contineBtn3 = document.getElementById('continue3').addEventListener('click', (e) => {
  e.preventDefault()
  const password = document.getElementById('password-input').value
  const passwordCheck = document.getElementById('password-check').value

  if(password === passwordCheck) {
    newUser.password = password;
    console.log(newUser)
  }

  if ('password' in newUser) {
    passwordSec.style.display = 'none';
    numberSec.style.display = 'flex';

  }
})

const contineBtn4 = document.getElementById('continue4').addEventListener('click', (e) => {
  e.preventDefault()
  const number = document.getElementById('number-input').value

  if (number) {
    newUser.number = number;
    console.log(newUser)
  }

  if ('number' in newUser) {
    signupPage.style.display = 'none'

    localStorage.setItem('users', JSON.stringify(users));
    console.log(users);

    function moveToLogin() {
      window.location.href = "Login.html"
    }
    setTimeout(function() {
      moveToLogin()
    },2000)
    
    
  }
})

