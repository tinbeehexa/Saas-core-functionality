'use strict';

class PopupHandler {
    constructor(element) {
        this.element = element;
    }

    active() {
        this.element.classList.add("active");
    }

    destroy() {
        this.element.classList.remove("active")
    }
}

export default PopupHandler;
