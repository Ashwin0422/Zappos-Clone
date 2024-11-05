// Home Page Section

let hamburgerMenu = document.getElementById("hamburgerMenu");
let navMenu = document.getElementById("navMenu");

hamburgerMenu.addEventListener("click", function(){
  navMenu.classList.toggle("d-none");
});



var swiper = new Swiper(".card-container", {
    spaceBetween: 40,
  //   loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0 : {
            slidesPerView: 2,
        },
        768 : {
            slidesPerView : 3,
        },
        950 : {
            slidesPerView : 4,
        }
    }
  });


// footer

let aboutZaptoos = document.getElementById("aboutZaptoos");
let aboutZaptoosContent = document.getElementById("aboutZaptoosContent");

let customerService = document.getElementById("customerService");
let customerServiceContent = document.getElementById("customerServiceContent");

let resourcesFooter = document.getElementById("resourcesFooter");
let resourcesContent = document.getElementById("resourcesContent");

let exploreZappos = document.getElementById("exploreZappos");
let exploreZapposContent = document.getElementById("exploreZapposContent");

aboutZaptoos.addEventListener("click", function() {
    aboutZaptoosContent.classList.toggle("d-none");
});

customerService.addEventListener("click", function() {
    customerServiceContent.classList.toggle("d-none");
});

resourcesFooter.addEventListener("click", function() {
    resourcesContent.classList.toggle("d-none");
});

exploreZappos.addEventListener("click", function() {
    exploreZapposContent.classList.toggle("d-none");
});