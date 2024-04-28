# Digital Realms Interdisciplinary Thesis

Welcome to the repository for the Digital Realms Interdisciplinary Thesis. This project delves into the integration of technological determinism and digital sociology to craft an immersive web experience that actively responds to and anticipates user actions. The aim is to foster a deeper understanding of the complex relationship between technology and human behavior.

## Repository Structure

- **`essay.pdf`:** Contains the foundational essay that outlines the theoretical background of this project.
- **`devLog.md`:** A detailed development log documenting the thought processes, challenges, and iterations encountered throughout the development of the thesis.
- **`toolkit/`:** Includes a collection of scripts and tools developed for the project, designed for reusability and further development.

## Project Overview

Starting with a focus on technological determinism, this thesis evolved to include a rich blend of digital sociology and computational modeling. The goal is to create a web experience where users can engage with content in a meaningful and resonant way.

## Getting Started

To get started with this project:
1. Clone the repository.
2. Navigate to the `toolkit/` directory.
3. Open `index.html` from each test folder in your browser to launch the web experience.

## Toolkit Overview

The `toolkit/` directory contains a variety of interactive mechanics initially planned for the final output of the project "A Love Message". These tools are in the prototype stage and may contain bugs, intended mainly for testing and demonstration purposes.

### Toolkit Contents Index

Navigate quickly to the detailed descriptions of each toolkit component:

- [Drawing Images](#drawingimages)
- [Interactive Narrative Engine](#interactivenarrativeengine)
- [Dynamic Text Display](#dynamictextdisplay)
- [Dynamic UIManager](#dynamicuimanager)
- [Typewriter Text Effects](#typewritertexteffects)
- [Scenario Management](#scenariomanagement)

### Folder Descriptions

#### `drawingImages/`

This script is responsible for dynamically displaying images on the web page at random locations upon user interaction. Here’s how it functions:

- **Initialization on DOM Load:** The script only executes once the entire HTML document is fully loaded, ensuring all elements are available for manipulation.
- **Image Array:** A predefined array contains the filenames of the images to be displayed. This array can be customized to include any number of images.
- **Random Image Display:** When a user clicks anywhere on the page, the script randomly selects an image from the array and displays it at a random position within the viewport.
- **Image Placement:** Each new image is placed at a calculated random position that considers the viewport dimensions to ensure it remains visible.
- **Modular Functions:**
  - `getRandomImage()`: Selects a random image from the specified array.
  - `createNewImageElement()`: Creates a new `<img>` element, sets its source, and appends it to a specified container.
  - `setLocation()`: Positions an element absolutely within the browser window at coordinates `(x, y)`.

#### Usage

To integrate this script:
1. Ensure that you have a div element with the id `container` in your HTML where the images will be appended.
2. Modify the `imagesArray` with the paths to the images you want to use.
3. Include this script in your HTML to enable dynamic image placement on user clicks.

This tool is particularly useful for interactive art installations, dynamic galleries, or any project requiring a playful, engaging visual element.

#### `InteractiveNarrativeEngine/`

The `InteractiveNarrativeEngine` folder contains scripts that collectively handle the dynamic presentation of narrative content based on user interactions. This engine is designed to manage scenes, handle mouse movements, and display text with interactive effects, enhancing the immersive experience of the web platform.

##### Core Functionality

- **Scene Management:** Dynamically loads and transitions between different scenes based on user actions or predefined conditions.
- **Mouse Movement Tracking:** Measures the total distance of mouse movement to trigger scene starts or changes, enhancing interaction responsiveness.
- **Text Display and Effects:** Implements a typewriter effect for displaying narrative text, creating a more engaging and visually appealing user experience.
- **Element Management:** Manages the creation and removal of text elements on the page, including handling their opacity and ensuring that the number of visible divs does not exceed a set limit.

##### Components

- **`script.js`:** The main script that integrates mouse movement tracking with scene management and text display mechanics. It orchestrates the overall flow of the narrative experience.
- **`scenesText.js`:** Contains the text arrays for different scenes, serving as a repository for narrative content that can be dynamically loaded by the main script.
- **`eventsLogic.js`:** Manages the logic for scene transitions and the conditions under which different scenes are triggered.

##### Usage

To integrate the `InteractiveNarrativeEngine` into your project:
1. Include the folder in your project directory.
2. Ensure the `container` div is present in your HTML to hold the narrative elements.
3. Link the scripts from this folder in your HTML files where the narrative engine is needed.

This toolkit is particularly useful for developers looking to create interactive storytelling experiences, educational content, or any web-based application requiring dynamic text interactions and scene management.

#### `DynamicTextDisplay/`

The `DynamicTextDisplay` folder contains scripts that manage the dynamic display and interaction of text elements based on user mouse movements and clicks. These scripts enhance the interactivity of the web experience by responding in real-time to user actions.

##### Core Functionality

- **Event Response:** Captures mouse movements and clicks to trigger textual responses, creating an interactive user experience.
- **Dynamic Text Placement:** Places new text elements at random positions on the screen, ensuring variability and engagement.
- **Opacity Management:** Manages the opacity of text elements, gradually decreasing the visibility of older texts to maintain readability and focus on newer messages.
- **Text Animation:** Implements a typewriter effect for new text elements, simulating the live typing of responses.

##### Components

- **Event Listeners:** Set up to detect mouse movements and clicks, invoking functions to handle these events.
- **Text Generation:** Utilizes a set of predefined responses to simulate conversation or interaction cues.
- **Element Styling and Animation:** Controls the appearance and behavior of text elements, including their initial opacity, positioning, and the animation of text content.

##### Usage

To integrate the `DynamicTextDisplay` engine into your project:
1. Include the folder in your project directory.
2. Ensure there is a `container` div in your HTML to host the text elements.
3. Link the scripts from this folder in your HTML files where interactive text display is needed.

This toolkit is particularly useful for projects requiring enhanced user engagement, such as interactive educational platforms, web-based games, or any application where user interaction prompts a textual response.

##### Example of Text Responses

- **On Mouse Move:** "I see you moving your mouse! How can I assist you?" or "Your mouse is on the move. Anything specific you're looking for?"
- **On Click:** "A click, an action! How can I help you with this?" or "Mouse click detected! Let me know what you need."

#### `DynamicUIManager/`

The `DynamicUIManager` folder contains scripts essential for creating a dynamic user interface that responds to mouse movements, manages multiple display elements, and handles interactive window boxes. This suite of tools is ideal for web applications requiring highly interactive elements and real-time user engagement.

##### Core Functionality

- **Mouse Tracking:** Tracks mouse movement across the web application to initiate interactions or trigger animations based on user behavior.
- **Dynamic Typing Effect:** Manages the display of text with a typewriter effect, enhancing the engagement and visual appeal of text presentations.
- **Div Management:** Controls the creation, display, and removal of text divs, ensuring the user interface remains uncluttered despite continuous new content generation.
- **WinBox Management:** Integrates and controls WinBoxes, which are draggable and resizable windows for displaying content or interactive elements.

##### Components

- **`mainScript.js`:** The backbone script that coordinates the mouse tracking, typing effect, div management, and integration of WinBoxes. It includes logic for initializing interactions based on user movement and managing the lifecycle of text elements and window boxes.
- **`typingEffect.js`:** Dedicated to implementing the typing effect for dynamically added text elements, simulating real-time typing.
- **`divManager.js`:** Handles the creation and animation of div elements, including fading out old divs to make room for new content.
- **`winBoxController.js`:** Manages the creation, display, and interaction of WinBoxes, providing tools for handling multiple active windows and their content dynamically.

##### Usage

To integrate the `DynamicUIManager` into your project:
1. Include the folder in your project directory.
2. Ensure the `container` div is present in your HTML to house dynamic text elements.
3. Add references to the scripts in your HTML files where you need dynamic user interface management.
4. Configure and customize the scripts to match the specific interaction patterns and content display needs of your application.

This toolkit is particularly suited for interactive educational platforms, complex web applications needing real-time user interaction, and projects where dynamic content generation and management are crucial.

##### Example Configuration

- **Mouse Movement Interaction:** Initiates text typing when the mouse has moved a certain distance, introducing users to interactive elements.
- **Dynamic Text and Window Management:** Creates and manages multiple text divs and interactive WinBoxes based on user actions, enhancing the user experience by providing information and interactive elements responsively.

#### `TypewriterTextEffects/`

The `TypewriterTextEffects` folder contains scripts that manage the display of text elements with a typewriter effect, allowing for dynamic and engaging text animations. These scripts are particularly useful for creating interactive experiences where text appears incrementally to capture the user's attention.

##### Core Functionality

- **Typewriter Effect:** Simulates the sequential typing of text into HTML elements, adding a visual appeal and mimicking human typing.
- **Delayed Display:** Incorporates timing control to manage when text starts appearing on the screen, allowing synchronization with other page elements or user interactions.
- **Positioning:** Dynamically sets the position of text elements on the page, providing flexibility in layout design and enhancing the visual hierarchy of information.

##### Components

- **`textData.js`:** Stores predefined text strings in a structured format, making it easy to manage and update the text used across different parts of the application.
- **`typewriterFunctions.js`:** Contains all the functions needed to implement the typewriter effect, manage timing, and position text elements.
- **`displayTextManager.js`:** Coordinates the display of various text elements, utilizing the typewriter effect and ensuring text appears at the right time and place.

##### Usage

To use the `TypewriterTextEffects` in your project:
1. Include the folder in your project directory.
2. Ensure the HTML contains elements with specific IDs corresponding to the ones referenced in the scripts (e.g., 'entitySpeech', 'additionalText', 'otherText').
3. Link the scripts in your HTML files where dynamic text display is required.
4. Customize the text data and positioning as needed for your specific use case.

This toolkit is ideal for projects requiring a narrative element where text needs to engage the user, such as interactive stories, educational tools, or any application where text plays a central role in user interaction.

##### Example Configuration

- **Initial Greeting:** Displays a greeting message with a typewriter effect at a designated location on the page, after a brief delay, setting the stage for further interactions.
- **Additional Information:** Sequentially displays more detailed text, increasing the depth of information presented as the user engages with the content.
- **Dynamic Positioning:** Each piece of text can appear at different locations on the screen, enhancing the design and user focus on new elements as they appear.

#### `ScenarioManagement/`

The `ScenarioManagement` folder is a work-in-progress (WIP) collection of JSON files and a JavaScript script, designed to handle various narrative scenarios in an interactive application. This setup allows for dynamic content delivery based on user interactions.

##### Overview of Contents

- **`intro.json`:** Contains the initial dialogue or prompts presented to the user, setting the stage for further interaction.
  - Example Text: "Oh, hello! Do you know where we are?"

- **`yesScenario.json`:** Manages the content displayed when the user responds affirmatively to a prompt.
  - Example Text: "You chose 'Yes'. This is the 'Yes' scenario."

- **`noScenario.json`:** Manages the content for a negative response from the user, directing the flow of interaction accordingly.
  - Example Text: "You chose 'No'. This is the 'No' scenario."

- **`script.js`:** (Not directly accessible) Presumably contains the logic for loading and displaying the scenario texts based on user interactions, possibly implementing interactive features like conditional navigation and dynamic text effects.

- **`textData.js`:** (Not directly accessible) Likely contains additional predefined text data used across various parts of the application, supporting the dynamic text display functionality.

##### Purpose and Usage

The primary purpose of this folder is to organize and streamline the management of different interactive scenarios within the application. It provides a clear and easy way to update narrative content without altering the core application logic, making it ideal for projects that require flexibility in content presentation and narrative branching.

##### Current Status and Future Plans

As a work-in-progress, future updates may include:

- Enhancements to the scenario handling logic to support more complex user decisions and interactions.
- Expansion of the scenario files to encompass a wider range of responses and outcomes.
- Integration of additional multimedia elements to enrich the user experience.
- Further optimization and refactoring of the JavaScript logic to improve performance and maintainability.

##### Integration Tips

To integrate the `ScenarioManagement` toolkit into your project:
1. Ensure each JSON file is correctly linked within your project's main JavaScript files.
2. Utilize the scenario data to conditionally render text and manage flow based on user inputs.
3. Test different scenarios to ensure that transitions and text displays are functioning as expected.

This setup is particularly suited for interactive storytelling applications, educational tools, or any web-based platform where user choices dictate subsequent content and outcomes.

#### Application in Small Designation Project

A few of these mechanics were later implemented in a small designation project, allowing for further refinement and demonstrating their utility in different contexts. Details on the specific mechanics used and their impacts can be found in the `project_cases/` directory.


##### Known Issues

- Some mechanics in the toolkit are known to have bugs and may not perform consistently across all browsers.
- Documentation for each tool is in progress and may not fully describe all features and usage scenarios.

##### Future Plans

Future updates will focus on resolving existing issues, refining functionality, and expanding the toolkit based on user feedback and ongoing research in digital interactions.


