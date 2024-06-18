//CARRUSEL/SLIDER

let carouselInner = document.querySelector(".carousel-inner");
let images = carouselInner.querySelectorAll("img");
let index = 1;

setInterval(function() {
    let percentage = index * -100;
    carouselInner.style.transform = "translateX("+ percentage + "%)";
    index++;
    if(index > (images.length -1)){
        index = 0;
    }
}, 3000);

/*-------------------------------------------------------------------------------------*/

