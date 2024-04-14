// Create the overlay and Lottie elements
const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    max-width: 30%;
    max-height: 30%;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// Append the elements to the body
document.body.appendChild(overlay);
document.body.appendChild(lottieContainer);

// Configure Lottie to load and play animation
const animation = bodymovin.loadAnimation({
    container: lottieContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/d52449fd-1c1e-4f81-94d6-5fba7b16d240/G0CEZfQgcE.json' // Replace with your Lottie animation JSON URL
});

// Function to hide the overlay and display the Lottie animation
function hideOverlay() {
    overlay.style.display = 'none';
    lottieContainer.style.display = 'block';
}

// Add an event listener to hide the overlay when all external JS files are loaded
document.addEventListener('DOMContentLoaded', () => {
    // Simulate a delay for demonstration purposes
    setTimeout(hideOverlay, 100); // Replace with your actual loading code.
});

// Fallback: If all external resources are loaded and the DOMContentLoaded event doesn't fire,
// we'll still hide the overlay when the window's load event is triggered.
window.addEventListener('load', hideOverlay);

// For demonstration purposes, we'll use a setTimeout to simulate loading external resources.

setTimeout(hideOverlay, 2000); // Replace with your actual loading code.
