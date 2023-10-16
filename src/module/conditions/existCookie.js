const existCookie = (config) => {
    if (config.condition.existCookie.enable === true) {
        const getCookie = (cname) => {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            let len = ca.length;
            for (let i = 0; i < len; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0)
                    return c.substring(name.length, c.length);
            }
            return "";
        }
        const checkCookie = () => {
            let value = getCookie(config.condition.existCookie.cname);
            if (value != 1) {
                return false;
            }
            return true;
        }
        return checkCookie();
    }
    return false;
}

export default existCookie;