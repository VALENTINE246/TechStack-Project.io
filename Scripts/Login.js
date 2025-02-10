let users = JSON.parse(localStorage.getItem('users')) || [];
    
// Login form submission handler
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(users)

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Find matching user
  const user = users.find((user) => user.email === email && user.password === password);

  if (user) {
    sessionStorage.setItem('loggedInUser', JSON.stringify(user));

    setTimeout(function() {
      function moveToHome() {
        window.location.href = "Home.html"
      }
      moveToHome()
    }, 3000)
  } 
});