const clickButton = (condition) => {
    if (condition.clickButton.enable === true) {
        const el = document.getElementById(condition.clickButton.NameID);
        el.addEventListener('click', () => {
            //Trigger
        }) 
    }
};

export default clickButton;