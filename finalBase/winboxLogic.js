// winBoxes.js - Manages WinBox creation and interactions

function showWinBox(winBoxIdentifier) {
    // Logic to create and show a WinBox
    // Example:
    const newWinBox = new WinBox({
        title: "Example WinBox",
        // ... other configurations ...
    });

    displayedWinBoxes.push(winBoxIdentifier);
    activeWinBoxes[winBoxIdentifier] = newWinBox;

    newWinBox.onclose = () => {
        closeWinBox(winBoxIdentifier);
    };
}

function closeWinBox(winBoxIdentifier) {
    // Logic to handle closing a WinBox
    if (activeWinBoxes[winBoxIdentifier]) {
        activeWinBoxes[winBoxIdentifier].close();
        delete activeWinBoxes[winBoxIdentifier];
    }
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
    });
}