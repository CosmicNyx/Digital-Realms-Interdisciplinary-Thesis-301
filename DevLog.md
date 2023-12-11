The first thing that came to mind for what to do for a thesis was to create it using JavaScript. I thought about focusing on technological determinism, and I went from there.

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

# Mechanics testing

I made two mechanics that I want to include in the web exp (what imma call it from now). I made a typewriter function for divs that are called in JavaScript, however these divs were already written down in HTML. The one main thing im trying to focus on in this program is effeciency and have it at clean as possible, meaning I want the html to be as minimal as possible. I dont want to have to note down every single div for every text that I want in a specific location. For right now this works though.


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

And in JS I sepoeratly called them and then used the displayText function which allows me to set how long until I want in to type onto the screen and lets me set the exact location of each div

```javascript
const entitySpeechElement = document.getElementById('entitySpeech');
const additionalTextElement = document.getElementById('additionalText');
const otherTextElement = document.getElementById('otherText');

// Display text with typewriter effect after specific delays and set their individual locations
displayText(entitySpeechElement, textData.greeting, 1000, (element) => setLocation(element, 50, 100));
displayText(additionalTextElement, textData.additionalText, 5000, (element) => setLocation(element, 200, 300));
displayText(otherTextElement, textData.otherText, 10000, (element) => setLocation(element, 350, 500));
```

But this would turn very messy. I would have to call on each line of text and then calculate and change the timings for each div, and if later I change a timing for a div I would have to go back and change all th eother divs as well. This would take too long and there are better ways to do this. I atleast figured out a good typewriter function.

#

I want multiple divs to apear on screen when the "AI" is talking. Some in a random position and some in specific locations. I want to be able to have control over everything in an easy way in order to simply put the narrative in arrays and with minimal setting up, then the web exp will be set.

Another thing that i wanted for the AI was to make it seem chaotic, I want text to pile up on screen to make it seem messy, along with the windows on thepage that the user wont be able to delete. I made it so that every time a new div apears on screen, all the previuos dics on screen will lower on opacity. This was so the newer text would still be readable. I made two functions where when th emouse in moved and clicked, divs will apear on screen. The location of all the divs are at random which was easy to implement, however I could'nt find a way to make the divs appear in a specific spot. I noted down that i could try listing the location along with the text in an array. I will test that out later

#

**FeedBack**

I presented these two mechanics and got some good feedback. 