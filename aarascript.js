function personalizeMessage() {
    const name = document.getElementById('nameInput').value;
    const message = document.getElementById('personalMessage');
    
    if (name.trim() === '') {
        message.textContent = "Please enter your name to get a personalized message!";
        message.style.color = 'red';
    } else {
        message.textContent = `Happy 11 beautiful, ${name}! 🎉🎂🎈`;
        message.style.color = '#4caf50';
    }
}
