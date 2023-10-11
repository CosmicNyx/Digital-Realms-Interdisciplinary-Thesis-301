const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const entitySpeechElement = document.getElementById('entitySpeech');
const additionalTextElement = document.getElementById('additionalText');

const entitySpeech = "Hello, I am the talking entity. ";
const additionalText = "This is additional text that appears later.";

let charIndex = 0;

function setPosition(x, y) {
    entitySpeechElement.style.position = 'absolute';
    entitySpeechElement.style.top = y + 'px';
    entitySpeechElement.style.left = x + 'px';
}

function typeEntitySpeech() {
    // Set the desired position of the text
    setPosition(200, 200); // Example position: X=200, Y=200

    if (charIndex < entitySpeech.length) {
        entitySpeechElement.innerHTML += entitySpeech.charAt(charIndex);
        charIndex++;
        setTimeout(typeEntitySpeech, 50);
    } else {
        setTimeout(displayAdditionalText, 1000);
    }
}

function preloadImages(images) {
    return Promise.all(images.map((image) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error(`Failed to load image: ${image}`));
            img.src = image;
        });
    }));
}

function drawImage(image) {
    let x = 0;
    let y = 0;
    const imageWidth = image.width;
    const imageHeight = image.height;
    const step = 10; // Number of pixels drawn at each step

    function draw() {
        ctx.drawImage(image, x, y, step, imageHeight, x, y, step, imageHeight);
        x += step;

        if (x < imageWidth) {
            requestAnimationFrame(draw);
        } else {
            x = 0;
            y += step;
            if (y < imageHeight) {
                requestAnimationFrame(draw);
            }
        }
    }

    draw();
}



window.onload = () => {
    typeEntitySpeech();
    
// //DRAWING IMAGES
//     const images = [
//         'image1_bw.jpg',
//         'image2_bw.jpg',
//         // Add more image URLs here
//     ];

//     preloadImages(images)
//         .then((loadedImages) => {
//             loadedImages.forEach((image) => {
//                 drawImage(image);
//             });
//         })
//         .catch((error) => {
//             console.error(error);
//         });
};
