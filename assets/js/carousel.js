const carouselContainer = document.querySelector('.carousel-container');
const carouselWrapper = document.querySelector('.carousel-wrapper');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
const indicators = document.querySelectorAll('.indicator');
const slideCount = slides.length;
let slideIndex = 0;
let isSliding = false; // To prevent rapid clicking

function slideTo(index) {
  if (isSliding) return;
  isSliding = true;

  if (index < 0) {
    index = slideCount - 1;
  } else if (index >= slideCount) {
    index = 0;
  }

  slideIndex = index;
  carouselWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;

  indicators.forEach((indicator, i) => {
    indicator.classList.remove('active');
    if (i === slideIndex) {
      indicator.classList.add('active'); // Add 'active' class
    }
  });

  // Add and remove the 'active' class using classList (better)
  setTimeout(() => {
    isSliding = false;
  }, 500); // Duration should match the CSS transition
}

function nextSlide() {
  slideTo(slideIndex + 1);
}

function prevSlide() {
  slideTo(slideIndex - 1);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    slideTo(index);
  });
});

// Initialize the first slide as active.  Important!
slideTo(0);

// Optional: Auto-play
// setInterval(nextSlide, 5000); // Slide every 5 seconds