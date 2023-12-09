// nextArrayControl.js: Script for determining the next array to display or WinBox to show

// Function to decide the next action based on the application's state
function determineNextArray() {
    // Check if 'introLines' have been displayed and 'winBox1' is not shown
    if (displayedTextArrays.includes('introLines') && !displayedWinBoxes.includes('winBox1')) {
        //showWinBox('winBox1')
        typeLinesFromArray(mouseNearLines, 'mouseNearLines');
    }
    // Check if 'winBox1' is shown and 'mouseNearLines' have not been displayed
    else if (displayedWinBoxes.includes('winBox1') && !displayedTextArrays.includes('mouseNearLines')) {
        typeLinesFromArray(mouseNearLines, 'mouseNearLines');
    }
}


