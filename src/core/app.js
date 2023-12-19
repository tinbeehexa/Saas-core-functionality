'use strict';

import Popup from "./Popup.js";
import existClass from "../modules/conditions/options/existClass.js";

export function readConfig(listConfig) {
    fetch(window.cssLink)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.text();
    })
    .then(cssContent => {
        console.log(cssContent);
        const head = document.head || document.getElementsByTagName('head')[0];
        const style = document.createElement('style');
        style.appendChild(document.createTextNode(cssContent));
          head.appendChild(style);
        })
    
    listConfig.forEach((element) => {
        if (existClass(element)) {
            if (element.enable == true) {
                const el = document.createElement('div');
                el.classList.add('variux-popup', element.functionName);
                //el.style.cssText += ';position: absolute;z-index: 1010 !important;';
                document.body.appendChild(el);
    
                let newPopup = new Popup(element, element.functionName, element.html, element.css);
                newPopup.show();
            }
        }
    });
};

readConfig(window.thisIsMyConfig);
