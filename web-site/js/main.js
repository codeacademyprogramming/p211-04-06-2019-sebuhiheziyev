const switcherOpen = document.getElementsByClassName("cogs-icon")[0];

switcherOpen.addEventListener("click", function (){
    const styleSwitcher = document.getElementsByClassName("style-switcher")[0];
    styleSwitcher.classList.toggle("active");
   
})



const allBtn = [...document.querySelectorAll(".style-button a")];
allBtn.forEach(function(el) {
    el.onclick = function() {
      
      const oldActive = document.querySelector(".style-button a.actived");
      oldActive.classList.remove("actived");
      el.classList.add("actived");
    };
  });


const allBtnTo = [...document.querySelectorAll(".style-buttonto a")];
allBtnTo.forEach(function(el) {
  el.onclick = function() {
    
    const oldActive = document.querySelector(".style-buttonto a.actived");
    oldActive.classList.remove("actived");
    el.classList.add("actived");
  };
});


const allBtnThri = [...document.querySelectorAll(".style-buttonthri a")];
allBtnThri.forEach(function(el) {
  el.onclick = function() {
    
    const oldActive = document.querySelector(".style-buttonthri a.actived");
    oldActive.classList.remove("actived");
    el.classList.add("actived");
  };
});


const allBtnFo = [...document.querySelectorAll(".style-buttonfo a")];
allBtnFo.forEach(function(el) {
  el.onclick = function() {
    
    const oldActive = document.querySelector(".style-buttonfo a.actived");
    oldActive.classList.remove("actived");
    el.classList.add("actived");
  };
});