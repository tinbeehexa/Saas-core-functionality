'use strict';

class PopupHandler {
    constructor(element) {
        this.element = element;
    }

    active() {
        this.element.classList.add("variux-popup-active");
        //this.element.style.cssText += ';display:block !important;';
    }

    destroy() {
        this.element.classList.remove("variux-popup-active");
    }
}

export default PopupHandler;
