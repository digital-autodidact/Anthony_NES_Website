function openLightbox() {
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function currentSlide(n) {
    const images = document.getElementsByClassName('art-project');
    const img = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");
    
    // Get the image source
    img.src = images[n - 1].getElementsByTagName("img")[0].src;
    
    // Get the title and description
    const title = images[n - 1].querySelector('.art-title').innerHTML;
    const description = images[n - 1].querySelector('.art-description').innerHTML;
    
    // Set the caption in the modal
    caption.innerHTML = `<strong>${title}</strong><br>${description}`;
}





/* THE PURPOSE OF THIS CODE BLOCK IS TO ALTER BEHAVIOR SPECIFICALLY ON 
MY 'SPLASH' PAGE */

// Existing variables and functions
const messageLines = [
    "Hello curious visitor",
    "Welcome to a world of my creation,",
    "won't you come in?",
];
let index = 0;
let lineIndex = 0;
const typingDelay = 75; // Speed of typing in ms

function typeMessage() {
    if (lineIndex < messageLines.length) {
        const currentLine = messageLines[lineIndex];
        if (index < currentLine.length) {
            document.getElementById("typing-message").innerHTML += currentLine.charAt(index);
            index++;
            setTimeout(typeMessage, typingDelay);
        } else {
            // Move to the next line after a short delay
            lineIndex++;
            index = 0; // Reset index for the new line
            setTimeout(() => {
                document.getElementById("typing-message").innerHTML += "<br>"; // Add line break
                typeMessage(); // Start typing the next line
            }, 500); // Delay before starting the next line
        }
    }
}

// Start the typing effect once the page is loaded
window.onload = function() {
    typeMessage();

    // Initially paused state for the music
    let isPlaying = false;

    // Function to handle play/pause toggle for audio
    document.getElementById("play-button").addEventListener("click", function() {
        var music = document.getElementById("bg-music");
        if (isPlaying) {
            music.pause(); // Pause the music
            isPlaying = false; // Update state
        } else {
            music.play().catch(function(error) {
                console.log("Error playing audio:", error);
            }); 
            isPlaying = true; // Update state
        }
    });
};

