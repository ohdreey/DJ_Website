//SLIDER SCRIPT
let slideIndex = 1;
showSlides(slideIndex);
showSlidesM(slideIndex);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {
    slideIndex = 1
  }
  
  if (n < 1) {
    slideIndex = slides.length
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
   dots[i].className = dots[i].className.replace(" active", "");
  }
  
 slides[slideIndex-1].style.display = "block";
 dots[slideIndex-1].className += " active";
  
 }

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlidesM(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides fadeM");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {
    slideIndex = 1
  }
  
  if (n < 1) {
    slideIndex = slides.length
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
   dots[i].className = dots[i].className.replace(" active", "");
  }
  
 slides[slideIndex-1].style.display = "block";
 dots[slideIndex-1].className += " active";
  
 }

// Next/previous controls
function plusSlides(n) {
showSlidesM(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlidesM(slideIndex = n);
}


//RESPONSIVE FOOTER
function myFunction() {
  const x = document.getElementById("bottomNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}