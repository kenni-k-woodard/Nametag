// grab DOM elements

// set event listeners
console.log('hey there');
const nameDisplay = document.getElementById('name-display');
const updateBtn = document.getElementById('updateBtn');
const nameInput = document.getElementById('nameInput');

updateBtn.addEventListener('click', () => {
    const nameInput = document.getElementById('nameInput');

    nameDisplay.textContent = nameInput.value;
})


