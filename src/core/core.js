"use strict";

class core {
    constructor(userconfig) {
        this.config = userconfig;
        this.Conditions = [];
    }

    readConfig (config, methods, register, keyPopup) {
        methods.forEach((method) => {
            if (config[method] !== undefined) {
                const active = register[method](config[method], keyPopup);
                if (active == true)
                    this.Conditions.pop();
            }
        });
        if (this.Conditions.length == 0)
            return true;
        else return false;
    }

    activeConditions (config, methods) {
        methods.forEach((method) => {
            if (config[method].enable == true) 
                this.Conditions.push(method);
        });
    }
};

export default core;