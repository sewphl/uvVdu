var modal = document.querySelector(".modal")

window.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight"){
    changeSlide(1);
  }
  if (event.key === "ArrowLeft"){
    changeSlide(-1);
  }
  if (event.key === "Escape" && (document.getElementById("about").style.display==="block")) {
    closeMe("about");
  }
  else if (event.key === "Escape" && (document.getElementById("Lightbox").style.display==="block")) {
    closeMe("Lightbox");
  }

})

var slideIndex = 1;
showSlide(slideIndex);

function openMe(id) {
  //document.getElementById("gallery").style.display="none";
  let myModal = document.getElementById(id);
  if (myModal.style.display==="" || myModal.style.display==="none" ) {
    let myPhotos = document.querySelectorAll(".photo");
    let myFooter = document.getElementById("footer");
    for (let i = 0; i<myPhotos.length; i++) {
      myPhotos[i].style.opacity = "0";
    }
    myFooter.style.opacity = "0";

    setTimeout(function () {
      for (let i = 0; i<myPhotos.length; i++) {
        myPhotos[i].style.display = "none";
      }
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
  document.getElementById("uvVduid").style.cursor = "default";

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
  let myFooter = document.getElementById("footer");

  setTimeout(function () {
    for (let i = 0; i<myPhotos.length; i++) {
      myPhotos[i].style.opacity = "1";
    }
    myFooter.style.opacity = "1";
  }, 1600);

  setTimeout(function () {
    for (let i = 0; i<myPhotos.length; i++) {
      myPhotos[i].style.display = "block";
    }
    myFooter.style.display = "block";
  }, 1200);
  //document.getElementById("gallery").style.display="inline";
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
