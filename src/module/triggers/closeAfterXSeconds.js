'use strict';

const closeAfter = (config) => {
    console.log(config);
    if (config.trigger.showAfter.enable === false)
        config.trigger.showAfter.seconds = 0;
    const seconds = config.trigger.showAfter.seconds + config.trigger.closeAfter.seconds;
    if (config.trigger.closeAfter.enable) {
        setTimeout(() => {
            document.querySelector(condition.selector).style.display = 'none';
        }, seconds);
    }
}

export default closeAfter;