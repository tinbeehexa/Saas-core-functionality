'use strict';

const setPosition = (config) => {
    if (config === undefined || config != {}) return;
    else if (config.design.setPosition.enable === true) {
        const elementForm = document.querySelector(config.design.setPosition.className);
        elementForm.classList.add(config.design.setPosition.x);
        elementForm.classList.add(config.design.setPosition.y);
    }
}

export default setPosition;