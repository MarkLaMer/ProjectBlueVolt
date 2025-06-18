
const track = document.querySelector(".gallery-slider");
const images = document.querySelectorAll(".gallery-image");
const prevBtn = document.querySelector(".nav.prev");
const nextBtn = document.querySelector(".nav.next");
let index = 0;

function updateGallery() {
  images.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index % images.length) {
      img.classList.add("active");
    }
  });

  const activeImage = images[index % images.length];
  const wrapper = document.querySelector(".gallery-wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const imageRect = activeImage.getBoundingClientRect();

  const shift = imageRect.left - (wrapperRect.left + (wrapperRect.width / 2) - (imageRect.width / 2));

  const currentTransform = getTranslateX(document.querySelector(".gallery-slider"));
  const newTransform = currentTransform - shift;

  document.querySelector(".gallery-slider").style.transform = `translateX(${newTransform}px)`;
}

function getTranslateX(element) {
  const style = window.getComputedStyle(element);
  const matrix = new DOMMatrixReadOnly(style.transform);
  return matrix.m41;
}


nextBtn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  updateGallery();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  updateGallery();
});

window.addEventListener("load", updateGallery);
window.addEventListener("resize", updateGallery);
