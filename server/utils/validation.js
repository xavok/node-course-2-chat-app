/**
 * Created by Xavok on 5/8/2017.
 */
"use strict";
const isRealString = (str) => {
    return typeof str === 'string' && str.trim().length > 0;
};

module.exports = {isRealString};