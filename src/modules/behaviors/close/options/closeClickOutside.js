"use strict";

import PopupHandler from "../../../../core/PopupHandler.js";

const closeClickOutside = (config, keyPopup) => {
    if(config.enable) {
        function findCloseClickOutsideParent(event) {
            event.stopPropagation();
            if(event.target != document.body) {
                // Tìm phần tử cha của element
                let parent = event.target.parentElement;
                while (parent !== document.body) {
                    // Nếu phần tử cha có chứa class closeClickOutside thì ngừng lại
                    if (parent.classList.contains("closeClickOutside") || parent.classList.contains("activePopup")) {
                        return parent;
                    }
                    parent = parent.parentElement;
                }

                // Nếu nổi bọt ra đến body thì ngừng lại
                return null;
            } else {
                return true;
            }
        }

        let element = document.querySelector(`.${keyPopup}`);
        element = element.children[0];
        document.addEventListener("click", (e) => {
            if (!element.classList.contains("active")) { // Nếu không chứa
                return;
            } else {
                if(e.target != document.querySelector(".btn" + keyPopup)) { // Nếu không click vô nút mở nó
                    if(findCloseClickOutsideParent(e) == true) {
                        return;
                    } else if(findCloseClickOutsideParent(e) == null) {
                        let popupHandler = new PopupHandler(element);
                        popupHandler.remove();
                        return;
                    }
                    return;
                }
            }
        });
    }
};

export default closeClickOutside;