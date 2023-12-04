"use strict";

import PopupHandler from "../../../../core/PopupHandler.js";

const closeClickButton = (config, keyPopup) => {
    if (config.enable) {
        const eKeyPopup = document.querySelector(`.${keyPopup}`);
        const elementBTNClosePopup = eKeyPopup.querySelector('.btnClosePopup');
        elementBTNClosePopup.onclick = () => {
            const elementPopup = eKeyPopup.querySelector('.closeClickButton');
            const popupHandler = new PopupHandler(elementPopup);
            popupHandler.destroy();
        }
    }
}

export default closeClickButton;