"use strict";

const tabLinks = Array.from(document.querySelectorAll("div.tab-header a"));

tabLinks.forEach(function(link){
  link.onclick = function(e){
    e.preventDefault();
    
    const prevActive = document.querySelector(".tab-header a.active");
    const prevActiveDiv = document.querySelector(".tab-body div.active");

    prevActive.classList.remove("active");
    prevActiveDiv.classList.remove("active");

    
    this.classList.add("active");
    

    const href = this.getAttribute("href");
    document.querySelector(href).classList.add("active")
  }
})


