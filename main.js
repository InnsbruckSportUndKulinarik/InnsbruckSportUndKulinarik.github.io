//Slideshow 1
let slides = document.getElementsByClassName("slide");
let captions = document.getElementsByClassName("caption");
let currentSlide = 0;

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    captions[i].style.display = "none";
  }
  slides[currentSlide].classList.add("active");
  captions[currentSlide].style.display = "block";
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

setInterval(nextSlide, 4000);
showSlide();

//Slideshow 2
let slides2 = document.getElementsByClassName("slide2");
let captions2 = document.getElementsByClassName("caption2");
let currentSlide2 = 0;

function showSlide2() {
  for (let i = 0; i < slides2.length; i++) {
    slides2[i].classList.remove("active");
    captions2[i].style.display = "none";
  }
  slides2[currentSlide2].classList.add("active");
  captions2[currentSlide2].style.display = "block";
}

function nextSlide2() {
  currentSlide2++;
  if (currentSlide2 >= slides2.length) {
    currentSlide2 = 0;
  }
  showSlide2();
}

function prevSlide2() {
  currentSlide2--;
  if (currentSlide2 < 0) {
    currentSlide2 = slides2.length - 1;
  }
  showSlide2();
}

document.getElementById("prevButton").addEventListener("click", prevSlide2);
document.getElementById("nextButton").addEventListener("click", nextSlide2);

showSlide2();






  
  
