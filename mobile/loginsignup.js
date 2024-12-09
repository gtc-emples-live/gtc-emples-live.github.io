// Toggle between Login and Signup forms
const loginSection = document.getElementById('login-section');
const signupSection = document.getElementById('signup-section');

document.getElementById('to-signup').addEventListener('click', () => {
  loginSection.classList.remove('active');
  signupSection.classList.add('active');
});

document.getElementById('to-login').addEventListener('click', () => {
  signupSection.classList.remove('active');
  loginSection.classList.add('active');
});

// Handle Form Submission
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = (document.getElementById('login-email')).value;
  const password = (document.getElementById('login-password')).value;
  console.log('Login:', { email, password });
  alert('Logged in successfully!');
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = (document.getElementById('signup-name')).value;
  const email = (document.getElementById('signup-email')).value;
  const password = (document.getElementById('signup-password')).value;
  console.log('Sign Up:', { name, email, password });
  alert('Signed up successfully!');
});
