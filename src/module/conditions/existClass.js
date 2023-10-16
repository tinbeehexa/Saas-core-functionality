'use strict';

const existClass = (config) => {
    if (config.condition.existClass.enable === true) {
        const checkClass = document.body.classList.contains(config.condition.existClass.className);
        return checkClass;
    }
}

export default existClass;