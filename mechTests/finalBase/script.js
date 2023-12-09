// script.js - Main script for handling mouse movement and scene management

let activeScene = ''; 
let currentLineIndex = 0;
let lastX = 0, lastY = 0;
let totalDistance = 0;
let stillTime = 0;
const MAX_VISIBLE_DIVS = 5;
let divCount = 0;
let divs = [];
let displayedTextArrays = [];
let displayedWinBoxes = [];
let activeWinBoxes = {};
let winBoxInteractionTime = {};


function loadScene(sceneName, sceneSet) {
    const scene = sceneSet[sceneName];
    if (scene) {
        activeScene = sceneName;
        typeLinesFromArray(scene.text, sceneName, () => {
            if (scene.nextScene) {
                const nextSceneName = scene.nextScene();
                if (nextSceneName) {
                    loadScene(nextSceneName, sceneSet);
                }
            }
        });
    }
}

document.addEventListener("mousemove", (event) => {
    handleMouseMove(event);
    if (totalDistance > 5000 && activeScene === '') {
        let startSceneSet = determineStartSceneSet(); 
        loadScene('intro', startSceneSet); // Ensure 'intro' is defined in both scene sets
    }
});


function handleMouseMove(event) {
    const deltaX = event.clientX - lastX;
    const deltaY = event.clientY - lastY;
    totalDistance += Math.sqrt(deltaX ** 2 + deltaY ** 2);
    lastX = event.clientX;
    lastY = event.clientY;
    stillTime = 0;
}



// Function to type lines from a given array
function typeLinesFromArray(linesArray, arrayIdentifier, onComplete) {
    if (currentLineIndex < linesArray.length) {
        const text = linesArray[currentLineIndex];
        const newDiv = createNewTextElement(text, 50, 50 + currentLineIndex * 40);
        divCount++;
        typeWriter(newDiv, text, 50, () => {
            currentLineIndex++;
            typeLinesFromArray(linesArray, arrayIdentifier, onComplete);
        });
    } else {
        currentLineIndex = 0;
        displayedTextArrays.push(arrayIdentifier);
        if (onComplete) onComplete();
    }
}

// Creates a new text element for typing
function createNewTextElement(text, x, y) {
    const newElement = document.createElement('div');
    newElement.className = 'text-element';
    newElement.style.left = `${x}px`;
    newElement.style.top = `${y}px`;
    newElement.style.opacity = 1;
    document.getElementById('container').appendChild(newElement);
    divs.push(newElement);
    return newElement;
}

// Typing effect implementation for each character in the text
async function typeWriter(element, text, typingSpeed, onComplete) {
    for (let i = 0; i < text.length; i++) {
        element.textContent += text.charAt(i);
        await sleep(1000 / typingSpeed);
    }
    setTimeout(onComplete, 1000); // Delay before moving to the next line
}

// Helper function to delay execution (used in typing effect)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Gradually fades out an element over time, then removes it
function fadeOutElement(element) {
    let opacity = parseFloat(element.style.opacity);
    if (opacity > 0) {
        element.style.opacity = opacity - 0.1;
        setTimeout(() => fadeOutElement(element), 100);
    } else {
        element.parentNode.removeChild(element);
        divs.shift();
        divCount--;
    }
}




function determineStartSceneSet() {
    // Example condition: randomly choose between scenes and scenes2
    return Math.random() < 0.5 ? scenes : scenes2;
}

// Implement the remaining functions (typeLinesFromArray, createNewTextElement, typeWriter, fadeOutElement)
