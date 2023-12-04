"use strict";

import closePopup from "./close/close.js";
import open from "./open/open.js";

//behaConfig, keyPopup
class behaviours {
    constructor (obj) {
        this.optionOpen = obj.config.behaviors.open;
        this.optionClose = obj.config.behaviors.close;
        this.keyPopup = obj.keyPopup;
        this.init();
    }
    
    init () {
        new open(this); //this.optionOpen, this.keyPopup
        new closePopup(this); //this.optionClose, this.keyPopup
    }
};

export default behaviours;