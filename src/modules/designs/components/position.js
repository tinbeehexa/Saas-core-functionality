'use strict';

const positionPopup = (config, keyPopup) => {
    if (config.width != null && config.height != null) {
        var browserWidth = document.documentElement.clientWidth;
        var browserHeight = document.documentElement.clientHeight;
        var popupWidth = config.width;
        var popupHeight = config.height;

        if (browserWidth <= 360) {
            popupWidth *= 0.4;
            popupHeight *= 0.4;
        } else if (browserWidth <= 480) {
            popupWidth *= 0.5;
            popupHeight *= 0.5;
        } else if (browserWidth <= 640) {
            popupWidth *= 0.7;
            popupHeight *= 0.7;
        } else if (browserWidth <= 768) {
            popupWidth *= 0.8;
            popupHeight *= 0.8;
        }

        var frameWidth = browserWidth - popupWidth;
        var frameHeight = browserHeight - popupHeight;

        var ratioWidth = (frameWidth / browserWidth) * 100;
        var ratioHeight = (frameHeight / browserHeight) * 100;

        var moveDistanceByBrowserWidth = browserWidth * (config.x / 100);
        var moveDistanceByBrowserHeight = browserHeight * (config.y / 100);

        var moveDistanceByFrameWidth = moveDistanceByBrowserWidth * (ratioWidth / 100);
        var moveDistanceByFrameHeight = moveDistanceByBrowserHeight * (ratioHeight / 100);


        // Lấy ra element bọc popup
        const eKeyPopup = document.querySelector(`.${keyPopup}`);
        let popupElement = eKeyPopup.querySelector('.positionPopup');

        popupElement.style.setProperty("width", `${popupWidth}px`, "important");
        popupElement.style.setProperty("height", `${popupHeight}px`, "important");

        popupElement.style.setProperty("left", `${moveDistanceByFrameWidth}px`, "important");
        popupElement.style.setProperty("top", `${moveDistanceByFrameHeight}px`, "important");
    }
}


export default positionPopup;

// Lấy được chiều dài , rộng của trình duyệt
// Lấy chiều dài, rộng của popup
// Lấy chiều dài, rộng của khung trong = trình duyệt - popup
// Tính được tỷ lệ độ lớn của chiều dài khung so với chiều dài trình duyệt
// Tính được tỷ lệ độ lớn của chiều rộng khung so với chiều rộng trình duyệt

// trình duyệt: x:1000px, y:800px
// popup: x:450px, y:300px
// khung: x:550px, y:500px
// tỷ lệ khung so với trình duyệt: x:55%, y:62,5%

// vd: Người dung set (50%, 50%)
// Tính được quảng đường dịch chuyển theo trình duyệt là: x:500px, y:400px
// quảng đường dịch chuyển thực tế của popup theo khung là: x: 275px, y:250px

// X = 25%: 25% của khoảng cách tối đa bạn có thể dịch chuyển popup theo trục X