function menuAnimation(x) {
    x.classList.toggle("change");
}

showQuote();

function showQuote() {
    var x = document.getElementById("toggle");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    };
}

// Assigning all of the values
let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelectorAll(".arrow-left"),
    arrowRight = document.querySelectorAll(".arrow-right"),
    current = 0;

// Resetting the slider
function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}

// Starting the slider
function startSlider(){
    reset();
    sliderImages[0].style.display = 'block';
}

startSlider();

// Show previous
function slideLeft(){
    reset();
    if(current < 0) {
        current === sliderImages.length;
    }
    sliderImages[current - 1].style.display = 'block';
    current--;
}


// Show next
function slideRight(){
    reset();
    if(current === sliderImages.length) {
        current = -1;
    }
    sliderImages[current + 1].style.display = 'block';
    current++;
}



