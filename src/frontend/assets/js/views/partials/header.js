"use strict";

import render from "../../render.js";

const header = () => {
    return render`
        <header class="p-4 header">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="index.html" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none align-items-center flex-column justify-content-center logo-brand">
                        <img src="./assets/image/Logo - variux Saas.png" class="header-logo"></img>
                    </a>

                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" class="nav-link px-2 text-menu-header">About</a></li>
                        <li><a href="#" class="nav-link px-2 text-menu-header">Guide Docs</a></li>
                    </ul>

                    <div class="text-end">
                        <button type="button" class="btn me-2 btn-header">Sign in</button>
                    </div>
                </div>
            </div>
        </header>
    `
}; 

export default header;