// eventsLogic.js - Manages scenes and scene transitions

const scenes = {
    // Define the first set of scenes
    'intro': {
        text: ["Intro text for first set."],
        nextScene: () => 'nextSceneKey1'
    },
    'nextSceneKey1': {
        text: ["First set, next scene."],
        nextScene: () => 'anotherSceneKey'
    }
   
};

const scenes2 = {
    // Define the second set of scenes
    'intro': {
        text: ["Intro text for second set."],
        nextScene: () => 'nextSceneKey2'
    },
    'nextSceneKey2': {
        text: ["Second set, next scene."],
        nextScene: () => 'anotherSceneKey2'
    }
   
};


