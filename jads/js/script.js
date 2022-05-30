class Carousel {
    /**
     * https://programmingduck.com/articles/javascript-carousel
     * Com algumas adaptações
     */
    constructor(carousel) {
        //console.log(carousel);
        this.carousel = carousel;
        this.buttonPrev = carousel.querySelector("#carousel-button-prev");
        this.buttonNext = carousel.querySelector("#carousel-button-next");
        this.slidesContainer = carousel.querySelector("#carousel-slides");

        this.currentSlide = 0;
        this.numSlides = this.slidesContainer.children.length;

        this.buttonPrev.addEventListener("click", this.onPrevious.bind(this));
        this.buttonNext.addEventListener("click", this.onNext.bind(this));
    }

    onPrevious() {
        this.currentSlide = this.integerModulo(this.currentSlide - 1, this.numSlides);
        this.carousel.style.setProperty("--current-slide", this.currentSlide);
        //console.log("onPrevious");
    }

    onNext() {
        this.currentSlide = this.integerModulo(this.currentSlide + 1, this.numSlides);
        this.carousel.style.setProperty("--current-slide", this.currentSlide);
        //console.log("onNext");
    }

    integerModulo(number, mod) {
        let result = number % mod;
        if (result < 0) {
            result += mod;
        }
        return result;
    }
}

const carousel = document.getElementById("carousel");
new Carousel(carousel);