'use strict';

import PopupHandler from "../../../../core/PopupHandler.js";

const visitWebAfterXSeconds = (config, keyPopup) => {
    if (config.enable) {
        const ekeyPopup = document.querySelector(`.${keyPopup}`);
        const elementShowXSeconds = ekeyPopup.querySelector('.visitWebAfterXSeconds');
        const popupHandler = new PopupHandler(elementShowXSeconds);
        setTimeout(() => {
            popupHandler.active();
        }, config.seconds);
    }
}

export default visitWebAfterXSeconds;

