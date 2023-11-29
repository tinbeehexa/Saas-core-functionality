"use strict";

import register from "./register.js";
import core from "../../../core/core.js";

//options, keyPopup
class open {
    constructor(obj) {
        this.options = obj.options;
        this.keyPopup = obj.keyPopup; 
        this.init();
    }

    init () {
        this.isOpenPopup();
    }

    isOpenPopup () {
        const process = new core();
        const methods = ['scrollToXPercent', 'visitWebAfterXSeconds', 'onClickItem', 'afterViewXPage'];

        return process.readConfig(this.options, methods, register, this.keyPopup);
    }
};


export default open;