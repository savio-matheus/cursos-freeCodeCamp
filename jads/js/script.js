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
        this.previousSlide = 0;
        this.numSlides = this.slidesContainer.children.length;

        this.buttonPrev.addEventListener("click", this.onPrevious.bind(this));
        this.buttonNext.addEventListener("click", this.onNext.bind(this));

        this.updateScreen();
    }

    onPrevious() {
        this.currentSlide = this.integerModulo(this.currentSlide - 1, this.numSlides);
        this.updateScreen();
        //console.log("onPrevious");
    }

    onNext() {
        this.currentSlide = this.integerModulo(this.currentSlide + 1, this.numSlides);
        this.updateScreen();
        //console.log("onNext");
    }

    setCurrentSlide(slideNumber) {
        this.currentSlide = slideNumber;
        this.updateScreen();
    }

    updateScreen() {
        this.carousel.style.setProperty("--current-slide", this.currentSlide);

        let menuButton = document.querySelector(`.navbar-item:nth-child(${this.previousSlide+1})`);
        menuButton.style.setProperty("box-shadow", "");
        
        menuButton = document.querySelector(`.navbar-item:nth-child(${this.currentSlide+1})`);
        menuButton.style.setProperty("box-shadow", "inset 0 -3px 0px var(--color-main)");

        this.previousSlide = this.currentSlide;
    }

    integerModulo(number, mod) {
        let result = number % mod;
        if (result < 0) {
            result += mod;
        }
        return result;
    }
}

const carouselElement = document.getElementById("carousel");
let carousel = new Carousel(carouselElement);