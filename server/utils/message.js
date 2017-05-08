/**
 * Created by Xavok on 5/8/2017.
 */
var moment = require('moment');

const generateMessage = (from, text) => {
    "use strict";
    return {
        from,
        text,
        createdAt: moment().valueOf()
    };
};
const generateLocationMessage = (from, latitude, longitude) => {
    "use strict";
    return {
        from,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        createdAt: moment().valueOf()
    };
};

module.exports = {generateMessage, generateLocationMessage};
