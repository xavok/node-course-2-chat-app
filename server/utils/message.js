/**
 * Created by Xavok on 5/8/2017.
 */
const generateMessage = (from, text) => {
    "use strict";
    return {
        from,
        text,
        createdAt: new Date().getTime()
    };
};
const generateLocationMessage = (from, latitude, longitude) => {
    "use strict";
    return {
        from,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        createdAt: new Date().getTime()
    };
};

module.exports = {generateMessage, generateLocationMessage};
