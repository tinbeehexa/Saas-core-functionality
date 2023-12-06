"use strict";

import PopupHandler from "../../../../core/PopupHandler.js";

const afterViewXPage = (config, keyPopup) => {
    if (config.enable) {
        let pageViews = sessionStorage.getItem(`${keyPopup}`) || 0;
        pageViews++;

        sessionStorage.setItem(`${keyPopup}`, pageViews);
        
        const ekeyPopup = document.querySelector(`.${keyPopup}`);
        const elementViewXPage = ekeyPopup.querySelector('.afterViewXPage');
        const popupHandler = new PopupHandler(elementViewXPage);

        if (pageViews === config.numPage && !elementViewXPage.classList.contains('variux-popup-active')) {
            popupHandler.active();
        }
    }
}

export default afterViewXPage;
