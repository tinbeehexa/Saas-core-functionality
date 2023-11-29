"use strict";

import register from "./register.js";
import core from "../../../core/core.js";

//options, keyPopup
class closePopup {
    constructor(obj) {
        this.options = obj.options;
        this.keyPopup = obj.keyPopup; 
        this.init();
    }

    init () {
        const process = new core();
        const methods = ['closeAfterXSeconds', 'closeClickButton', 'closeClickOutside'];
        process.readConfig(this.options, methods, register, this.keyPopup);
    }
}

export default closePopup;