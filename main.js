'use strict';

const inputText = document.querySelector('input');
const paragraph = document.querySelector('p');

inputText.addEventListener('input', () => {
    setTimeout(() => {
        paragraph.textContent = inputText.value;
    }, 300);
});
