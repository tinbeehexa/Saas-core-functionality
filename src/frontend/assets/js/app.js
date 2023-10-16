'use strict';

import render from "./render.js";
import findUsAt from "./views/partials/findUsAt.js";
import formContact from "./views/partials/formContact.js";
import header from "./views/partials/header.js";

const elementRoot = document.getElementById('root');

const app = () => {
    return render`
        <div class='container-variux'>
            ${header()}
            ${formContact()}
            ${findUsAt()}
        </div> 
    ` 
};

elementRoot.innerHTML = app();
export default app;