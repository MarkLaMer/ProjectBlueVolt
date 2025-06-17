const testimonials = document.querySelectorAll('.testimonial-slide');
const next = document.querySelector('.testimonial-next');
const prev = document.querySelector('.testimonial-prev');
let index = 0;

function showTestimonial(i) {
  testimonials.forEach((slide, n) => {
    slide.classList.toggle('active', n === i);
  });
}

next.addEventListener('click', () => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
});

prev.addEventListener('click', () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
});
