const randomNumber = Math.floor(Math.random() * 100) + 1;

const form = document.getElementById('formG');
const guessInput = document.getElementById('userG');
const message = document.getElementById('msg');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const userGuess = Number(guessInput.value);

    if (userGuess > randomNumber) {
        message.innerText = "המספר גבוה מידי";
    } else if (userGuess < randomNumber) {
        message.innerText = "המספר נמוך מידי";
    } else {
        message.innerText = "צדקת";
        guessInput.disabled = true;
    }

    guessInput.value = '';
});