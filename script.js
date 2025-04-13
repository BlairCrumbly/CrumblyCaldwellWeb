 // Carousel functionality
function initializeCarousel(carouselId) {
const carousel = document.querySelector(`#${carouselId}`);
const images = carousel.querySelectorAll('img');
const prevButton = carousel.querySelector('.prev');
const nextButton = carousel.querySelector('.next');
let currentIndex = 0;
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : imageslength - 1;
    showImage(currentIndex);
});
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex +1 : 0;
    showImage(currentIndex);
});

    // Initial display
    showImage(currentIndex);
}

// Initialize multiple carousels
initializeCarousel('carousel');
initializeCarousel('carousel2');


// Show the initial image
showImage(currentIndex);

 // Countdown functionality
// function updateCountdown() {
//     const eventDate = new Date('2025-06-15T00:00:00');
//     const now = new Date();
//     const diff = eventDate - now;

//     if (diff > 0) {
//         const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
//         const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         document.getElementById('reunion-countdown').textContent = `Countdown: ${months} months ${days} days ${hours} hours`;
//     } else {
//         document.getElementById('reunion-countdown').textContent = 'Event is happening today!';
//     }
// }

// setInterval(updateCountdown, 1000);
