let containerMobile = document.querySelector(".slider-container-mobile"); // Mobile Slider
let containerDesktop = document.querySelector(".slider-container"); // Desktop Slider
let picturesMobile = document.querySelectorAll(".mySlides fadeM"); // Images mobile
let rightArrow = document.querySelector(".rightArrow"); // Flèche de droite
let leftArrow = document.querySelector(".leftArrow"); // Flèche de gauche

let slideIndex = 1; // Init slid

function showSlides(n) { // Slider function desktop
  let i;
  let slides = document.getElementsByClassName("mySlides fade");
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

function showSlidesM(n) { // Slider function mobile
  let i;
  let slides = document.getElementsByClassName("mySlides fadeM");
  
  if (n > slides.length) {
    slideIndex = 1
  }
  
  if (n < 1) {
    slideIndex = slides.length
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

 slides[slideIndex-1].style.display = "block";
}

let deviceSlider = () => { // Call slider function depending on device

  let resolution = window.innerWidth; // recupère la largeur de l'écran

  if(resolution > 650) {
    showSlides(slideIndex);
  }
  else if (resolution <= 650 ) {
    showSlidesM(slideIndex);
  }
}

// Concat slider index function
function plusSlides(n) {
  slideIndex += n;
}

rightArrow.addEventListener('click', function(){ // Function next control
  plusSlides(1); // slider index + 1
  deviceSlider(); // show Slider again
}),
  
leftArrow.addEventListener('click', function(){ // Function previous control
  plusSlides(-1); // slider index - 1
  deviceSlider(); // show Slider again
}),

deviceSlider(); // set Slider for the first time when loading page


// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
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