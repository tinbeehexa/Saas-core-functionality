function setOverlay (config) {
    console.log(config)
    if (config.design.setOverlay.enable === true) {
        let overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.querySelector('body').appendChild(overlay);
    } 
    else {
        let overlay = document.querySelector('.overlay');
        overlay ? document.querySelector('body').removeChild(overlay) : "";
    }
}

export default setOverlay;