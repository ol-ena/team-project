const selected3 = document.querySelector('.selected31');
const optionsContainer3 = document.querySelector('.options-container31');

const optionsList = document.querySelectorAll('.option31');

selected3.addEventListener('click', () => {
  optionsContainer3.classList.toggle('active');
});

optionsList.forEach(o => {
  o.addEventListener('click', () => {
    selected3.innerHTML = o.querySelector('label').innerHTML;
    optionsContainer3.classList.remove('active');
  });
});
