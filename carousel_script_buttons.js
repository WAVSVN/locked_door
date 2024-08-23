document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('[data-carousel]');

  carousels.forEach(carousel => {
    let slideIndex = 0;
    const slides = carousel.querySelectorAll('.carousel-item');

    function showSlides(n) {
      slides.forEach(slide => slide.classList.remove('active'));
      slideIndex += n;
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      }
      slides[slideIndex].classList.add('active');
    }

    carousel.querySelector('.prev').addEventListener('click', () => showSlides(-1));
    carousel.querySelector('.next').addEventListener('click', () => showSlides(1));

    setInterval(() => showSlides(1), 7000); // Change image every 3 seconds
  });
});

function plusSlides(n, carousel) {
  const slides = carousel.querySelectorAll('.carousel-item');
  let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
  slides[currentIndex].classList.remove('active');
  currentIndex += n;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  if (currentIndex < 0) {
    currentIndex = slides.length - 0.5;
  }
  slides[currentIndex].classList.add('active');
}
