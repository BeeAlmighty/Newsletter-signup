const form = document.querySelector('.card--form');
const successMessage = document.querySelector('.success--message');
const dismissMessage = document.querySelector('.btn--success');
const errorMessage = document.querySelector('.error--message');
const input = document.querySelector('input');
const card = document.querySelector('.card');
const userEmail = document.querySelector('.success--email');


const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target)
  const { email } = Object.fromEntries(formData);
  validateEmail(email)
  userEmail.textContent = email;
} 
form.addEventListener('submit', handleSubmit);

dismissMessage.addEventListener('click', () => {
  successMessage.style.display = 'none';
  card.style.display = 'flex';
  input.value = '';
})

const validateEmail = (email) => {
  input.classList.add('error')
  errorMessage.style.display = 'flex';
  const isValidEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (!email) {
    errorMessage.textContent = 'Email is required';
  } else if (!isValidEmail.test(email)) {
    errorMessage.textContent = 'Please enter a valid email';
  } else {
    successMessage.style.display = 'flex';
    errorMessage.style.display = 'none';
    input.classList.remove('error');
    card.style.display = 'none'
  }
}