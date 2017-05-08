/**
 * Created by Xavok on 5/8/2017.
 */
"use strict";
const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage',  () => {
    it('should generate correct message object', () => {
        const from = 'admin';
        const text = 'Hey, how are you?';
        var result = generateMessage(from,text);
        expect(result.from).toBe(from);
        expect(result.text).toBe(text);
        expect(result.createdAt).toBeA('number');
        expect(result).toInclude({from,text});
    });
});