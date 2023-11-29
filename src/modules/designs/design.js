"use strict";

import register from "./register.js";
import core from "../../core/core.js";

//options, keyPopup
class designPopup {
    constructor(obj) {
        this.options = obj.config.design.options; 
        this.keyPopup = obj.keyPopup.keyPopup;
        this.init();
    }

    init () {
        const process = new core();
        const methods = ['overlayPopup', 'positionPopup'];

        process.readConfig(this.options, methods, register, this.keyPopup);
    }
}


export default designPopup;