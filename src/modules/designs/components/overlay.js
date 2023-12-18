'use strict';

function overlayPopup(config, keyPopup) {
  if (config.enable === true) {
    let open = false;
    const eKeyPopup = document.querySelector(`.${keyPopup}`);
    console.log(eKeyPopup);
    const elementOverlayPopup = eKeyPopup.querySelector('.overlayPopup');
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          if (elementOverlayPopup.classList.contains("variux-popup-active") && open === false) {
            let overlay = document.createElement("div");
            overlay.classList.add("variux-popup-overlay");
            // overlay.style.cssText += ';display:block !important;position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.4); z-index: 1000;' 
            //style-core
            document.querySelector("body").appendChild(overlay);
            open = true;
          } else if (!elementOverlayPopup.classList.contains("variux-popup-active")) {
            let overlay = document.querySelector(".variux-popup-overlay");
            overlay ? document.querySelector("body").removeChild(overlay) : "";
            open = false;
          }
        }
      });
    });

    observer.observe(elementOverlayPopup, {
      attributes: true,
    });
  }
}
export default overlayPopup;