// Main script for handling mouse movement, typing effect, div management, and WinBoxes

// Global variables for typing and mouse tracking
let currentLineIndex = 0; // Index to keep track of the current line being typed
let lastX = 0, lastY = 0; // Variables to store the last mouse position
let totalDistance = 0; // Total distance the mouse has moved
let stillTime = 0; // Time for which the mouse has been still
const MAX_VISIBLE_DIVS = 5; // Maximum number of divs before fading starts
let divCount = 0; // Counter for the current number of divs
let divs = []; // Array to keep track of created div elements
let displayedTextArrays = []; // Array to keep track of displayed text arrays
let displayedWinBoxes = []; // Array to keep track of displayed WinBoxes
let activeWinBoxes = {}; // Object to keep track of active WinBoxes

// Event listener for mouse movement
document.addEventListener("mousemove", (event) => {
    handleMouseMove(event);
    // Start typing introLines if mouse moves enough and they haven't been shown
    if (totalDistance > 5000 && !displayedTextArrays.includes('introLines')) {
        typeLinesFromArray(introLines, 'introLines');
    }
});

// Function to handle mouse movement, updating total distance and resetting still time
function handleMouseMove(event) {
    const deltaX = event.clientX - lastX;
    const deltaY = event.clientY - lastY;
    totalDistance += Math.sqrt(deltaX ** 2 + deltaY ** 2); // Update total distance
    lastX = event.clientX; // Update last X position
    lastY = event.clientY; // Update last Y position
    stillTime = 0; // Reset still time on movement
}

// Interval to increment still time
setInterval(() => {
    stillTime += 100; // Increment still time
    // Additional logic for when the mouse is still can be implemented here
}, 100);

// Function to type lines from a given array
function typeLinesFromArray(linesArray, arrayIdentifier) {
    if (currentLineIndex < linesArray.length) {
        // Start fading out oldest div if max visible divs reached
        if (divCount >= MAX_VISIBLE_DIVS) {
            fadeOutElement(divs[0]); // Fade the oldest div
        }
        const text = linesArray[currentLineIndex];
        const newDiv = createNewTextElement(text, 50, 50 + currentLineIndex * 40);
        divCount++;
        typeWriter(newDiv, text, 50, () => {
            currentLineIndex++;
            typeLinesFromArray(linesArray, arrayIdentifier); // Continue typing next line
        });
    } else {
        currentLineIndex = 0; // Reset index after typing all lines
        displayedTextArrays.push(arrayIdentifier); // Mark this array as displayed
        determineNextArray(); // Determine what to do next
    }
}

// Creates a new text element for typing
function createNewTextElement(text, x, y) {
    const newElement = document.createElement('div');
    newElement.className = 'text-element'; // Class for styling
    newElement.style.left = x + 'px'; // Positioning
    newElement.style.top = y + 'px';
    newElement.style.opacity = 1; // Start fully visible
    document.getElementById('container').appendChild(newElement); // Add to container
    divs.push(newElement); // Keep track of this new div
    return newElement;
}

// Typing effect implementation for each character in the text
async function typeWriter(element, text, typingSpeed, onComplete) {
    element.style.opacity = 1; // Ensure visibility during typing
    for (let i = 0; i < text.length; i++) {
        element.textContent += text.charAt(i); // Add each character one by one
        await sleep(1000 / typingSpeed); // Delay to create typing effect
    }
    if (onComplete) onComplete(); // Callback after typing is complete
}

// Helper function to delay execution for a specified time (used in typing effect)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Gradually fades out an element over time, then removes it
function fadeOutElement(element) {
    let opacity = parseFloat(element.style.opacity);
    if (opacity > 0) {
        element.style.opacity = opacity - 0.1; // Decrease opacity
    } else {
        removeDiv(element); // Remove div once fully transparent
    }
}

// Function to remove a div element from the DOM and from tracking
function removeDiv(divElement) {
    divElement.parentNode.removeChild(divElement); // Remove from DOM
    divs.shift(); // Remove the oldest div from tracking
    divCount--; // Decrement div counter
}

//----- WinBox management functions


// Function to show and track a WinBox
function showWinBox(winBoxIdentifier) {
    let title, width, height;

    // Determine configuration based on the identifier
    if (winBoxIdentifier === 'winBox1') {
        title = "First WinBox";
        width = "400px";
        height = "300px";
    }
    // Add more conditions for different WinBoxes here

    // Create and configure the WinBox
    const newWinBox = new WinBox({
        title: title,
        width: width,
        height: height,
        // ... other configurations ...
    });

    displayedWinBoxes.push(winBoxIdentifier);
    activeWinBoxes[winBoxIdentifier] = newWinBox;

    // Handle the closure of WinBox
    newWinBox.onclose = () => {
        closeWinBox(winBoxIdentifier);
    };
}

// Function to create the portal WinBox
function createPortalWinBox() {
    let portalContent = document.createElement("div");

    // Generate links for each WinBox in displayedWinBoxes
    displayedWinBoxes.forEach(winBoxIdentifier => {
        let link = document.createElement("a");
        link.textContent = "Open " + winBoxIdentifier;
        link.href = "#";
        link.onclick = () => {
            activeWinBoxes[winBoxIdentifier].focus(); // Focus the WinBox
            return false;
        };
        portalContent.appendChild(link);
        portalContent.appendChild(document.createElement("br"));
    });

    // Create the portal WinBox
    new WinBox("Portal", {
        mount: portalContent,
        // ... other configurations ...
    });
}

// ----------------------------




// Create and configure the WinBox
const newWinBox = new WinBox({
    title: title,
    width: width,
    height: height,
    // ... other configurations ...
});

// Track the displayed WinBox
displayedWinBoxes.push(winBoxIdentifier);
activeWinBoxes[winBoxIdentifier] = newWinBox;

// Optional: Setup onclose event handler to update state
newWinBox.onclose = () => {
    closeWinBox(winBoxIdentifier);
};


// Closes a specific WinBox and updates tracking
function closeWinBox(winBoxIdentifier) {
    if (activeWinBoxes[winBoxIdentifier]) {
        activeWinBoxes[winBoxIdentifier].close(); // Close the WinBox
        delete activeWinBoxes[winBoxIdentifier]; // Remove from active WinBoxes
    }
}

// Closes all WinBoxes
function closeAllWinBoxes() {
    for (let id in activeWinBoxes) {
        activeWinBoxes[id].close(); // Close each WinBox
        delete activeWinBoxes[id]; // Remove from active WinBoxes
    }
}

