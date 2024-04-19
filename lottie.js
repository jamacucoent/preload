const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: none; /* Ocultar inicialmente */
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999; /* Mantener el z-index para que esté por encima de otros elementos */
`;

const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    max-width: 10%;
    max-height: 10%;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

document.body.appendChild(overlay);
document.body.appendChild(lottieContainer);

function hideOverlay() {
    lottieContainer.style.display = 'block'; // Mostrar el contenedor de la animación
    overlay.style.display = 'flex'; // Mostrar el overlay sin fondo

    const animation = bodymovin.loadAnimation({
        container: lottieContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/a0c44c21-740e-4188-bd5d-78412ef65f70/vCs4Xc7JYs.json'
    });
}

window.addEventListener('load', () => {
    setTimeout(hideOverlay, 100);
});
