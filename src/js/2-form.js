const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');

form.addEventListener('input', inputHandler);
function inputHandler(event) {
  if (event.target.name === 'email') {
    formData.email = event.target.value;
  } else if (event.target.name === 'message') {
    formData.message = event.target.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const emailText = form.querySelector('.form-input');
const messageText = form.querySelector('.form-t-area');

function dataFiller() {
  const dataContent = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (dataContent) {
    formData.email = dataContent.email.trim();
    emailText.value = dataContent.email;
    formData.message = dataContent.message.trim();
    messageText.value = dataContent.message;
  }
}

dataFiller();

form.addEventListener('submit', sbmHandler);
function sbmHandler(event) {
  event.preventDefault();
  if (emailText.value.trim() === '' || messageText.value.trim() === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    event.target.reset();
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
  }
}
