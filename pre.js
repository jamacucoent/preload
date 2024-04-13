// Create the overlay and SVG elements
const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(232, 243, 246, 0.976);
    z-index: 999;
`;

const firebaseImage = document.createElement('img');
firebaseImage.src = https://firebasestorage.googleapis.com/v0/b/fliktrip-ff.appspot.com/o/Destinations%20Photos%2Ffliktrip2.png?alt=media&token=bf6a1015-e6fb-4a50-a56a-82369639887f;  // Replace with your actual Firebase image URL
firebaseImage.style.cssText = `
    max-width: 50%;
    max-height: 30%;
    margin-bottom: 20px;
`;

const svgImage = document.createElement('img');
svgImage.id = 'svgImage';
svgImage.src = 'https://cdn.jsdelivr.net/gh/jasminder/flutter_preloader/preload.svg';
svgImage.style.cssText = `
    max-width: 100px;  // Adjust size as necessary
    max-height: 100px; // Adjust size as necessary
`;

// Append the image and SVG to the overlay
overlay.appendChild(firebaseImage);
overlay.appendChild(svgImage);

// Append the overlay to the body
document.body.appendChild(overlay);

// Function to hide the overlay and display the SVG
function hideOverlay() {
    overlay.style.display = 'none';
}

// Add an event listener to hide the overlay when all external JS files are loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(hideOverlay, 3000); // Simulate a delay for demonstration purposes
});

// Fallback: If all external resources are loaded and the DOMContentLoaded event doesn't fire,
// we'll still hide the overlay when the window's load event is triggered.
window.addEventListener('load', hideOverlay);
