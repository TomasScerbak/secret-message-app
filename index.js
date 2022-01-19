const form = document.querySelector('form');

const { hash } = window.location;

const message = atob(hash.replace('#', ''));

if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message
}

form.addEventListener('submit', event => {
    // preventing default behaviour of submit form
    event.preventDefault();
// hiding first form and showing up another upon submit event
document.querySelector('#message-form').classList.add('hide');
document.querySelector('#link-form').classList.remove('hide');
// getting value from input and encrypting it
const input = document.querySelector('#message-input');
const encrypted = btoa(input.value);

const linkInput = document.querySelector('#link-input')
// concatenating encrypted value with acutal http path
linkInput.value = `${window.location}#${encrypted}`;
linkInput.select();
});