// get the form
const loginForm = document.querySelector('.login-form');

// inside form, get inputs one by one
const emailInput = loginForm.elements.email;
const passwordInput = loginForm.elements.password;

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  // take values and trim spaces
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  // check if empty
  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }

  // create object
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  // clear form
  loginForm.reset();
});
