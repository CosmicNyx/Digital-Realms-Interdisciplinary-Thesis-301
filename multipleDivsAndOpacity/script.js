
document.addEventListener("mousemove", () => {
    const response = getRandomResponse(responses.mouseMove);
    displayNewText(response, 50); // Adjust typing speed as needed
});

document.addEventListener("click", () => {
    const response = getRandomResponse(responses.mouseClick);
    displayNewText(response, 50); // speed
});

function getRandomResponse(responsesArray) {
    const randomIndex = Math.floor(Math.random() * responsesArray.length);
    return responsesArray[randomIndex];
}

function createNewTextElement(x, y) {
    const newElement = document.createElement('div');
    newElement.className = 'text-element';
    newElement.style.opacity = 0; // opacity
    document.getElementById('container').appendChild(newElement);
    setLocation(newElement, x, y);
    return newElement;
}

async function displayNewText(text, typingSpeed) {
    const x = Math.floor(Math.random() * (window.innerWidth - 200)); // Random x
    const y = Math.floor(Math.random() * (window.innerHeight - 50)); // Random y

    // Decrease opacity 
    const textElements = document.querySelectorAll('.text-element');
    textElements.forEach(element => {
        element.style.opacity = parseFloat(element.style.opacity) - 0.1; // opacity
    });

    const newTextElement = createNewTextElement(x, y);
    await fadeInElement(newTextElement, 100); // Fade in 
    await typeWriter(newTextElement, text, typingSpeed); // typing effect to new text
}

function setLocation(element, x, y) {
    element.style.position = 'absolute';
    element.style.top = y + 'px';
    element.style.left = x + 'px';
}

async function fadeInElement(element, duration) {
    const start = performance.now();
    while (performance.now() - start < duration) {
        element.style.opacity = (performance.now() - start) / duration;
        await sleep(10);
    }
    element.style.opacity = 1;
}

async function typeWriter(element, text, typingSpeed) {
    for (let i = 0; i < text.length; i++) {
        element.textContent += text.charAt(i);
        await sleep(1000 / typingSpeed);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}