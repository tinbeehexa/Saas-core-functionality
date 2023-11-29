'use strict';

function overlayPopup(config, keyPopup) {
  if (config.enable === true) {
    let open = false;
    const eKeyPopup = document.querySelector(`.${keyPopup}`);
    const elementOverlayPopup = eKeyPopup.querySelector('.overlayPopup');
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          if (elementOverlayPopup.classList.contains("active") && open === false) {
            let overlay = document.createElement("div");
            overlay.classList.add("overlay");
            document.querySelector("body").appendChild(overlay);
            open = true;
          } else if (!elementOverlayPopup.classList.contains("active")) {
            let overlay = document.querySelector(".overlay");
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