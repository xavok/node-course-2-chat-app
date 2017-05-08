/**
 * Created by Xavok on 5/8/2017.
 */
"use strict";
const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage',  () => {
    it('should generate correct message object', () => {
        const from = 'admin';
        const text = 'Hey, how are you?';
        var result = generateMessage(from,text);
        expect(result.createdAt).toBeA('number');
        expect(result).toInclude({from,text});
    });
});
describe('generateLocationMessage',  () => {
    it('should generate correct location object', () => {
        const from = 'admin';
        const latitude = 1;
        const longitude = 1;
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        var result = generateLocationMessage(from,latitude,longitude);
        expect(result.createdAt).toBeA('number');
        expect(result).toInclude({from,url});
    });
});