// Define the text data to be displayed
const textData = {
    'greeting': "Hello, I am the talking entity.",
    'additionalText': "This is additional text that appears later.",
    'otherText': "This is another kind of text."
    // Add more text data as needed
};

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

// Function to display text with a typewriter effect after a specified delay
function displayText(element, text, delay) {
    // Set a timeout to start the typewriter effect after the specified delay
    setTimeout(() => typeWriter(element, text), delay);
}

/* Commented out image-related code
// Function to draw images on the page and control their position
function drawImage(src, x, y) {
    const img = new Image();
    img.src = src;
    img.style.position = 'absolute';
    img.style.top = y + 'px';
    img.style.left = x + 'px';
    document.getElementById('images-container').appendChild(img);
}

// Draw images with specified positions
drawImage('image1.jpg', 100, 200);
drawImage('image2.jpg', 300, 400);
// Add more images as needed with their respective positions
*/

// Get the HTML elements by their IDs
const entitySpeechElement = document.getElementById('entitySpeech');
const additionalTextElement = document.getElementById('additionalText');
const otherTextElement = document.getElementById('otherText');

// Display text with typewriter effect after specific delays
displayText(entitySpeechElement, textData.greeting, 1000);
displayText(additionalTextElement, textData.additionalText, 5000);
displayText(otherTextElement, textData.otherText, 10000);
