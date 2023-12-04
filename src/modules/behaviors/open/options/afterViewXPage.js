"use strict";

import PopupHandler from "../../../../core/PopupHandler.js";

const afterViewXPage = (config, keyPopup) => {
    if (config.enable) {
        let pageViews = localStorage.getItem(`${keyPopup}`) || 0;
        pageViews++;

        localStorage.setItem(`${keyPopup}`, pageViews);

        if (keyPopup) {
            const elementViewXPage = keyPopup.querySelector('.afterViewXPage');
            const popupHandler = new PopupHandler(elementViewXPage);

            if (elementViewXPage && !elementViewXPage.classList.contains('variux-popup-active')) {
                popupHandler.active();
            }
        } 
    }
}

export default afterViewXPage;
