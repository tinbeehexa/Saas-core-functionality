'use strict';

import register from "./register.js";
import core from "../../core/core.js";

class condition {
    constructor(options) {
        this.options = options; 
    }

    getStatus () {
        const process = new core();
        const methods = ['existCookie'];
        process.activeConditions(this.options, methods);
        return process.readConfig(this.options, methods, register);
    }
};

export default condition;