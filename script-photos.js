let containerMobile = document.querySelector(".slider-container-mobile"); // Mobile Slider
let containerDesktop = document.querySelector(".slider-container"); // Desktop Slider


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

let deviceSlider = () => { // Call slider function depending on device

  let resolution = window.innerWidth; // recupère la largeur de l'écran

  if(resolution > 650) {
    console.log("Je suis un desktop");
    showSlides(slideIndex);
  }
  else if (resolution <= 650 ) {
    console.log("Je suis un mobile");
    showSlidesM(slideIndex);
  }
}

deviceSlider();

// // Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

//add event listener au clic, fonction plusSlide avec en paramètre 1 flèche de droite et -1 en para sur flèche gauche

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