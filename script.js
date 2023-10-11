
// Function to simulate the typewriter effect for a given text and element
function typeWriter(element, text, delay = 50, index = 0) {
    if (index < text.length) {
        // Append one character at a time to the target element
        element.textContent += text.charAt(index);
        index++;
        // Call the function recursively with a delay to type the next character
        setTimeout(() => typeWriter(element, text, delay, index), delay);
    }
}

// Function to display text with a typewriter effect after a specified delay and set its location
function displayText(element, text, delay, setLocation) {
    // Set a timeout to start the typewriter effect after the specified delay
    setTimeout(() => {
        // Call the typewriter function
        typeWriter(element, text);
        // Set the location using the provided setLocation function
        setLocation(element);
    }, delay);
}

// Function to set the location of text at a specific position (x, y)
function setLocation(element, x, y) {
    element.style.position = 'absolute';
    element.style.top = y + 'px';
    element.style.left = x + 'px';
}

// Get the HTML elements by their IDs
const entitySpeechElement = document.getElementById('entitySpeech');
const additionalTextElement = document.getElementById('additionalText');
const otherTextElement = document.getElementById('otherText');

// Display text with typewriter effect after specific delays and set their individual locations
displayText(entitySpeechElement, textData.greeting, 1000, (element) => setLocation(element, 50, 100));
displayText(additionalTextElement, textData.additionalText, 5000, (element) => setLocation(element, 200, 300));
displayText(otherTextElement, textData.otherText, 10000, (element) => setLocation(element, 350, 500));
