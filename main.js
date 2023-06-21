let slides = document.getElementsByClassName("slide");
let currentSlide = 0;

function showSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[currentSlide].classList.add("active");
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

setInterval(nextSlide, 3000); 
