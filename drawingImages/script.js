document.addEventListener("DOMContentLoaded", function() {
    // This ensures the JavaScript runs only after the entire HTML is loaded

    const imagesArray = ['test2.png', 'test.png']; // Add your image filenames here

    document.addEventListener("click", () => {
        displayNewImage(''); // Adjust the path to your image folder
    });

    function getRandomImage(imagesArray) {
        const randomIndex = Math.floor(Math.random() * imagesArray.length);
        return imagesArray[randomIndex];
    }

    function createNewImageElement(x, y, src) {
        const newElement = document.createElement('img');
        newElement.className = 'image-element';
        newElement.src = src;
        document.getElementById('container').appendChild(newElement);
        setLocation(newElement, x, y);
        return newElement;
    }

    function displayNewImage(imageFolderPath) {
        const x = Math.floor(Math.random() * (window.innerWidth - 200));
        const y = Math.floor(Math.random() * (window.innerHeight - 200));
        const imageSrc = getRandomImage(imagesArray);

        const newImageElement = createNewImageElement(x, y, imageFolderPath + imageSrc);
    }

    function setLocation(element, x, y) {
        element.style.position = 'absolute';
        element.style.top = y + 'px';
        element.style.left = x + 'px';
    }
});
