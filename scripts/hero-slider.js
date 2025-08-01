const slides = document.querySelectorAll('.slide-background');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 6000);
