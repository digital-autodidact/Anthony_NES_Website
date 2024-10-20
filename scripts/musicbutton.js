// musicbutton.js

// Praise messages that can be displayed
const praiseMessages = [
    "Awesome choice! It’s all about exploring the harmonious sounds! 🎶",
    "Curiosity unlocked! Enjoy the melody! 🎵",
    "You’ve got great taste! Keep exploring! 🎧",
    "Thanks for clicking! Let the music inspire you! 🌟",
    "Bravo! Your curiosity leads to delightful discoveries! 🌈",
    "Well done! Music makes every journey memorable! 🎤",
    "Music to your ears! Keep being curious! 🎼",
    "You’re doing fantastic! Keep discovering new sounds! 🎸",
    "Look at you, being adventurous! Enjoy the tunes! 🎺",
    "Thanks for your curiosity! Every click opens a new door! 🔑",
    "Nice move! The soundscape awaits your exploration! 🌊",
    "You’ve got the spirit of a true explorer! Enjoy the vibe! 🎉",
    "Thanks for clicking! Remember to enjoy the little things! 🌼",
    "Awesome! Music spices up any adventure! 🔥",
    "Bravo! Your curiosity is key to unlocking more melodies! 🗝️",
    "Fantastic click! Open your heart to the music! 💖"
    // Add more messages as needed...
];

// Function to show random praise message
function showPraiseMessage() {
    const randomIndex = Math.floor(Math.random() * praiseMessages.length);
    const message = praiseMessages[randomIndex];

    const praiseElement = document.createElement('div');
    praiseElement.classList.add('praise-message');
    praiseElement.textContent = message;

    // Style the praise message
    praiseElement.style.position = 'fixed';
    praiseElement.style.bottom = '120px'; // Position above the music button
    praiseElement.style.left = '20px';
    praiseElement.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Semi-transparent background
    praiseElement.style.color = 'white'; // Text color
    praiseElement.style.padding = '10px';
    praiseElement.style.borderRadius = '5px';
    praiseElement.style.zIndex = '1000'; // Ensure it appears on top

    document.body.appendChild(praiseElement);

    // Remove the message after 3 seconds
    setTimeout(() => {
        praiseElement.remove();
    }, 3000);
}

// Music control function
function setupMusicPlayback(buttonId, audioId) {
    let isPlaying = false;
    const playButton = document.getElementById(buttonId);
    const music = document.getElementById(audioId);

    if (playButton) { // Ensure button exists before adding an event listener
        playButton.addEventListener("click", function() {
            if (isPlaying) {
                music.pause(); // Pause the music
                playButton.textContent = '🎵'; // Change to play icon
                isPlaying = false; // Update state
            } else {
                music.play().catch(function(error) {
                    console.log("Error playing audio:", error);
                });
                playButton.textContent = '⏸️'; // Change to pause icon
                showPraiseMessage(); // Show praise message when music starts
                isPlaying = true; // Update state
            }
        });
    }
}

// Start setup when the page is loaded
window.onload = function() {
    setupMusicPlayback("play-button", "bg-music"); // Call for music setup
};