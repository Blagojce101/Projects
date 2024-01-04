// Carousel

function carousel() {
  let nextBtn = document.querySelector(".carousel .next");
  let prevBtn = document.querySelector(".carousel .prev");
  let carouselWrapper = document.querySelector(".carousel-container .wrapper");
  let counter = 0;

  nextBtn.removeEventListener("click", nextCarousel);
  nextBtn.addEventListener("click", nextCarousel);

  prevBtn.removeEventListener("click", prevCarousel);
  prevBtn.addEventListener("click", prevCarousel);

  function prevCarousel() {
    if (counter < 1) {
      counter = 3;
    }
    counter--;
    carouselWrapper.style.transform = `translate(-${counter * 250}px)`;
  }
  function nextCarousel() {
    if (counter >= 2) {
      counter = -1;
    }
    counter++;
    carouselWrapper.style.transform = `translate(-${counter * 250}px)`;
  }
}