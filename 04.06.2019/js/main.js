"use strict";

const mainImg = document.querySelector(".main-img-wrapper img");
const allImages = [...document.querySelectorAll(".list img")];
const leftIcon = document.querySelector(".leftIcon");
const rightIcon = document.querySelector(".rightIcon");

const animations = ["zoom", "rotate", "bounce"];

allImages.forEach(function(el) {
  el.onclick = function() {
    const newImageSrc = el.getAttribute("src");
    mainImg.setAttribute("src", newImageSrc);

    const oldActive = document.querySelector(".list li.active");
    oldActive.classList.remove("active");
    el.parentElement.classList.add("active");
  };
});

rightIcon.addEventListener("click", function() {
  // const activeLee = document.querySelector(".list li.active");
  // activeLee.classList.remove("active");

  // let newActiveLee;

  // if (activeLee.nextElementSibling !== null)
  // {
  //   newActiveLee = activeLee.nextElementSibling;
  // }
  // else
  // {
  //   newActiveLee = document.querySelector(".list li:first-child");
  // }

  // newActiveLee.classList.add("active");
  // const src = newActiveLee.firstElementChild.getAttribute("src");
  // mainImg.setAttribute("src", src);
  Slide(1);
});

leftIcon.addEventListener("click", function() {
  // const activeLee = document.querySelector(".list li.active");
  // activeLee.classList.remove("active");

  // let newActiveLee;

  // if (activeLee.previousElementSibling !== null)
  // {
  //   newActiveLee = activeLee.previousElementSibling;
  // }
  // else
  // {
  //   newActiveLee = document.querySelector(".list li:last-child");
  // }

  // newActiveLee.classList.add("active");
  // const src = newActiveLee.firstElementChild.getAttribute("src");
  // mainImg.setAttribute("src", src);
  Slide(0);
});

function Slide(direction) {
  const activeLee = document.querySelector(".list li.active");
  activeLee.classList.remove("active");

  let newActiveLee;

  //right clicked
  if (direction === 1) {
    if (activeLee.nextElementSibling !== null) {
      newActiveLee = activeLee.nextElementSibling;
    } else {
      newActiveLee = document.querySelector(".list li:first-child");
    }
  }
  //left clicked
  else {
    if (activeLee.previousElementSibling !== null) {
      newActiveLee = activeLee.previousElementSibling;
    } else {
      newActiveLee = document.querySelector(".list li:last-child");
    }
  }

  newActiveLee.classList.add("active");

  const animationClass =
    animations[GenerateRandomNumber(0, animations.length - 1)];

  mainImg.classList.add(animationClass);

  setTimeout(() => {
    mainImg.classList.remove(animationClass);
  }, 1000);

  const src = newActiveLee.firstElementChild.getAttribute("src");
  mainImg.setAttribute("src", src);
}

document.addEventListener("keydown", function(e) {
  if (e.keyCode === 39) {
    //right arrow clicked
    Slide(1);
  } else if (e.keyCode === 37) {
    //left arrow clicked
    Slide(0);
  }
});

function GenerateRandomNumber(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

// setInterval(() => {
//   Slide(1);
// }, 3000);
