"use strict";

const render = ([first, ...res], ...val) => {
    return val.reduce((acc, current) => {
        return acc.concat(current, res.shift());
    }, [first]).filter((fill) => {
        return fill !== true && fill !== false && fill !== 0;
    }).join('');
};

export default render;

