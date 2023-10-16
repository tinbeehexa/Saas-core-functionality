"use strict";

import render from "../../render.js";

const formContact = () => {
    return render`
        <div class="contact">
            <div class="container-fluid d-flex justify-content-center align-items-center flex-column">
                <div class="form-box ">
                    <h1 class="form-contact__title">Make your eCommerece website profitable and beyond</h1>
                </div>
                <div class="form-contact">
                    <div class="form-contact__left">
                        <div class="contact-logo">
                            <a href="#"><img src="./assets/image/Logo 2 - variux Saas.png" alt="Logo" class="logo-form"></a>
                        </div>
                        <div class="form-contact__content">
                            <p>Whether you value a good old-fashion phone call, a power lunch, email, or an abbreviated text message, we are here to help make your life easier. No matter how you decide to reach out, we want to help you make your eCommerce profitable and beyond.</p>
                        </div>
                        <div class="form-contact__logo-footer">
                            <img src="./assets/image/UI - variux Saas.png" alt="Logo" class="logo-contact__footer">
                        </div>
                    </div>
                    <div class="form-contact__right">
                        <form class="form-smb-contact">
                            <input type="text" name="txtName" placeholder="Name" class="contact__input">
                            <input type="text" name="txtEmail" placeholder="Email address" class="contact__input">
                            <input type="text" name="txtPhone" placeholder="Phone" class="contact__input">
                            <input type="text" name="txtWebsite" placeholder="Your website" class="contact__input">
                            <input type="text" name="txtMessage" placeholder="Message" class="contact__input">
                            <div class="gr-btnContact d-flex justify-content-between w-100 h-64 flex-row align-items-center">
                                <button type="submit" class="btnTalk">Talk to us</button>
                                <div class="contact-email">
                                    Or email us at <a href="sales@variux.com">sales@variux.com</a>
                                </div>
                            </div>   
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `
};

export default formContact;