"use strict";

import imports from './imports.js';

class Popup {
    constructor(userconfig) {
        this.config = userconfig;
        this.init();
    }

    init = () => {
        const methods = ['trigger', 'design'];
        let status = false;
        const cons = Object.getOwnPropertyNames(this.config.condition ? this.config.condition : '');
        for (const con of cons) {
            if (this.config.condition[con] !== undefined)
                if (imports[con](this.config) === true) 
                    status = true;
            else status = false;
        }
        methods.forEach((method) => {
            if (status === true) {
                if (this.config[method] !== undefined) {
                    const keys = Object.getOwnPropertyNames(this.config[method] ? this.config[method] : '');
                    for (const key of keys) {
                        imports[key](this.config)
                    };
                }
            }
        });
    }
};

export default Popup;