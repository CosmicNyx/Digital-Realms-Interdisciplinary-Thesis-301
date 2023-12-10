

const textElement = document.getElementById('textElement');
let currentIndex = 0;

function typeWriter(element, text, delay = 50, index = 0) {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(() => typeWriter(element, text, delay, index), delay);
    }
}

function displayNextText() {
    if (currentIndex < textData.length) {
        const text = textData[currentIndex];
        typeWriter(textElement, text.content, text.delay);
        currentIndex++;
    }
}

// Start displaying text
displayNextText();
