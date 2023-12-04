"use strict";

import PopupHandler from "../../../../core/PopupHandler.js";

const onClickItem = (config, keyPopup) => {
    if (config.enable) {
        if (document.querySelector(`.btn${keyPopup}`) == null) return;
        document.querySelector(`.btn${keyPopup}`).onclick = () => {
            const elementOnClickItem = document.querySelector(`.${keyPopup}`);
            const onClickShowPopup =  elementOnClickItem.querySelector('.onClickItem');
            const popupHandler = new PopupHandler(onClickShowPopup);
            popupHandler.active();
        }
    }
}

export default onClickItem;
