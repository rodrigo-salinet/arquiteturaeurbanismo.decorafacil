// Open the Modal
const openModal = (modal_id) => {
    try {
        let modal_tmp = document.getElementById(modal_id);
        modal_tmp.style.display = "block";
        showSlide(modal_tmp.getElementsByClassName("demo")[0]);
    } catch (e) {
        console.error(e);
        return false;
    };
}

// Close the Modal
const closeModal = (modal_obj) => {
    try {
        modal_obj.style.display = "none";
    } catch (e) {
        console.error(e);
        return false;
    };
}

// Close the Modal
const nextSlide = (obj) => {
    try {
        let modal_temp = obj.parentElement;
        let slide_ativo = modal_temp.getElementsByClassName("slide_ativo");
        let imgs_tmp = modal_temp.getElementsByClassName("demo");

        let n_slide_atual = slide_ativo[0].dataset.slide;

        if (n_slide_atual == 4) {
            n_slide_atual = 0;
        }

        showSlide(imgs_tmp[n_slide_atual]);

        return true;
    } catch (e) {
        console.error(e);
        return false;
    };
}

// Close the Modal
const prevSlide = (obj) => {
    try {
        let modal_temp = obj.parentElement;
        let slide_ativo = modal_temp.getElementsByClassName("slide_ativo");
        let imgs_tmp = modal_temp.getElementsByClassName("demo");

        let n_slide_atual = slide_ativo[0].dataset.slide;

        if (n_slide_atual == 1) {
            n_slide_atual = 3;
        } else {
            n_slide_atual = n_slide_atual - 2;
        }

        showSlide(imgs_tmp[n_slide_atual]);

        return true;
    } catch (e) {
        console.error(e);
        return false;
    };
}

// Show / Change slides
const showSlide = (obj) => {
    try {
        let n = parseInt(obj.dataset.slide);
        let modal_tmp = obj.parentElement.parentElement;
        let slides = modal_tmp.getElementsByClassName('mySlides');
        let captionText = modal_tmp.getElementsByClassName("caption-container")[0];
        let imgs_slides = modal_tmp.getElementsByClassName('demo');

        if (slides.length === 0) {
            console.error("slides não encontrado");
        }

        if (imgs_slides.length === 0) {
            console.error("imgs_slides não encontrados");
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (let i = 0; i < imgs_slides.length; i++) {
            imgs_slides[i].classList.remove("slide_ativo");
        }

        imgs_slides[n-1].classList.add("slide_ativo");
        slides[n-1].style.display = "block";
        captionText.innerHTML = imgs_slides[n-1].alt;

        return true;
    } catch (e) {
        console.error(e);
        return false;
    };
}
