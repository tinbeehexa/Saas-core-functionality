'use strict';

import Popup from "./Popup.js";

const existPopupBody = (config) => {
    if (config.enable === true) {
        const checkClass = document.body.classList.contains(config.namePopup);
        return checkClass;
    }
    return false;
}

export function readConfig(listConfig) {
    listConfig.forEach((element) => {
        if (existPopupBody(element)) {
            if (element.enable == true) {
                const el = document.createElement('div');
                el.classList.add('my-popup', element.functionName);
                document.body.appendChild(el);
    
                let newPopup = new Popup(element, element.functionName, element.html, element.css);
                newPopup.show();
            }
        }
    });
};

// readConfig(window.thisIsMyConfig);
