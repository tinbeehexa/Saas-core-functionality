'use strict';

import PopupHandler from "../../../../core/PopupHandler.js";

const closeAfterXSeconds = (config, keyPopup) => {
    if (config.enable) {
        const elementClosePopup = document.querySelector(`.${keyPopup} .closeAfterXSeconds`);
        const popupHandler = new PopupHandler(elementClosePopup);
        let timeoutId;

        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    if (elementClosePopup.classList.contains("active")) {
                            timeoutId = setTimeout(() => {
                                popupHandler.destroy();
                            }, config.seconds);
                    } else {
                        clearTimeout(timeoutId);
                    }
                }
            });
        });

        observer.observe(elementClosePopup, {
            attributes: true,
        });
    }
};

export default closeAfterXSeconds;