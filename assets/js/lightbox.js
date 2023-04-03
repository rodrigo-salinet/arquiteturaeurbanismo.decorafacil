// Open the Modal
const openModal = (modal_id) => {
    document.getElementById(modal_id).style.display = "block";
}

// Close the Modal
const closeModal = (modal_obj) => {
    modal_obj.style.display = "none";
}

// Thumbnail image controls
const currentSlide = (n) => {
    showSlide(slideIndex = n);
}

// Show / Change slides
const showSlide = (n) => {
    let slide1 = document.getElementById("slide1");
    let slide2 = document.getElementById("slide2");
    let slide3 = document.getElementById("slide3");
    let slide4 = document.getElementById("slide4");
    slide1.style.display = "none";
    slide2.style.display = "none";
    slide3.style.display = "none";
    slide4.style.display = "none";

    let img_slide1 = document.getElementById("img_slide1");
    let img_slide2 = document.getElementById("img_slide2");
    let img_slide3 = document.getElementById("img_slide3");
    let img_slide4 = document.getElementById("img_slide4");
    img_slide1.classList.remove("ativo");
    img_slide2.classList.remove("ativo");
    img_slide3.classList.remove("ativo");
    img_slide4.classList.remove("ativo");

    let img_slide_atual;
    let slide_atual;

    let captionText = document.getElementById("caption");

    if (n < 1) {
        slideIndex = 4;
    } else if (n > 4) {
        slideIndex = 1;
    } else {
        slideIndex = n;
    }

    switch (slideIndex) {
        case 1:
            img_slide_atual = img_slide1;
            slide_atual = slide1;
            break;
        case 2:
            img_slide_atual = img_slide2;
            slide_atual = slide2;
            break;
        case 3:
            img_slide_atual = img_slide3;
            slide_atual = slide3;
            break;
        case 4:
            img_slide_atual = img_slide4;
            slide_atual = slide4;
            break;
        default:
            img_slide_atual = img_slide1;
            slide_atual = slide1;
    };

    img_slide_atual.classList.add("ativo");
    slide_atual.style.display = "block";
    captionText.innerHTML = img_slide_atual.alt;
}

// Start slideIndex
var slideIndex = 1;
showSlide(slideIndex);
