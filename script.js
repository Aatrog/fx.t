// Toggle between Sign In and Sign Up forms
function toggleForm() {
    const formTitle = document.getElementById('form-title');
    const toggleAuthText = document.getElementById('toggle-auth');
    const submitButton = document.querySelector('.btn');
    
    if (formTitle.innerHTML === "Sign In") {
      formTitle.innerHTML = "Sign Up";
      submitButton.innerHTML = "Sign Up";
      toggleAuthText.innerHTML = "Already have an account? <a href='#' onclick='toggleForm()'>Sign in</a>";
    } else {
      formTitle.innerHTML = "Sign In";
      submitButton.innerHTML = "Sign In";
      toggleAuthText.innerHTML = "Don't have an account? <a href='#' onclick='toggleForm()'>Sign up</a>";
    }
  }
  
  // Handle form submission for sign-in or sign-up
  document.getElementById('auth-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (document.getElementById('form-title').innerHTML === "Sign Up") {
      // Sign Up - Save user credentials in localStorage
      if (localStorage.getItem(username)) {
        alert("Username already exists. Please choose another.");
      } else {
        const user = { username, password };
        localStorage.setItem(username, JSON.stringify(user));
        alert("Sign up successful! You can now log in.");
        toggleForm(); // Switch to sign-in form after successful sign-up
      }
    } else {
      // Sign In - Check credentials from localStorage
      const storedUser = JSON.parse(localStorage.getItem(username));
      
      if (storedUser && storedUser.password === password) {
        alert("Login successful! Welcome back.");
      } else {
        alert("Invalid username or password.");
      }
    }
  });
  