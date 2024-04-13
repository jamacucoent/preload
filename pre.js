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
firebaseImage.src = 'https://firebasestorage.googleapis.com/v0/b/fliktrip-ff.appspot.com/o/Destinations%20Photos%2Ffliktrip2.png?alt=media&token=bf6a1015-e6fb-4a50-a56a-82369639887f';  // Corrected with quotes around URL
firebaseImage.style.cssText = `
    max-width: 50%;  // Adjusted for better visibility
    max-height: 30%; // Adjusted for better visibility
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

// Function to hide the overlay
function hideOverlay() {
    overlay.style.display = 'none';
}

// Add an event listener to hide the overlay when all external JS files are loaded
document.addEventListener('DOMContentLoaded', () => {
    // Simulate a delay for demonstration purposes
    // This timeout represents the time you assume your external resources take to load
    setTimeout(hideOverlay, 3000);
});

// Fallback: If the DOMContentLoaded event doesn't fire or is not enough,
// we'll still hide the overlay when the window's load event is triggered.
window.addEventListener('load', hideOverlay);
