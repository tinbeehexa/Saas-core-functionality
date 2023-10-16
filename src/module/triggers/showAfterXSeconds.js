'use strict';

const showAfter = (condition) => {
    if (condition.trigger.showAfter.enable === true) {
        window.onload = () => {
            setTimeout(() => {
                document.querySelector(condition.selector).style.display = 'block';
            }, condition.trigger.showAfter.seconds);
        }
    }
}

export default showAfter;

