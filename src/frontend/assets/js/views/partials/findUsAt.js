"use strict";

import render from "../../render.js";

const findUsAt = () => {
    return render`
        <div class="findUs">
            <div class="container-findUsAs d-flex justify-content-between container">
                <div class="container-findUsAs__left d-flex flex-row align-items-center justify-content-start container-fluid">
                    <div class="Info-findUs">
                        <div class="Info-findUs__title">
                            <h2>Find us at</h2>
                        </div>
                        <div class="Info-findUs__content">
                            <ul class="Info-findUs__items">
                                <li>
                                    <span class="findUs-item">Adress: </span>
                                    3600 Dallas Highway suite 230–360, Marietta, GA 30064
                                </li>
                                <li> 
                                    <span class="findUs-item">Phone:  </span>
                                    (+1) 678-667-2185
                                </li>
                                <li>
                                    <span class="findUs-item">Email:  </span>
                                    sales@variux.com
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="container-findUsAs__right">
                    <img src="./assets/image/us-at-varius.jpg" alt="Logo" class="image-us-at">
                </div>
            </div>
        </div>
    `;
};

export default findUsAt;