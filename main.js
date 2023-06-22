
//Slideshow 1
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

setInterval(nextSlide, 4000); 

//Slideshow 2
let slides2 = document.getElementsByClassName("slide2");
let currentSlide2 = 0;

function showSlide2() {
  for (var i = 0; i < slides2.length; i++) {
    slides2[i].classList.remove("active");
  }
  slides2[currentSlide2].classList.add("active");
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

// Bildunterschrift des aktuellen Bilds
function showCaption() {
    let captions = document.getElementsByClassName("caption");
    
    for (let i = 0; i < captions.length; i++) {
      captions[i].style.display = "none";
    }
    
    captions[currentSlide].style.display = "block";
  }
  
  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide();
    showCaption(); // Aufruf der showCaption-Funktion nach dem Bildwechsel
  }
  
  setInterval(nextSlide, 4000);
  
  
