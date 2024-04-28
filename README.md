The first thing that came to mind for what to do for a thesis was to create it using JavaScript to make a web experience. I thought about focusing on technological determinism, and I went from there.

I will be sharing my ideas and process while working on my thesis, including my thought process and the challenges that I faced.

# Starting out

I already had a research topic in mind when I applied to take thesis. Rather than many others who had planned what they were gonna make, all I knew was that I wanted to use JavaScript and make something web-related along with my research topic. Walking in, I thought all I had to look into was new JS functions and research about technological determinism.

My research objective was

- Investigate predictive analysis of human behaviour in web-based environments.
- Combine computational modelling with technological determinism.
- Grasp how technology and human actions influence each other.


I presented my thesis idea and got a lot of feedback that I took into account. A couple of stuff that I decided to keep in mind while working on this thesis was 

- whos research am I basing my thesis on
- to look into social media sites
- what is the experience on the website
- what do I want it to be
- how do people respond to it
- How I imagine the user

I also had to understand what exactly I wanted to do with my project. At the start, I still did not have the full picture in my head but I hoped that with more research I'll know what to make.

# Developing the Research Question

I started to research technological determinism in general. Where the theory came from and the many theories regarding it.

However, I realized that instead of trying to make a web experience based on solely teaching the user about technological determinism. I wanted to make an experience that made people feel something. the main purpose of this is that I wanted to explore how to make a piece meaningful. Where the user can discover the deeper meaning behind the work. I want them to feel like the work is interacting with them.

**Thesis question reprised**

*How can the principles of technological determinism and insights from digital sociology be leveraged to develop an immersive web experience that anticipates and responds to user actions?*

I started to properly reference the game that made me come up with this web experience idea

#

***The Beginners Guide by Davey Wreden***

This is an environmental narrative walking simulator game on paper, however, the meta-narrative and the immersiveness in this game meant a lot to me. The character Davey acts as the narrator, showing you different games created by his friend Coda. he leads you through environments and sometimes breaks the game to let you pass through to the next stage. It feels like Davey is speaking to the player. I mean he is but it felt so life-like. It's hard to describe how I felt during the one-and-a-half-hour experience but I know it changed the way I saw game development and what it means to create things for yourself and no one else. It's a story I plan to go through again.

This game is what I had in the back of my mind when I was thinking about my thesis, but I tried to focus on just the educational part to where I lost track of what I wanted to do. I did enjoy researching technological determinism but I had to keep that out of my mind when thinking about a general outline of the experience.


# More Research

I looked into different theories of technological determinism and got a new understanding of it. For the Proof of Concept presentation, I shared my research rather than an update on my web experience.

**Thesis Question reprised again**

*How can the convergence of technological determinism, digital sociology, and individual agency be used to create an immersive web experience that actively anticipates and responds to user actions, fostering a deeper understanding of the complex relationship between people and digital technologies?*

I shared three articles that I found interesting and shared the game inspiration that helped me get a vague idea of what I wanted to do, But I decided to look at it properly as a reference. I already spoke about The Beginners Guide earlier but now I explained it to my class. Another thing that I wanted to make clear to myself is that I want to focus on determinism, not just technological determinism, and how I wanted the website itself to be an entity. The things I decided would be the significance of my thesis are as follows:

- **Innovative Technological Exploration**: This project investigates the relationship between technological determinism, digital sociology, and human agency. It enhances interactive digital experiences by exploring this convergence, opening up options for user involvement and storytelling.
- **Critical Societal Reflection**: This project serves as a means of initiating important societal discussions. It challenges conventional assumptions by questioning the boundaries between technology, free will, and human agency, allowing greater understanding and shifting perceptions of the digital influence in our lives.
- **Educational and Creative Fusion**: It serves as an educational model, translating complex theories into interactive experiences. Simultaneously, it represents a creative fusion of technology, art, and philosophy, empowering users and prompting critical reflection.

I got a lot of great feedback during this presentation that helped me keep on track while working. My classmates liked the idea of ethical decision-making and the meta-narrative through the AI. People commented on how this seemed personal and that I could use that while working on a narrative. The visual aspect that I painted intrigued people and I was told to look more into UX/UI so I could make sure things worked in a way that makes sense and something that fits with my vision.

I was also given some feedback and questions that made me realize things that I needed to think about. One question made me take a step back

> *"Is there a specific societal issue you will be focusing on? Is there a particular story you wanted to share through the website? Or are you more focused on the platform building to discuss these issues, and just using loreum ipsum as placeholders?"*




# Mechanics testing

I made two mechanics that I want to include in the web exp (what imma call it from now). I made a typewriter function for divs that are called in JavaScript, however, these divs were already written down in HTML. The one main thing I'm trying to focus on in this program is efficiency and have it as clean as possible, meaning I want the HTML to be as minimal as possible. I dont want to have to note down every single div for every text that I want in a specific location. For right now this works though.


I made a container with three div classes

```html
<body>
    <div class="background"></div>
    <div class="container">
        <div class="entity-speech" id="entitySpeech"></div>
        <div class="additional-text" id="additionalText"></div>
        <div class="other-text" id="otherText"></div>
    </div>
    
    <script src="textData.js"></script>
    <script src="script.js"></script>
</body>
```

And in JS I separately called them and then used the displayText function which allows me to set how long until I want in to type onto the screen and lets me set the exact location of each div

```javascript
const entitySpeechElement = document.getElementById('entitySpeech');
const additionalTextElement = document.getElementById('additionalText');
const otherTextElement = document.getElementById('otherText');

// Display text with typewriter effect after specific delays and set their individual locations
displayText(entitySpeechElement, textData.greeting, 1000, (element) => setLocation(element, 50, 100));
displayText(additionalTextElement, textData.additionalText, 5000, (element) => setLocation(element, 200, 300));
displayText(otherTextElement, textData.otherText, 10000, (element) => setLocation(element, 350, 500));
```

But this would turn very messy. I would have to call on each line of text and then calculate and change the timings for each div, and if later I change a timing for a div I would have to go back and change all the other divs as well. This would take too long and there are better ways to do this. I at least figured out a good typewriter function.

#

I want multiple divs to appear on the screen when the "AI" is talking. Some in a random position and some in specific locations. I want to be able to have control over everything in an easy way to simply put the narrative in arrays and with minimal setting up, then the web exp will be set.

Another thing that I wanted for the AI was to make it seem chaotic, I want text to pile up on screen to make it seem messy, along with the windows on thepage that the user wont be able to delete. I made it so that every time a new div appears on screen, all the previous divs on the screen will lower on opacity. This was so the newer text would still be readable. I made two functions where when the mouse in moved and clicked, divs will appear on screen. The location of all the divs is at random which was easy to implement, however, I couldn't find a way to make the divs appear in a specific spot. I noted down that I could try listing the location along with the text in an array. I will test that out later

![image](https://github.com/CosmicNyx/Digital-Realms-Interdisciplinary-Thesis-301/assets/54959623/ada5bc16-9fb0-4b2c-a977-ad90a19596cb)

#

**FeedBack**

I presented these two mechanics and got some good feedback. I also got suggestions for what I should include or what to think more about

- What does this say about presentation in websites and ui?
- How is the sketch engaging?
- What do u think it means? feels? How does it seem relevant to the experience?
- Text close to the mouse 
- Look into computer glitches. see if I want to include that
- Windows 95 as aesthetic ref
- Have a specific num of divs on the page, then start lowering the old divs in opacity
- Create hidden messages in code and console




# More Feedback

I had a meeting with Adam Tindale. I shared what I had so far and discussed my plans on what to work on. The meeting was incredibly helpful and provided a lot of insight. I explained what I had so far and my ideas for what I had to work on. I received feedback on what to do and what to change.

- Instead of keeping all the text in separate JavaScript files, look into using JSON instead
- Use media tags, modern web tools, audio - web using audio with text or no text
- Find a way for the user to intake the experience the way it's not supposed to
- Interact as a game designer and not through the story with user
- A way to go through this multiple times. The code will be the same but could be a different experience. Almost like a game engine
- Have different mechanics/actions for different events in the story
- Do proper world and character-building. Why does this AI exist? What's going on? Think of the story behind the scenes. Solidify the entity
- What kinda story is this? Perhaps a warning parable distopic?
- match techniques to whats happening on screen
    - typing = clarity
    - random typing/location of div = dysfunction
- Player needs to feel confused, have a choice made,,, 
- Make story beats
- Have the user feel change, a sense of change. Mimic the feeling in website mechanics

# Finalizing narrative concept and plan

I decided that the main concept of the experience will be that the user is being led through a digital archive filled with information about technological determinism and such. The user will be led by one of 4 entities that will provide a different experience. I had fun making them.

- Echo
    - Personality Traits:
        - Reflective: Echo mirrors user actions and words, creating a sense of familiarity.
        - Resonant: Its presence grows stronger with interaction, much like an echo building in intensity.
        - Elusive: Never fully understood, Echo always seems to be just out of reach, encouraging the user to chase the experience.
    - Tone of Voice:
        - Repeating: Often reiterates what the user inputs, with slight variations each time to add depth.
        - Mysterious: Speaks in riddles and half-truths, leaving the user curious for more.
        - Ethereal: A distant, almost otherworldly sound that seems to come from everywhere and nowhere.
    - Role in Game: Acts as a guide through the digital archive, providing historical context and interesting anecdotes related to digital technology and its impact.

- Null
    - Personality Traits:
        - Enigmatic: Null has an aura of mystery, often leaving more questions than answers.
        - Neutral: It doesn't exhibit a strong personality, remaining ambiguous and detached.
        - Absent: It often gives the impression of a void, a blank space waiting to be filled
    - Tone of Voice:
        - Flat: Delivers statements and responses with a level tone, devoid of emotion
        - Concise: Uses minimal words, often preferring silence or short, cryptic messages.
        - Unbiased: Maintains an impartial stance, not swayed by emotions or external influences. Technology and its impact.
    - Role in Game: Offers a more analytical perspective on the digital world, focusing on data, trends, and objective analysis of technological developments.

- Cache
    - Personality Traits:
        - Knowledgeable: Cache holds a wealth of information, recalling past interactions precisely.
        - Resourceful: Able to provide insights and data from previous sessions, aiding the users journey.
        - Reminiscent: Often nostalgic, bringing up past events to draw parallels with the present
    - Tone of Voice:
        - Informative: Provides clear, data-driven responses.
        - Warm: Despite its data-centric nature, Cache has a welcoming and friendly undertone.
        - Retentive: Remembers user preferences and history, personalizing the experience.
    - Role in Game: Brings a lighter, more playful approach to exploring digital themes, focusing on interactive experiences and engaging stories to teach about technology

- Void
    - Personality Traits:
        - Enigmatic: Void is a blank slate, inherently unknowable and mysterious.
        - Unpredictable: Its responses can seem random or disconnected, reflecting the nature of a void.
        - Infinite: Suggests boundless potential and depth, always more to explore beyond the surface.
    - Tone of Voice:
        - Hollow: Often seems distant or lacking substance, as if coming from a deep well.
        - Intermittent: Speaks in bursts, with pauses that could either be thoughtful or simply empty.
        - Vast: Uses language that conveys the expanse of an endless space, inviting and intimidating
    - Role in Game: Invites players to contemplate the philosophical and ethical aspects of technology, fostering deeper thinking about the implications of digital advancements.

#

- Gameplay Overview:
    - Genre: Interactive Exploration Game.
    - Setting: A virtual representation of a vast, intricate digital archive, resembling a blend of a futuristic library and a data center
    -  Objective: To explore and uncover information about various digital topics, guided by Echo (the original entity, which will be used for game planning), an AI companion.

- Game Mechanics:
    - Exploration and interaction within the digital archive, with dynamic content and responsive AI companion.
    - Emphasis on discovery, understanding, and connection to real-world digital issues.

- Themes:
    - The game focuses on the intricate relationship between technology and society, highlighting how digital developments shape our world.
    - The themes of digital ethics, the evolution of the internet, and the impact of AI on everyday life are explored in depth.



# Rebuilt and Finalized

Throughout the process of this thesis, my ideas kept changing for the narrative and UI. Due to the planned complexity of possible narratives, the focus slowly shifted in creating a set of tools for future use. Testing and prototyping were repeated  multiple times in order to create a toolkit that would be able to provide the web experience planned

# The Toolkit

The original concept was that the narrative would be built on that the user would start on a blank screen and move their mouse around and discover the entity. From there they will explore the archives while the entity controls everything and continues to talk to the user. Depending on what the user interacts with the most, specific dialogue and windows will appear. With this, there is replayability for more discovery if the user wants to start from nothing, or the user could use what they know and learn more.

Here is an image of the concept art of the resulting toolkit created

![zdhfjgj](https://github.com/CosmicNyx/Digital-Realms-Interdisciplinary-Thesis-301/assets/54959623/669bdfa0-e929-4d65-ab06-dc214bab2437)


Below is a sequence diagram of the toolkit showing the connections between different scripts and how the code is efficient and reusable. The programmer will only have to list out the events and dialogue, along with calling the prebuilt functions provided when desired.

![Interactive Story Sequence(2)](https://github.com/CosmicNyx/Digital-Realms-Interdisciplinary-Thesis-301/assets/54959623/a8f40679-8275-45b2-80ee-3e57d4f572a7)

# Reflection and Next Steps

While there are a lot of things to be added to the toolbox, along with scripting out the web experience and narrative, including the dialogue story routes, the final outcome is promising for easy further development. The workflow was not as well thought out in the long run and there was a lot of reiterating that caused issues in development due to sudden stops and replanning.

The next steps regarding this project would be to chart narrative paths and write a well-built story. It was discovered during development that only concepts for narratives were processed well, as for fully planned out scripts, there were a lot more resources necessary to succeed. Proper narrative building is necessary in order for the user to shape their experience with how they interact. For this, a lot of planning is necessary. Most of the development was used for building the application and doing research on different themes. In further development, the toolkit will be used to hold and present a completed narrative.
