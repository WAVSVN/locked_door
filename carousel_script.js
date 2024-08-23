let currentIndex = 0;

function showNextImage() {
    const carousel = document.querySelector('.carousel');
    const totalImages = document.querySelectorAll('.carousel-item').length;

    currentIndex++;

    if (currentIndex >= totalImages) {
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(0)';
        currentIndex = 1;

        // Force reflow to apply the new transform without transition
        void carousel.offsetWidth;
    }

    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextImage, 4000);




