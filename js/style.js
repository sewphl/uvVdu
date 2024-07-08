var modal = document.querySelector(".modal")

window.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight"){
    changeSlide(1);
  }
  if (event.key === "ArrowLeft"){
    changeSlide(-1);
  }

  if (document.getElementById("about")) {
    if (event.key === "Escape" && (document.getElementById("about").style.display==="block")) {
      closeMe("about");
    }
  }
  else if (event.key === "Escape" && (document.getElementById("Lightbox").style.display==="block")) {
    closeMe("Lightbox");
  }
})

var slideIndex = 1;
showSlide(slideIndex);

function openMe(id) {
  let myModal = document.getElementById(id);
  if (myModal.style.display==="" || myModal.style.display==="none" ) {
    let myPhotos = document.querySelectorAll(".photo");  
    let myHello = document.querySelector("#helloContent");
    //let myPrints = document.querySelector("#shopPrints");
    let myHeader = document.querySelector("body > header-component");
    let myFooter = document.querySelector("body > footer-component");

    for (let i = 0; i<myPhotos.length; i++) {
      myPhotos[i].style.opacity = "0";
    }
    myHello.style.opacity = "0";
    //myPrints.style.opacity = "0";
    myHeader.style.opacity = "0";
    myFooter.style.opacity = "0";

    setTimeout(function () {
      for (let i = 0; i<myPhotos.length; i++) {
        myPhotos[i].style.display = "none";
      }
      myHello.style.display = "none";
      //myPrints.style.display = "none";
      myHeader.style.display = "none";
      myFooter.style.display = "none";
    }, 1200);

    setTimeout(function () {
      myModal.style.opacity="1";
    }, 1600);

    myModal.style.display = "block";
    /*
    box.addEventListener("transitionstart", function(e) {
      box.style.display = "block";
    }, {
      capture: false,
      once: true,
      passive: false
    });
    */
  }

  myModal.style.display = "block";
  document.querySelector("body").style.overflow = "hidden"; //removes scroll
  //document.getElementById("uvVduid").style.cursor = "default"; 
}

function closeMe(id) {
  let box = document.getElementById(id);
  box.style.opacity = "0";
  box.addEventListener("transitionend", function(e) {
    box.style.display = "none";
  }, {
    capture: false,
    once: true,
    passive: false
  });
  document.querySelector("body").style.overflow = "visible"; //return to scroll
  let myPhotos = document.querySelectorAll(".photo");  
  let myHello = document.querySelector("#helloContent");
  //let myPrints = document.querySelector("#shopPrints");
  let myHeader = document.querySelector("body > header-component");
  let myFooter = document.querySelector("body > footer-component");

  setTimeout(function () {
    for (let i = 0; i<myPhotos.length; i++) {
      myPhotos[i].style.opacity = "1";
    }
    myHello.style.opacity = "1";
   // myPrints.style.opacity = "1";
    myHeader.style.opacity = "1";
    myFooter.style.opacity = "1";
  }, 1600);

  setTimeout(function () {
    for (let i = 0; i<myPhotos.length; i++) {
      myPhotos[i].style.display = "block";
    }
    myHello.style.display = "block";
    //myPrints.style.display = "block";
    myHeader.style.display = "block";
    myFooter.style.display = "block";
  }, 1200);
}

function changeSlide(n) {
	showSlide(slideIndex += n);
}

function toSlide(n) {
	showSlide(slideIndex = n);
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
  	slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
