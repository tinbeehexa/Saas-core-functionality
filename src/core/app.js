'use strict';

import Popup from "./Popup.js";
import existClass from "../modules/conditions/options/existClass.js";

export function readConfig(listConfig) {
    listConfig.forEach((element) => {
        if (existClass(element)) {
            if (element.enable == true) {
                const el = document.createElement('div');
                el.classList.add('variux-popup', element.functionName);
                // el.style.cssText += ';position: absolute;z-index: 1010 !important;'; 
                //style-core
                document.body.appendChild(el);
    
                let newPopup = new Popup(element, element.functionName, element.html, element.css);
                newPopup.show();
            }
        }
    });
};

readConfig(window.thisIsMyConfig);
