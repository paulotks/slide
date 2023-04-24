export default class Slide {
    constructor(slide, wrapper) {
        this.slide = document.querySelector(slide)
        this.wrapper = document.querySelector(wrapper)
    }

    onStart(event) {
        event.preventDefault();
        console.log(this);
    }

    addSlideEvents() {
        this.wrapper.addEventListenner('mousedown', this.onStart);
    }

    init() {
        this.addEventListenner();
        return this;
    }
}