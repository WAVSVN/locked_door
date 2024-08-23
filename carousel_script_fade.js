document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('[data-carousel]');

    carousels.forEach(carousel => {
      let slideIndex = 0;
      const slides = carousel.querySelectorAll('.carousel-item');

      function showSlides() {
        slides.forEach(slide => slide.classList.remove('active'));
        slideIndex++;
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }
        slides[slideIndex - 1].classList.add('active');
        setTimeout(showSlides, 3000); // Change image every 3 seconds
      }

      showSlides();
    });
  });
