const registrationForm = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  if (validateForm()) {
    alert('Registration successful!');
    registrationForm.reset();
  }
});

function validateForm() {
  let isValid = true;

  // Reset error messages
  resetErrorMessages();

  if (usernameInput.value.trim() === '') {
    displayErrorMessage(usernameInput, 'Username is required.');
    isValid = false;
  }

  if (emailInput.value.trim() === '') {
    displayErrorMessage(emailInput, 'Email is required.');
    isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    displayErrorMessage(emailInput, 'Invalid email address.');
    isValid = false;
  }

  if (passwordInput.value.trim() === '') {
    displayErrorMessage(passwordInput, 'Password is required.');
    isValid = false;
  }

  if (confirmPasswordInput.value.trim() === '') {
    displayErrorMessage(confirmPasswordInput, 'Please confirm your password.');
    isValid = false;
  } else if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
    displayErrorMessage(confirmPasswordInput, 'Passwords do not match.');
    isValid = false;
  }

  return isValid;
}

function resetErrorMessages() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(function(errorMessage) {
    errorMessage.textContent = '';
  });
}

function displayErrorMessage(inputElement, message) {
  const errorElement = inputElement.nextElementSibling;
  errorElement.textContent = message;
}

function isValidEmail(email) {
  // Very basic email validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
